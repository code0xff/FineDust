import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function DustDetail ({ pm10Value, 
  pm25Value,  
  so2Value, 
  coValue,
  o3Value,
  no2Value }) {
  return (        
    <View style={styles.lower}>
      <Text style={styles.detail}>
        미세먼지 농도 {pm10Value} ㎍/㎥
      </Text>
      <Text style={styles.detail}>
        초미세먼지 농도 {pm25Value} ㎍/㎥
      </Text>
      <Text style={styles.detail}>
        아황산가스 농도 {so2Value} ppm
      </Text>
      <Text style={styles.detail}>
        일산화탄소 농도 {coValue} ppm
      </Text>
      <Text style={styles.detail}>
        오존 농도 {o3Value} ppm
      </Text>
      <Text style={styles.detailLast}>
        이산화질소 농도 {no2Value} ppm
      </Text>
    </View>
  )
}

DustDetail.propTypes = {
  pm10Value: PropTypes.string.isRequired,
  pm25Value: PropTypes.string.isRequired,
  so2Value: PropTypes.string.isRequired,
  coValue: PropTypes.string.isRequired,
  o3Value: PropTypes.string.isRequired,
  no2Value: PropTypes.string.isRequired
}

export default DustDetail;

const styles = StyleSheet.create({
  lower: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  detail: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 5
  },
  detailLast: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 50
  }
});