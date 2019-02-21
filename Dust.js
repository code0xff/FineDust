import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import DustSimple from './DustSimple';
import DustDetail from './DustDetail';

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
    colors: ['#FF0000', '#FFBF00'],
    state: '나쁨',
    subtitle: '오늘은 집돌이가 되겠어!',
    icon: 'sentiment-dissatisfied'
  },
  'superBad': {
    colors: ['#000000', '#D8D8D8'],
    state: '매우 나쁨',
    subtitle: '으앙 살려줘...',
    icon: 'sentiment-very-dissatisfied'
  }
}

// icon: sentiment-very-satisfied, sentiment-satisfied, sentiment-neutral, sentiment-dissatisfied, sentiment-very-dissatisfied
function Dust({ pm10Value, 
  pm25Value, 
  so2Value, 
  coValue,
  o3Value,
  no2Value,
  district, 
  reload,
  toggle,
  changeView }) {
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
    <LinearGradient colors={dustStatus[status].colors} style={styles.container}>
      <View style={styles.menu}>
        <MaterialIcons 
          color='white' 
          size={40} 
          name='my-location' 
          onPress={reload}
          />
      </View>
      <View style={styles.upper}>
        <MaterialIcons 
          color='white' 
          size={144} 
          name={dustStatus[status].icon} 
          onPress={changeView}
        />
        <Text style={styles.state}>
          {dustStatus[status].state}
        </Text>
        <Text style={styles.district}>
          {district}
        </Text>
      </View>
      {toggle ?  
        <DustDetail 
          pm10Value={pm10Value} 
          pm25Value={pm25Value} 
          so2Value={so2Value} 
          coValue={coValue} 
          o3Value={o3Value} 
          no2Value={no2Value} 
        />
        : 
        <DustSimple 
          pm10Value={pm10Value} 
          pm25Value={pm25Value} 
          subtitle={dustStatus[status].subtitle} 
        />
      }
    </LinearGradient>
  )
}

Dust.propTypes = {
  pm10Value: PropTypes.string.isRequired,
  pm25Value: PropTypes.string.isRequired,
  so2Value: PropTypes.string.isRequired, 
  coValue: PropTypes.string.isRequired,
  o3Value: PropTypes.string.isRequired,
  no2Value: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired
}

export default Dust;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
    paddingTop: 10
  },
  upper: {
    flex: 4,
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
  }
});