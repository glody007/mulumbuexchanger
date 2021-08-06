import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { useTheme } from '@react-navigation/native';

class Paires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Paire', 'Prix', '(24h)Variation'],
      tableData: [
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
        [{ from_currency: 'ETH', to_currency: 'USDT' }, 'O.000000004', '+50'],
      ]
    }
  }

  render() {
    const state = this.state;
    const { theme } = this.props;
    const paire = (data, index) => (
      <Text style={{ color: theme.colors.text }}>
        <Text style={{ color: theme.colors.text, fontWeight: "bold", fontSize: 18 }}>{ data.from_currency }</Text>
        /{ data.to_currency }
      </Text>
    );

    return (
      <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={[styles.headText, {color: theme.colors.primary}]}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 0 ? paire(cellData, index) : cellData} textStyle={{ color: theme.colors.text, textAlign: 'center' }}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

export default function(props) {
  const theme = useTheme();

  return <Paires {...props} theme={theme} />;
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40 },
  text: { margin: 6 },
  headText: { margin: 6, fontSize: 12 },
  row: { flexDirection: 'row' },
});
