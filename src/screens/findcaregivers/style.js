
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
    width: '100%',
    padding: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topImage: {
    width: normalize(40),
    height: normalize(40),
    marginLeft: normalize(5)
  },
  topText: {
    flex: 1,
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left'
  },
  addCareGiverSection: {
    borderColor: 'rgba(112,112,112, 0.5)',
    borderTopWidth: normalize(2),
    borderBottomWidth: normalize(2),
    padding: normalize(5),
    backgroundColor: 'rgba(84,12,105, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCircle: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
    borderWidth: normalize(1),
    borderColor: 'rgba(112,112,112, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(5)
  },
  buttonImage: {
    width: normalize(20),
    height: normalize(20)
  },
  addCareGiverTitle: {
    flex: 1,
    color: '#000000',
    textAlign: 'left'
  },
  contactItems: {
    paddingBottom: normalize(200)
  },
  
})


export default styles