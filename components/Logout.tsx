import React from "react";
import { Button } from "react-native-elements";
import { Page, mainPage } from "./MainPage";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../contexts/UserContext";

const Component: React.FC = () => {
  const userContext = useUserContext();
  const navigation = useNavigation();
  const logout = async () => {
    await userContext.logout();
    navigation.navigate("login");
  };

  return (
    <Page>
      <Button title="Logout" onPress={logout} />
    </Page>
  );
};

export default mainPage("logout", Component, "lock");
