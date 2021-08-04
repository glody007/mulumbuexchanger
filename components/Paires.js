import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { useTheme } from '@react-navigation/native';

export default class Paires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Paire', 'Prix', '(24h)Variation'],
      tableData: [
        ['ETH/USDT', 'O.000000004', '+50'],
        ['ETH/USDT', 'O.000000004', '+50'],
        ['ETH/USDT', 'O.000000004', '+50'],
        ['ETH/USDT', 'O.000000004', '+50']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.headText}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40 },
  text: { margin: 6, color: '#FFF', fontSize: 16 },
  headText: { margin: 6, color: '#FFF', fontSize: 14 },
  row: { flexDirection: 'row' },
});
