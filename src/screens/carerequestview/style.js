
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
    padding: normalize(5)
  },
  avatarImage: {
    width: normalize(90),
    height: normalize(90),
    marginRight: normalize(5),
    borderRadius: normalize(45)
  },
  statusSection: {
    flex: 1,
  },
  statusHeaderSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: normalize(10)
  },
  superIconImage: {
    width: normalize(30),
    height: normalize(30),
    marginRight: normalize(5)
  },
  statusText: {
    fontSize: normalize(18),
    textAlign: 'left',
    color: '#540C69'
  },
  detailSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  detailItem: {
    flex: 1
  },
  detailItemSection1: {
    borderColor: 'rgba(112,112,112, 0.5)',
    borderWidth: normalize(1),
    marginRight: normalize(5),
  },
  detailItemSection2: {
    borderColor: 'rgba(112,112,112, 0.5)',
    borderWidth: normalize(1),
    marginLeft: normalize(5),
  },
  detailTitle: {
    fontSize: normalize(16),
    textAlign: 'center',
    color: '#540C69'
  },
  detailBold: {
    fontSize: normalize(16),
    textAlign: 'center',
    color: '#540C69',
    fontWeight: 'bold'
  },
  descriptionSection: {
    padding: normalize(5)
  },
  descriptionText: {
    textAlign: 'left',
    color: '#540C69',
  },
  middleButtonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: width
  },
  mapContent: {
    width: width,
    height: '100%'
  }
})


export default styles