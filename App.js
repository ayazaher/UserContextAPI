import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { AppRouter } from "./src/app-router";
import { UsersProvider } from './src/Context'



export default function App() {

  return (
    <NativeBaseProvider>
      <UsersProvider>
        <AppRouter/>
      </UsersProvider>
    </NativeBaseProvider>
  );
}
