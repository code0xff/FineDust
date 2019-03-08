import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Share } from 'react-native';
import Dust from './Dust';
import Setting from './Setting';
import Loading from './Loading';
import API_KEY from './keys.json';
import dustCondition from './dustCondition.json';

import Swiper from 'react-native-swiper';
import Nationwide from './Nationwide';

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
    nationwideTimeStamp: null,
    seoulPM10Value: null,
    busanPM10Value: null,
    daeguPM10Value: null,
    incheonPM10Value: null,
    gwangjuPM10Value: null,
    daejeonPM10Value: null,
    ulsanPM10Value: null,
    gyeonggiPM10Value: null,
    gangwonPM10Value: null,
    chungbukPM10Value: null,
    chungnamPM10Value: null,
    jeonbukPM10Value: null,
    jeonnamPM10Value: null,
    gyeongbukPM10Value: null,
    gyeongnamPM10Value: null,
    jejuPM10Value: null,
    sejongPM10Value: null,
    seoulPM25Value: null,
    busanPM25Value: null,
    daeguPM25Value: null,
    incheonPM25Value: null,
    gwangjuPM25Value: null,
    daejeonPM25Value: null,
    ulsanPM25Value: null,
    gyeonggiPM25Value: null,
    gangwonPM25Value: null,
    chungbukPM25Value: null,
    chungnamPM25Value: null,
    jeonbukPM25Value: null,
    jeonnamPM25Value: null,
    gyeongbukPM25Value: null,
    gyeongnamPM25Value: null,
    jejuPM25Value: null,
    sejongPM25Value: null,
  };

  componentDidMount () {
    this._reload();
  }

  _shareInfomation = () => {
    Share.share({
      message: `대기상태: ${dustCondition[this.state.condition].state}!\n미세먼지 농도는 ${this.state.pm10Value}!\n초미세먼지 농도는 ${this.state.pm25Value}!\n${dustCondition[this.state.condition].subtitle}`,
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

  _getNationwidePM10Data = () => {
    fetch(`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?itemCode=PM10&dataGubun=HOUR&searchCondition=WEEK&pageNo=1&numOfRows=1&ServiceKey=${airkoreaAPIKey}&_returnType=json`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        seoulPM10Value: json.list[0].seoul,
        busanPM10Value: json.list[0].busan,
        daeguPM10Value: json.list[0].daegu,
        incheonPM10Value: json.list[0].incheon,
        gwangjuPM10Value: json.list[0].gwangju,
        daejeonPM10Value: json.list[0].daejeon,
        ulsanPM10Value: json.list[0].ulsan,
        gyeonggiPM10Value: json.list[0].gyeonggi,
        gangwonPM10Value: json.list[0].gangwon,
        chungbukPM10Value: json.list[0].chungbuk,
        chungnamPM10Value: json.list[0].chungnam,
        jeonbukPM10Value: json.list[0].jeonbuk,
        jeonnamPM10Value: json.list[0].jeonnam,
        gyeongbukPM10Value: json.list[0].gyeongbuk,
        gyeongnamPM10Value: json.list[0].gyeongnam,
        jejuPM10Value: json.list[0].jeju,
        sejongPM10Value: json.list[0].sejong,
      });
    })
  }

  _getNationwidePM25Data = () => {
    fetch(`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureLIst?itemCode=PM25&dataGubun=HOUR&searchCondition=WEEK&pageNo=1&numOfRows=1&ServiceKey=${airkoreaAPIKey}&_returnType=json`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        seoulPM25Value: json.list[0].seoul,
        busanPM25Value: json.list[0].busan,
        daeguPM25Value: json.list[0].daegu,
        incheonPM25Value: json.list[0].incheon,
        gwangjuPM25Value: json.list[0].gwangju,
        daejeonPM25Value: json.list[0].daejeon,
        ulsanPM25Value: json.list[0].ulsan,
        gyeonggiPM25Value: json.list[0].gyeonggi,
        gangwonPM25Value: json.list[0].gangwon,
        chungbukPM25Value: json.list[0].chungbuk,
        chungnamPM25Value: json.list[0].chungnam,
        jeonbukPM25Value: json.list[0].jeonbuk,
        jeonnamPM25Value: json.list[0].jeonnam,
        gyeongbukPM25Value: json.list[0].gyeongbuk,
        gyeongnamPM25Value: json.list[0].gyeongnam,
        jejuPM25Value: json.list[0].jeju,
        sejongPM25Value: json.list[0].sejong,
        nationwideTimeStamp: json.list[0].dataTime
      });
    });
  }

  _getStationName = (tmX, tmY) => {
    return fetch(`http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList?tmX=${tmX}&tmY=${tmY}&pageNo=1&numOfRows=1&ServiceKey=${airkoreaAPIKey}&_returnType=json`);
  }

  _getFineDustData = (stationName) => {
    return fetch(`http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${stationName}&dataTerm=daily&pageNo=1&numOfRows=1&ServiceKey=${airkoreaAPIKey}&ver=1.3&_returnType=json`);
  }

  _getPM10Condition = (pm10Value) => {
    let condition = null;
    if (pm10Value >= 151) {
      condition = 'superBad';
    } else if (pm10Value >= 81) {
      condition = 'bad';
    } else if (pm10Value >= 31) {
      condition = 'normal';
    } else {
      condition = 'good';
    }
    return dustCondition[condition].state;
  }

  _getPM25Condition = (pm25Value) => {
    let condition = null;
    if (pm25Value >= 76) {
      condition = 'superBad';
    } else if (pm25Value >= 36) {
      condition = 'bad';
    } else if (pm25Value >= 16) {
      condition = 'normal';
    } else {
      condition = 'good';
    }
    return dustCondition[condition].state;
  }

  _getTotalCondition = (pm10Value, pm25Value) => {
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
    return condition;
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

          this.setState({
            pm10Value: pm10Value,
            pm25Value: pm25Value,
            so2Value: json.list[0].so2Value,
            coValue: json.list[0].coValue,
            o3Value: json.list[0].o3Value,
            no2Value: json.list[0].no2Value,
            timeStamp: json.list[0].dataTime,
            condition: this._getTotalCondition(pm10Value, pm25Value),
            isLoaded: true
          })

          this._getNationwideData();
        })
      });
    });
  }

  _getNationwideData = () => {
    this._getNationwidePM10Data();
    this._getNationwidePM25Data();
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
      timeStamp,
      nationwideTimeStamp,
      error,
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
      sejongPM25Value
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? 
          (<Swiper 
            style={styles.wrapper} 
            showsButtons={true} 
            loop={false} 
            index={1}
            dotColor='white'
            activeDotColor='#848484' 
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            nextButton={<Text style={styles.buttonText}>›</Text>}
          >
            <Nationwide
              condition={condition}
              seoulPM10Value={seoulPM10Value}
              busanPM10Value={busanPM10Value}
              daeguPM10Value={daeguPM10Value}
              incheonPM10Value={incheonPM10Value}
              gwangjuPM10Value={gwangjuPM10Value}
              daejeonPM10Value={daejeonPM10Value}
              ulsanPM10Value={ulsanPM10Value}
              gyeonggiPM10Value={gyeonggiPM10Value}
              gangwonPM10Value={gangwonPM10Value}
              chungbukPM10Value={chungbukPM10Value}
              chungnamPM10Value={chungnamPM10Value}
              jeonbukPM10Value={jeonbukPM10Value}
              jeonnamPM10Value={jeonnamPM10Value}
              gyeongbukPM10Value={gyeongbukPM10Value}
              gyeongnamPM10Value={gyeongnamPM10Value}
              jejuPM10Value={jejuPM10Value}
              sejongPM10Value={sejongPM10Value}
              seoulPM25Value={seoulPM25Value}
              busanPM25Value={busanPM25Value}
              daeguPM25Value={daeguPM25Value}
              incheonPM25Value={incheonPM25Value}
              gwangjuPM25Value={gwangjuPM25Value}
              daejeonPM25Value={daejeonPM25Value}
              ulsanPM25Value={ulsanPM25Value}
              gyeonggiPM25Value={gyeonggiPM25Value}
              gangwonPM25Value={gangwonPM25Value}
              chungbukPM25Value={chungbukPM25Value}
              chungnamPM25Value={chungnamPM25Value}
              jeonbukPM25Value={jeonbukPM25Value}
              jeonnamPM25Value={jeonnamPM25Value}
              gyeongbukPM25Value={gyeongbukPM25Value}
              gyeongnamPM25Value={gyeongnamPM25Value}
              jejuPM25Value={jejuPM25Value}
              sejongPM25Value={sejongPM25Value}
              nationwideTimeStamp={nationwideTimeStamp}
              reload={this._reload}
              getPM10Condition={this._getPM10Condition}
              getPM25Condition={this._getPM25Condition}
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
          </Swiper>)
          : <Loading error={error}/>}
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
  buttonText: {
    fontSize: 50,
    color: 'white'
  }
});
