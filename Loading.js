import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Loading ({ error }) {
  return (
    <View style={styles.loading}>
      <MaterialIcons color='white' size={144} name='sentiment-very-satisfied' />
      <Text style={styles.loadingText}>미세먼지 정보를 불러오고 있습니다.</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#81DAF5',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    color: 'white',
    marginBottom: 100
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
});