
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  careRequestItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: normalize(5),
    borderBottomWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)',
  },
  itemImage: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(35),
    marginRight: normalize(10),
    borderWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  itemContentSection: {
    flex: 1,
  },
  itemContent: {
    textAlign: 'left',
    color: '#000000',
  },
  timeDateSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  timeDate: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#540C69',
  },
  moreLink: {
    borderBottomWidth: normalize(1),
    borderColor: '#540C69'
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
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
    textAlign: 'center'
  },
})


export default styles