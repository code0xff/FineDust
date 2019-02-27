import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
import dustCondition from './dustCondition.json';

function Alarm ({ condition }) {
  return (
    <LinearGradient colors={dustCondition[condition]['colors']} style={styles.container}>
      <Text>
        {dustCondition[condition]['colors']}
      </Text>
    </LinearGradient>
  )
}

Alarm.propTypes = {
  condition: PropTypes.string.isRequired,
}

export default Alarm;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});