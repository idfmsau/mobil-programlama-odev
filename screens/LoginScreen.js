import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Alert
} from "react-native";

import styles from "../styles/LoginScreen.style";
import { TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/authActions";
import userSignIn from '../utils/loginUtils/userSignIn';
import { TypingAnimation } from "react-native-typing-animation";

function LoginScreen({ navigation, loggedUser, loginUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typingEmail, setTypingEmail] = useState(false);
  const [typingPassword, setTypingPassword] = useState(false);

  _typeFocus = (value) => {
    if (value == "email") {
      setTypingEmail(true);
    } else {
      setTypingEmail(false);
    }
    if (value == "password") {
      setTypingPassword(true);
    } else {
      setTypingPassword(false);
    }
  };

  _typingDots = () => {
    return <TypingAnimation dotColor="black" style={{ marginRight: 25 }} />;
  };

  _validateLogin = async (email, password, loginUser) => {
    try{
      let result = await userSignIn(email, password, loginUser);
    }catch(err){
      Alert.alert('Ops!', err);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/images/header.png')}
          style={styles.imageBackground}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Merhaba!
          </Text>
          <Text style={{ color: "white" }}>Devam etmek için giriş yap</Text>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Email adresi</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Emailinizi Giriniz..."
            style={styles.textInput}
            onChangeText={setEmail}
            onFocus={() => _typeFocus("email")}
          />
          {typingEmail ? _typingDots() : null}
        </View>
        <Text style={styles.title}>Şifre</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Şifrenizi Giriniz..."
            secureTextEntry
            style={styles.textInput}
            onChangeText={setPassword}
            onFocus={() => _typeFocus("password")}
          />
          {typingPassword ? _typingDots() : null}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            _validateLogin(email, password, loginUser);
          }}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("SignupScreen");
          }}
        >
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.auth.loggedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
