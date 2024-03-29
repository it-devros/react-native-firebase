import React from 'react'
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  logoSection: {
    margin: normalize(30),
    marginTop: normalize(60),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSection: {
    margin: normalize(30),
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  logoImg: {
    width: width * 1.246 / 5,
    height: width / 5
  },
  logoText: {
    fontSize: normalize(40),
    color: '#540C69',
    textAlign: 'center'
  },
  startSection: {
    marginBottom: normalize(30)
  },
  startTitle: {
    marginBottom: normalize(10),
    fontSize: normalize(30),
    color: '#ffffff',
    textAlign: 'left'
  },
  newUserLabel: {
    color: '#ffffff',
    textAlign: 'left'
  },
  buttonIcon: {
    width: normalize(30),
    height: normalize(30)
  }
})


export default styles