import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Share } from 'react-native';
import Dust from './Dust';
import Alarm from './Alarm';
import Setting from './Setting';
import { MaterialIcons } from '@expo/vector-icons';
import API_KEY from './keys.json';

import Swiper from 'react-native-swiper';

const kakaoAPIKey = API_KEY.KAKAO_API_KEY;
const airkoreaAPIKey = API_KEY.AIRKOREA_API_KEY;

export default class App extends Component {
  state = {
    isLoaded: false,
    toggle: false,
    error: null,
    pm10Value: null,
    pm25Value: null,
    so2Value: null,
    coValue: null,
    o3Value: null,
    no2Value: null,
    condition: null,
    district: null,
    timeStamp: null,
  };

  componentDidMount () {
    this._reload();
  }

  _shareInfomation = () => {
    Share.share({
      message: `미세먼지 농도는 ${this.state.pm10Value}!\n초미세먼지 농도는 ${this.state.pm25Value}!`,
      title: '미세먼지 공유하기'
    },  {
      dialogTitle: '미세먼지 공유하기'
    });
  }

  _changeView = () => {
    this.setState({toggle: !this.state.toggle});
  }
  _reload = () => {
    this.setState({isLoaded: false});

    navigator.geolocation.getCurrentPosition(
      position => {
        this._setFineDust(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _transformPostion = (latitude, longitude) => {
    return fetch(`https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${longitude}&y=${latitude}&input_coord=WGS84&output_coord=TM`, {
      method: 'GET',
      headers: new Headers({
        'Authorization' : `KakaoAK ${kakaoAPIKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }

  _getDistrictName = (latitude, longitude) => {
    return fetch(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`, {
      method: 'GET',
      headers: new Headers({
        'Authorization' : `KakaoAK ${kakaoAPIKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  }

  _getStationName = (tmX, tmY) => {
    return fetch(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmX}&tmY=${tmY}&pageNo=1&numOfRows=1&ServiceKey=${airkoreaAPIKey}&_returnType=json`);
  }

  _getFineDustData = (stationName) => {
    return fetch(`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${stationName}&dataTerm=daily&pageNo=1&numOfRows=1&ServiceKey=${airkoreaAPIKey}&ver=1.3&_returnType=json`);
  }

  _setFineDust = (latitude, longitude) => {
    this._transformPostion(latitude, longitude)
    .then(response => response.json())
    .then(json => {
      this._getDistrictName(latitude, longitude)
      .then(response => response.json())
      .then(json => {
        this.setState({district: json.documents[0].address_name})
      });

      this._getStationName(json.documents[0].x, json.documents[0].y)
      .then(response => response.json())
      .then(json => {
        this._getFineDustData(json.list[0].stationName)
        .then(response => response.json())
        .then(json => {
          const pm10Value = json.list[0].pm10Value;
          const pm25Value = json.list[0].pm25Value;

          let condition = null; 
          if (pm10Value >= 151 || pm25Value >= 76) {
            condition = 'superBad';
          } else if (pm10Value >= 81 || pm25Value >= 36) {
            condition = 'bad';
          } else if (pm10Value >= 31 || pm25Value >= 16) {
            condition = 'normal';
          } else {
            condition = 'good';
          }

          this.setState({
            pm10Value: pm10Value,
            pm25Value: pm25Value,
            so2Value: json.list[0].so2Value,
            coValue: json.list[0].coValue,
            o3Value: json.list[0].o3Value,
            no2Value: json.list[0].no2Value,
            timeStamp: json.list[0].dataTime,
            condition: condition,
            isLoaded: true
          })
        })
      });
    });
  }

  render() {
    const { isLoaded, 
      pm10Value, 
      pm25Value, 
      so2Value, 
      coValue,
      o3Value,
      no2Value,
      condition,
      toggle,
      district,
      timeStamp } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? 
        <Swiper 
          style={styles.wrapper} 
          showsButtons={true} 
          loop={false} 
          index={1}
          dotColor='white'
          activeDotColor='#848484' 
          prevButton={<Text style={styles.buttonText}>‹</Text>}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          >
          <Alarm 
            condition={condition} 
            />
          <Dust 
            pm10Value={pm10Value} 
            pm25Value={pm25Value} 
            so2Value={so2Value}
            coValue={coValue}
            o3Value={o3Value}
            no2Value={no2Value}
            condition={condition}
            district={district} 
            timeStamp={timeStamp} 
            toggle={toggle}
            reload={this._reload}
            changeView={this._changeView}
            shareInfomation={this._shareInfomation}
            />
          <Setting 
            condition={condition}
            />
          </Swiper>
        : (
          <View style={styles.loading}>
            <MaterialIcons color='white' size={144} name='sentiment-very-satisfied' />
            <Text style={styles.loadingText}>미세먼지 정보를 불러오고 있습니다.</Text>
            {this.state.error ? <Text style={styles.errorText}>{this.state.error}</Text> : null}
          </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
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
  buttonText: {
    fontSize: 50,
    color: 'white'
  }
});
