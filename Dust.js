import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import DustSimple from './DustSimple';
import DustDetail from './DustDetail';
import dustCondition from './dustCondition.json';

// icon: sentiment-very-satisfied, sentiment-satisfied, sentiment-neutral, sentiment-dissatisfied, sentiment-very-dissatisfied
function Dust({ pm10Value, 
  pm25Value, 
  so2Value, 
  coValue,
  o3Value,
  no2Value,
  condition,
  district, 
  timeStamp,
  reload,
  toggle,
  changeView,
  shareInfomation }) {
    return (
    <LinearGradient colors={dustCondition[condition]['colors']} style={styles.container}>
      <View style={styles.menu}>
        <View style={styles.menuLeft}>
          <MaterialIcons 
            color='white' 
            size={40} 
            name='share' 
            onPress={shareInfomation}
            />
        </View>
        <View style={styles.menuRight}>
          <MaterialIcons 
            color='white' 
            size={40} 
            name='my-location' 
            onPress={reload}
            />
        </View>  
      </View>
      <View style={styles.upper}>
        <MaterialIcons 
          color='white' 
          size={144} 
          name={dustCondition[condition]['icon']}
        />
        <Text style={styles.state}>
          {dustCondition[condition]['state']}
        </Text>
        <Text style={styles.info}>
          {district}
        </Text>
        <Text style={styles.info}>
          {timeStamp} 기준
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
          changeView={changeView}
        />
        : 
        <DustSimple 
          pm10Value={pm10Value} 
          pm25Value={pm25Value} 
          subtitle={dustCondition[condition]['subtitle']} 
          changeView={changeView}
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
  condition: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired,
  changeView: PropTypes.func.isRequired,
  shareInfomation: PropTypes.func.isRequired,
}

export default Dust;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    flex: 1,
    flexDirection: 'row'
  },
  menuLeft: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 30
  },
  menuRight: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 30
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
  info: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 5,
  }
});