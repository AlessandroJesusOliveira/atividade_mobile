import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CounterContext from '../../contexts/CounterContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function SecondScreen() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {count, setCount} = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Text>Segunda Pagina</Text>

      <Text>{`O valor do contador esta em ${count}`}</Text>
    </View>
  );
}
