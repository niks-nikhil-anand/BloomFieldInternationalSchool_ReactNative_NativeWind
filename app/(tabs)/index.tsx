import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>HomePage</Text>
        <Text style={styles.text}>HomePage</Text>
        <Text style={styles.text}>HomePage</Text>
        <Text style={styles.text}>HomePage</Text>
        <Text style={styles.text}>HomePage</Text>
        <Text style={styles.text}>HomePage</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: 'black',
  }
});