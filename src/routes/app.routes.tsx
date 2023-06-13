import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

import {FirstScreen} from '../screens/FirstScreen';
import {SecondScreen} from '../screens/SecondScreen';

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Primeira" component={FirstScreen} />
      <Screen name="Segunda" component={SecondScreen} />
    </Navigator>
  );
}
