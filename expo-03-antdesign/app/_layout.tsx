import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from '@ant-design/react-native';

export default function RootLayout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Expo 03 - Ant Design' }} />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
}
