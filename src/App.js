import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from "react-native";
//import Users from "./components/Users";
import Companies from "./components/Companies";
import CustomerRegistration from "./components/CustomerRegistration";
import CompanyData from "./components/CompanyData";

//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Companies />
        <CustomerRegistration />
        <CompanyData />
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    alignContent: "center",
    padding: 4
  },
});