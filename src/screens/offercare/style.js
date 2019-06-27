
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
  contentSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: normalize(5),
    paddingBottom: normalize(15)
  },
  avatarImage: {
    width: normalize(60),
    height: normalize(60),
    marginRight: normalize(5),
    borderRadius: normalize(30)
  },
  contentFormSection: {
    flex: 1,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
  nameAddress: {
    fontSize: normalize(16),
    color: '#000000',
    textAlign: 'left',
    marginRight: normalize(10)
  },
  timeText: {
    fontSize: normalize(12),
    color: '#000000',
    textAlign: 'left'
  },
  contentMainSection: {
    padding: normalize(5),
    borderWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)',
    borderRadius: normalize(5)
  },
  content: {
    borderWidth: 0,
    padding: 0,
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
    fontSize: normalize(18),
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
    fontSize: normalize(18),
    color: '#000000',
    textAlign: 'center'
  }
})


export default styles