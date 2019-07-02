
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

  },
  navigateSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: normalize(15)
  },
  avatarSection: {
    flex: 1,
    padding: normalize(5)
  },
  avatarImage: {
    width: normalize(60),
    height: normalize(60),
    marginRight: normalize(5),
    borderRadius: normalize(30)
  },
  navDropSection: {
    flex: 1,
    padding: normalize(5)
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navImage: {
    width: normalize(30),
    height: normalize(30),
    marginRight: normalize(10)
  },
  navTitle: {
    flex: 1,
    fontSize: normalize(16),
    color: '#000000',
    textAlign: 'left'
  },
  middleButtonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(5),
    paddingBottom: normalize(15)
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
  mapHeaderTextSection: {
    borderColor: 'rgba(112,112,112, 0.5)',
    borderTopWidth: normalize(2),
    borderBottomWidth: normalize(2),
    padding: normalize(10),
    backgroundColor: '#540C69',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapHeaderText: {
    fontSize: normalize(16),
    color: '#707070',
    textAlign: 'center'
  },
  mapContainer: {
    
  }
})


export default styles