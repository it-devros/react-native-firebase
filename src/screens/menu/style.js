
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
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(5),
    paddingLeft: normalize(15),
    borderBottomWidth: 2,
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  avatarImage: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(35),
  },
  titleSection: {
    flex: 1,
    marginLeft: normalize(15),
  },
  nameText: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left'
  },
  profileText: {
    fontSize: normalize(18),
    color: '#000000',
    textAlign: 'left'
  },
  navItemSection: {
    paddingBottom: normalize(100)
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: normalize(15)
  },
  itemImage: {
    width: normalize(40),
    height: normalize(40),
  },
  navTitle: {
    flex: 1,
    marginLeft: normalize(15),
  },
  titleText: {
    fontSize: normalize(18),
    color: '#000000',
    textAlign: 'left'
  },
  bottomLinks: {
    padding: normalize(15)
  },
  bottomLink: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    textAlign: 'left'
  }
})


export default styles