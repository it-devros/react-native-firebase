
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


  headerSection: {
    backgroundColor: '#ffffff',
    width: width,
    padding: normalize(15)
  },
  titleText: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left'
  },
  inputSection: {
    margin: normalize(30),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  formSection: {
    marginBottom: normalize(15)
  },
  nextBtnSection: {
    width: width,
    alignItems: 'flex-end'
  },
  rightFloat: {
    marginRight: normalize(30)
  },

  descSection: {
    marginLeft: normalize(30),
    marginRight: normalize(30)
  },
  descText: {
    fontSize: normalize(16),
    color: '#000000',
    textAlign: 'left'
  },
  inputContainer: {
    marginLeft: normalize(30),
    marginRight: normalize(30)
  }
})


export default styles