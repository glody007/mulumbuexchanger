import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';

const Market = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={[
          {
            id: 1,
            created: '2-2-2020',
            code: 'ty',
            type: 'VENTE',
            state: 'EN_COURS',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 2,
            created: '10-2-2020',
            code: 'ty',
            type: 'VENTE',
            state: 'EN_COURS',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 3,
            created: '8-2-2020',
            code: 'ty',
            type: 'VENTE',
            state: 'EN_COURS',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 4,
            created: '2-2-2021',
            code: 'ty',
            type: 'VENTE',
            state: 'EN_COURS',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 5,
            created: '2-4-2020',
            code: 'ty',
            type: 'VENTE',
            state: 'EXECUTER',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 6,
            created: '2-2-2019',
            code: 'ty',
            type: 'VENTE',
            state: 'EXECUTER',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 7 ,
            created: '1-2-2020',
            code: 'ty',
            type: 'VENTE',
            state: 'ANNULER',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 8,
            created: '2-2-2019',
            code: 'ty',
            type: 'VENTE',
            state: 'EXECUTER',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          },
          {
            id: 9,
            created: '1-2-2020',
            code: 'ty',
            type: 'VENTE',
            state: 'ANNULER',
            owner: 1,
            montant: 20,
            from_currency: 'BTC',
            to_currency: 'USDT'
          }
        ]}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) =>
        <View style={[styles.item, { backgroundColor: colors.card }]}>
          <View style={styles.detail}>
            <Text style={{ color: colors.text, fontWeight: "bold", fontSize: 18 }}>{ item.type }</Text>
          </View>
          <View style={styles.detail}>
            <Text style={{ color: colors.text, fontWeight: "bold", fontSize: 18 }}>{ item.montant } { item.from_currency }</Text>
          </View>
          <View style={styles.detail}>
            <Text style={{ color: colors.text, textAlign: 'center' }}>
              <Text style={{ color: colors.text, fontWeight: "bold", fontSize: 18 }}>{ item.from_currency }</Text>
              /{ item.to_currency }
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={{ color: colors.text, textAlign: 'right' }}>{ item.created }</Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Acheter"
              color={colors.primary}
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "row",
   alignItems: "flex-start",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: 10,
    marginVertical: 1
  },
  detail: {
    flex: 1,
    minWidth: '20%',
  },
  button: {
    flex: 1,
    minWidth: '30%',
  },
  text: {
    fontSize: 15
  }
});

export default Market;
