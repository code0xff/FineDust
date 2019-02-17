import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const dustStatus = {
  'good': {
    colors: ['#00C6FB', '#005BEA'],
    state: '좋음',
    subtitle: '집구석에만 있지말고 나가세요 제발 ^^',
    icon: 'sentiment-satisfied'
  },
  'normal': {
    colors: ['#FEF253', '#FF7300'],
    state: '보통',
    subtitle: '적당히 좋은 적당히 안좋은 날',
    icon: 'sentiment-neutral'
  },
  'bad': {
    name: 'normal',
    colors: ['#B40404', '#FF4000'],
    state: '나쁨',
    subtitle: '집돌이를 해야할 이유가 생겼다...',
    icon: 'sentiment-dissatisfied'
  },
  'superBad': {
    colors: ['#000000', '#D8D8D8'],
    state: '매우 나쁨',
    subtitle: '살려줘...',
    icon: 'sentiment-very-dissatisfied'
  }
}

// icon: sentiment-very-satisfied, sentiment-satisfied, sentiment-neutral, sentiment-dissatisfied, sentiment-very-dissatisfied
function Dust({ pm10Value, pm25Value, district }) {
  let status = null;
  if (pm10Value >= 151 || pm25Value >= 76) {
    status = 'superBad';
  } else if (pm10Value >= 81 || pm25Value >= 36) {
    status = 'bad';
  } else if (pm10Value >= 31 || pm25Value >= 16) {
    status = 'normal';
  } else {
    status = 'good';
  }

  return (
    <LinearGradient 
        colors={dustStatus[status].colors} 
        style={styles.container}>
      <View style={styles.upper}>
        <MaterialIcons color='white' size={144} name={dustStatus[status].icon} />
        <Text style={styles.state}>
          {dustStatus[status].state}
        </Text>
        <Text style={styles.district}>
          {district}
        </Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>
          미세먼지 농도 {pm10Value}
        </Text>
        <Text style={styles.title}>
          초미세먼지 농도 {pm25Value}
        </Text>
        <Text style={styles.subtitle}>
          {dustStatus[status].subtitle}
        </Text>
      </View>
    </LinearGradient>
  )
}

Dust.propTypes = {
  pm10Value: PropTypes.string.isRequired,
  pm25Value: PropTypes.string.isRequired,
  district:  PropTypes.string.isRequired
}

export default Dust;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  state: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10,
  },
  district: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 5,
  },
  lower: {
    flex: 1,
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
  },
});