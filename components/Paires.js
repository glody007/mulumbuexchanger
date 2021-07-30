import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';

const Actions = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.action, { color: colors.text }]}>
        Paire
      </Text>
      <Text style={[styles.action, { color: colors.text }]}>
        Depot
      </Text>
      <Text style={[styles.action, { color: colors.text }]}>
        Retrait
      </Text>
      <Text style={[styles.action, { color: colors.text }]}>
        Achat
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  action: {
    flex: 2,
    margin: 10
  }
});

export default Actions;
