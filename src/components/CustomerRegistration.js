import React from 'react';
import { View, Button, Text } from 'react-native';

const CustomerRegistration = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
    <Button 
      title="Ir para proxima pagina"
      onPress={() => navigation.navigate('About') }
    />
  </View>
);

CustomerRegistration.navigationOptions = {
  title: 'Home'
}

export default CustomerRegistration;