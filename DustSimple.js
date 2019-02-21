import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function DustSimple ({ pm10Value, pm25Value, subtitle }) {
  return (
    <View style={styles.lower}>
      <Text style={styles.title}>
        미세먼지 농도 {pm10Value}
      </Text>
      <Text style={styles.title}>
        초미세먼지 농도 {pm25Value}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  )
}

DustSimple.propTypes = {
  pm10Value: PropTypes.string.isRequired,
  pm25Value: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default DustSimple;

const styles = StyleSheet.create({
  lower: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 30,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 50
  }
});