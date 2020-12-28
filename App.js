import React, { useState, useEffect, useRef } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as firebase from "firebase";
import apiKey from "./config/keys";
import { Provider } from "react-redux";
import store from "./store/store";
import RootNavigator from "./navigations/RootNavigation";
import * as Notifications from 'expo-notifications';
import {registerForPushNotificationsAsync} from './utils/notificationService';

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);


  if (!firebase.apps.length) {
    firebase.initializeApp(apiKey.firebaseConfig);
  } else {
    firebase.app();
  }

  return (
    <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
      <RootNavigator/>
    </ApplicationProvider>
    </Provider>
  );
}
