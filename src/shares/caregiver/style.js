
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  contactItem: {
    padding: normalize(5),
    paddingTop: normalize(10),
    paddingBottom: normalize(10),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: 'rgba(112,112,112, 0.5)',
    borderBottomWidth: normalize(2),
  },
  avatarSection: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagButton: {
    borderColor: 'rgba(112,112,112, 0.5)',
    borderWidth: normalize(2),
    borderRadius: normalize(7),
    padding: normalize(5),
    marginTop: normalize(5),
    backgroundColor: '#af6d3a',
    
  },
  tagButtonTitle: {
    color: '#ffffff',
    fontSize: normalize(16),
    textAlign: 'center'
  },
  avatarImage: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(35),
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  contactIcon: {
    width: normalize(40),
    height: normalize(40),
    marginLeft: normalize(5)
  },
  infoSection: {
    flex: 1,
    marginLeft: normalize(5)
  },
  nameAddress: {
    fontSize: normalize(18),
    textAlign: 'left',
    color: '#000000'
  },
  distance: {
    marginTop: normalize(10),
    fontSize: normalize(16),
    fontWeight: 'bold',
    textAlign: 'left'
  },
})


export default styles