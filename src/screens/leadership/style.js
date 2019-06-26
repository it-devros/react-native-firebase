
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
    borderBottomWidth: 2,
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  topTitle: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
  },
  yourGroupSection: {
    padding: normalize(10),
    borderBottomWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  yourGroupTitle: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left'
  },
  cardsSection: {
    padding: normalize(10)
  },
  card: {
    position: 'relative',
    width: '100%',
    borderColor: 'rgba(112,112,112, 0.5)',
    borderWidth: normalize(2),
    borderRadius: normalize(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    marginTop: normalize(5),
    marginBottom: normalize(5)
  },
  coverImage: {
    width: '100%',
    height: (width - normalize(40)) / 1.6,
    borderRadius: normalize(3),
  },
  cardContent: {
    position: 'absolute',
    width: '100%',
    height: (width - normalize(40)) / 1.6,
    borderRadius: normalize(3),
    backgroundColor: 'rgba(0,0,0, 0.2)',
    left: 0,
    top: 0,
    padding: normalize(10),
    justifyContent: 'space-between'
  },
  contentText: {
    color: '#ffffff'
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  postButton: {
    borderColor: 'rgba(112,112,112, 0.5)',
    borderWidth: normalize(2),
    borderRadius: normalize(7),
    padding: normalize(5),
    backgroundColor: 'rgba(84,12,105, 0.5)'
  },
  postBtnTitle: {
    color: '#ffffff',
    fontSize: normalize(16)
  },
  otherGroupSection: {
    padding: normalize(20),
    paddingBottom: normalize(100)
  },
  otherGroupTitle: {
    fontSize: normalize(16),
    color: '#000000',
    textAlign: 'left',
    marginBottom: normalize(10)
  },
  addGroupButtonSection: {
    paddingTop: normalize(30),
    alignItems: 'center'
  },
  buttonItem: {
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
})


export default styles