import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';

const Actions = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.card }]}>
      <View style={[styles.action, { backgroundColor: colors.primary }]}>
        <Text style={[styles.textAction, { color: colors.text }]}>
          Depot
        </Text>
      </View>
      <View style={[styles.action, { backgroundColor: colors.primary }]}>
        <Text style={[styles.textAction, { color: colors.text }]}>
          Retrait
        </Text>
      </View>
      <View style={[styles.action, { backgroundColor: colors.primary }]}>
        <Text style={[styles.textAction, { color: colors.text }]}>
          Achat
        </Text>
      </View>
      <View style={[styles.action, { backgroundColor: colors.primary }]}>
        <Text style={[styles.textAction, { color: colors.text }]}>
          Vente
        </Text>
      </View>
      <View style={[styles.action, { backgroundColor: colors.primary }]}>
        <Text style={[styles.textAction, { color: colors.text }]}>
          Swap
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    borderWidth: 5,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  action: {
    flex: 1,
    margin: 10,
    height: 30,
    minWidth: 80,
    borderRadius: 4,
    justifyContent: "center"
  },
  textAction: {
    textAlign: "center",
  }
});

export default Actions;
