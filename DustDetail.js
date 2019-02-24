import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

function DustDetail ({ pm10Value, 
  pm25Value,  
  so2Value, 
  coValue,
  o3Value,
  no2Value,
  changeView }) {
  return (        
    <View style={styles.lower}>
      <View style={styles.lowerHeader}>
        <MaterialIcons 
          color='white' 
          size={50} 
          name='expand-less' 
          onPress={changeView}
        />
      </View>
      <View style={styles.lowerBody}>
        <View style={styles.detail}>
          <View style={styles.detailTitle}>
            <Text style={styles.detailText}>미세먼지 농도</Text>
          </View>
          <View style={styles.detailData}>
            <Text style={styles.detailText}>{pm10Value} ㎍/㎥</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailTitle}>
            <Text style={styles.detailText}>초미세먼지 농도</Text>
          </View>
          <View style={styles.detailData}>
            <Text style={styles.detailText}>{pm25Value} ㎍/㎥</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailTitle}>
            <Text style={styles.detailText}>아황산가스 농도</Text>
          </View>
          <View style={styles.detailData}>
            <Text style={styles.detailText}>{so2Value} ppm</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailTitle}>
            <Text style={styles.detailText}>일산화탄소 농도</Text>
          </View>
          <View style={styles.detailData}>
            <Text style={styles.detailText}>{coValue} ppm</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailTitle}>
            <Text style={styles.detailText}>오존 농도</Text>
          </View>
          <View style={styles.detailData}>
            <Text style={styles.detailText}>{o3Value} ppm</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.detailTitle}>
            <Text style={styles.detailText}>이산화질소 농도</Text>
          </View>
          <View style={styles.detailData}>
            <Text style={styles.detailText}>{no2Value} ppm</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

DustDetail.propTypes = {
  pm10Value: PropTypes.string.isRequired,
  pm25Value: PropTypes.string.isRequired,
  so2Value: PropTypes.string.isRequired,
  coValue: PropTypes.string.isRequired,
  o3Value: PropTypes.string.isRequired,
  no2Value: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired
}

export default DustDetail;

const styles = StyleSheet.create({
  lower: {
    flex: 4,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'flex-end',
    marginBottom: 50
  },
  lowerHeader:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  lowerBody: {
    flex: 2,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor:'white',
    paddingTop: 5
  },
  detail: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  detailTitle: {
    flex: 1,
    alignItems: 'flex-start'
  },
  detailData: {
    flex: 1,
    alignItems: 'flex-end'
  },
  detailText: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white',
  }
});