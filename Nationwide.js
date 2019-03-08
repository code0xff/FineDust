import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import dustCondition from './dustCondition.json';
import { LinearGradient } from 'expo';

function Nationwide ({ 
  condition,
  nationwideTimeStamp,
  seoulPM10Value,
  busanPM10Value,
  daeguPM10Value,
  incheonPM10Value,
  gwangjuPM10Value,
  daejeonPM10Value,
  ulsanPM10Value,
  gyeonggiPM10Value,
  gangwonPM10Value,
  chungbukPM10Value,
  chungnamPM10Value,
  jeonbukPM10Value,
  jeonnamPM10Value,
  gyeongbukPM10Value,
  gyeongnamPM10Value,
  jejuPM10Value,
  sejongPM10Value,
  seoulPM25Value,
  busanPM25Value,
  daeguPM25Value,
  incheonPM25Value,
  gwangjuPM25Value,
  daejeonPM25Value,
  ulsanPM25Value,
  gyeonggiPM25Value,
  gangwonPM25Value,
  chungbukPM25Value,
  chungnamPM25Value,
  jeonbukPM25Value,
  jeonnamPM25Value,
  gyeongbukPM25Value,
  gyeongnamPM25Value,
  jejuPM25Value,
  sejongPM25Value,
  getPM10Condition,
  getPM25Condition,
}) {
  return (
    <LinearGradient colors={dustCondition[condition]['colors']} style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.menuText}>전국 미세먼지 정보</Text>
        <Text style={styles.menuData}>{nationwideTimeStamp} 기준</Text>
      </View>
      <View style={styles.nationwide}>
        <View style={styles.title}>
          <View style={styles.titleView}><Text style={styles.titleText}>지역</Text></View>
          <View style={styles.titleView}><Text style={styles.titleText}>미세먼지</Text></View>
          <View style={styles.titleView}><Text style={styles.titleText}>초미세먼지</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>서울</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{seoulPM10Value}/{getPM10Condition(seoulPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{seoulPM25Value}/{getPM25Condition(seoulPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>부산</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{busanPM10Value}/{getPM10Condition(busanPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{busanPM25Value}/{getPM25Condition(busanPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>대구</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{daeguPM10Value}/{getPM10Condition(daeguPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{daeguPM25Value}/{getPM25Condition(daeguPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>인천</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{incheonPM10Value}/{getPM10Condition(incheonPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{incheonPM25Value}/{getPM25Condition(incheonPM25Value)}</Text></View>
        </View>        
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>광주</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gwangjuPM10Value}/{getPM10Condition(gwangjuPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gwangjuPM25Value}/{getPM25Condition(gwangjuPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>대전</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{daejeonPM10Value}/{getPM10Condition(daejeonPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{daejeonPM25Value}/{getPM25Condition(daejeonPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>울산</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{ulsanPM10Value}/{getPM10Condition(ulsanPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{ulsanPM25Value}/{getPM25Condition(ulsanPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>경기</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gyeonggiPM10Value}/{getPM10Condition(gyeonggiPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gyeonggiPM25Value}/{getPM25Condition(gyeonggiPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>강원</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gangwonPM10Value}/{getPM10Condition(gangwonPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gangwonPM25Value}/{getPM25Condition(gangwonPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>충북</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{chungbukPM10Value}/{getPM10Condition(chungbukPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{chungbukPM25Value}/{getPM25Condition(chungbukPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>충남</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{chungnamPM10Value}/{getPM10Condition(chungnamPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{chungnamPM25Value}/{getPM25Condition(chungnamPM10Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>전북</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{jeonbukPM10Value}/{getPM10Condition(jeonbukPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{jeonbukPM25Value}/{getPM25Condition(jeonbukPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>전남</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{jeonnamPM10Value}/{getPM10Condition(jeonnamPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{jeonnamPM25Value}/{getPM25Condition(jeonnamPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>경북</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gyeongbukPM10Value}/{getPM10Condition(gyeongbukPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gyeongbukPM25Value}/{getPM25Condition(gyeongbukPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>경남</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gyeongnamPM10Value}/{getPM10Condition(gyeongnamPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{gyeongnamPM25Value}/{getPM25Condition(gyeongnamPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>제주</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{jejuPM10Value}/{getPM10Condition(jejuPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{jejuPM25Value}/{getPM25Condition(jejuPM25Value)}</Text></View>
        </View>
        <View style={styles.data}>
          <View style={styles.dataView}><Text style={styles.dataText}>세종</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{sejongPM10Value}/{getPM10Condition(sejongPM10Value)}</Text></View>
          <View style={styles.dataView}><Text style={styles.dataText}>{sejongPM25Value}/{getPM25Condition(sejongPM25Value)}</Text></View>
        </View>
      </View>
    </LinearGradient>
  )
}

Nationwide.propTypes = {
  condition: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  menuText: {
    fontSize: 30,
    backgroundColor: 'transparent',
    color: 'white',
  },
  menuData: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: 'white',
  },
  nationwide: {
    flex: 9,
    paddingLeft: 25,
    paddingRight: 25
  },
  title: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor:'white'
  },
  titleView: {
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 5
  },
  data: {
    flexDirection: 'row',
  },
  dataView: {
    flex: 1,
    alignItems: 'center'
  },
  dataText: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 5
  }
});

export default Nationwide;