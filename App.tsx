import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { ServiceProvider } from './src/context/ServiceContext';

export default function App() {
  return (
    <ServiceProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ServiceProvider>
  );
}
