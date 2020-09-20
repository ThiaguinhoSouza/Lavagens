import React from 'react';
import { View, Button, Text } from 'react-native';

const CompanyData = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About Arlen</Text>
  </View>
);

CompanyData.navigationOptions = {
  title: 'About',
}



export default CompanyData;