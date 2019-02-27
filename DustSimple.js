import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function DustSimple ({ pm10Value, pm25Value, subtitle, changeView }) {
  return (
    <View style={styles.lower}>
      <View style={styles.lowerBody}>
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
      <View style={styles.lowerFooter}>
        <Text onPress={changeView} style={styles.toDetail}>더보기</Text>
      </View>
    </View>
  )
}

DustSimple.propTypes = {
  pm10Value: PropTypes.string.isRequired,
  pm25Value: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired
}

export default DustSimple;

const styles = StyleSheet.create({
  lower: {
    flex: 4,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 50
  },
  lowerBody: {
    flex: 7,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor:'white'
  },
  lowerFooter: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  toDetail: {
    fontSize: 17,
    backgroundColor: 'transparent',
    color: 'white'
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
    marginBottom: 5
  }
});