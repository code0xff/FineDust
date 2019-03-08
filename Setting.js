import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
import dustCondition from './dustCondition.json';

function Setting ({ condition }) {
  return (
    <LinearGradient colors={dustCondition[condition]['colors']} style={styles.container}>
      <Text>
        setting area!
      </Text>
    </LinearGradient>
  )
}

Setting.propTypes = {
  condition: PropTypes.string.isRequired,
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});