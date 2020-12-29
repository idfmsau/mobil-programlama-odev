import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text } from "@ui-kitten/components";
import styles from '../../styles/components/InfoBox.style';

const { width, height } = Dimensions.get("window");

const InfoBox = (props) => {
  const { title, value } = props;

  return (
    <View style={styles.container}>
        <View>
      <Text category="h5" status='basic'>{title}</Text>
        </View>
        <View>
      <Text category="h5" status='info'>{value}</Text>
        </View>
    </View>
  );
};

export default InfoBox;
