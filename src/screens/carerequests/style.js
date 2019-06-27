
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: width
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: normalize(5)
  },
  avatarImage: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(35),
  },
  iconImage: {
    width: normalize(20),
    height: normalize(20),
    marginLeft: normalize(5)
  },
  textSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  boldText: {
    fontSize: normalize(18),
    color: '#000000',
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: normalize(5)
  },
  normalText: {
    fontSize: normalize(14),
    color: '#000000',
    textAlign: 'left',
    marginLeft: normalize(5)
  },
})


export default styles