
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
    width: width,
  },
  inputFormSection: {
    padding: normalize(5),
    paddingTop: normalize(15),
    paddingBottom: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  postItemAvatar: {
    width: normalize(60),
    height: normalize(60),
    marginRight: normalize(5),
    borderRadius: normalize(30),
    borderWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  attachBtnImage: {
    width: normalize(50),
    height: normalize(50),
  },
  inputSector: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  inputSection: {
    flex: 1,
    marginLeft: normalize(5),
    marginRight: normalize(5),
    padding: normalize(5),
    borderWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)',
    borderRadius: normalize(5)
  },
  inputElement: {
    borderWidth: 0,
    height: normalize(70),
    padding: 0,
    textAlignVertical: 'top'
  },
  attachBtnSection: {
  },
  searchFormSection: {
    borderColor: 'rgba(112,112,112, 0.5)',
    borderTopWidth: normalize(2),
    borderBottomWidth: normalize(2),
    padding: normalize(5),
    backgroundColor: 'rgba(84,12,105, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchElement: {
    flex: 1,
    borderWidth: 0,
    padding: 0,
  },
  searchIcon: {
    width: normalize(30),
    height: normalize(30),
    marginLeft: normalize(5)
  },
  postItems: {
    paddingBottom: normalize(150)
  },
  item: {
    padding: normalize(5),
    borderBottomWidth: normalize(5),
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  listView: {
    flex: 1
  }
})


export default styles