import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import colorScheme from './WelcomeScreen';
import WelcomeSolution from './components/WelcomeSolution';

export default function App() {
  return (
    <>
      <View style={[styles.container,colorScheme === 'light' ? {backgroundColor:'#fff'}:{backgroundColor:'#333'}]}>
        <LittleLemonHeader />
        <WelcomeSolution />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  footerContainer: { backgroundColor: '#333333' },
});
