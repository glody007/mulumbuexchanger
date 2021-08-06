import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';

const PayementMode = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PayementMode;
