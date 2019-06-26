
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
  overviewSection: {
  },
  coverImage: {
    width: width,
    height: height / 4,
    borderRadius: normalize(5)
  },
  maskView: {
    width: width,
    height: height / 4,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  coverImageAddBtn: {
    width: normalize(50),
    height: normalize(50),
    margin: normalize(5)
  },
  shadowBottom: {
    width: width,
    top: 0 - normalize(3),
    borderWidth: normalize(1),
    borderColor: 'rgba(0,0,0, 0)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  profileSection: {
    alignItems: 'center',
  },
  avatarSection: {
    position: 'relative',
  },
  absoluteAvatar: {
    position: 'absolute',
    left: 0 - normalize(60),
    top: 0 - normalize(60)
  },
  avatarImage: {
    width: normalize(120),
    height: normalize(120),
    borderRadius: normalize(60),
    borderColor: 'rgba(112,112,112, 0.5)',
    borderWidth: normalize(2)
  },
  absoluteAdd: {
    position: 'absolute',
    left: normalize(20),
    top: normalize(15)
  },
  avatarAddImage: {
    width: normalize(50),
    height: normalize(50),
  },
  infoSection: {
    marginTop: normalize(70),
    borderBottomWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  nameAddress: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  },
  description: {
    marginLeft: normalize(30),
    marginRight: normalize(30),
    fontSize: normalize(16),
    textAlign: 'center'
  },
  buttonSection: {
    width: width,
    padding: normalize(10),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomWidth: normalize(5),
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  buttonItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonCircle: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    borderWidth: normalize(3),
    borderColor: 'rgba(112,112,112, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(5)
  },
  buttonImage: {
    width: normalize(30),
    height: normalize(30)
  },
  buttonTitle: {
    fontSize: normalize(12),
    textAlign: 'center',
  },
  latestPostSecion: {
    width: width
  },
  latestPostTitleSection: {
    padding: normalize(5),
  },
  latestPostTitle: {
    fontSize: normalize(18),
    color: '#000000',
    textAlign: 'left'
  },
  postItems: {
    padding: normalize(5)
  }
})


export default styles