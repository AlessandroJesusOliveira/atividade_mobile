import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CounterContext from '../../contexts/CounterContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 56,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonZero: {
    width: 200,
    height: 56,
    backgroundColor: '#df1414',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  countText: {
    fontSize: 21,
  },
  Text: {
    fontSize: 21,
  },
});

export function FirstScreen() {
  const navigation = useNavigation();

  const {count, setCount} = useContext(CounterContext);

  const handleGoSecondScreen = () => {
    navigation.navigate('Segunda');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.countText}>{count}</Text> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}>
        <Text>Click para acrescentar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(0)} style={styles.buttonZero}>
        <Text>Zerar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoSecondScreen}>
        <Text style={styles.Text}>Ir para Segunda pagina</Text>
      </TouchableOpacity>
    </View>
  );
}
