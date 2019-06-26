
import {
  StyleSheet,
  Dimensions
} from 'react-native'

import {
  normalize
} from '../../helpers'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  postItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  postItemAvatar: {
    width: normalize(60),
    height: normalize(60),
    marginRight: normalize(5),
    borderRadius: normalize(30),
    borderWidth: normalize(2),
    borderColor: 'rgba(112,112,112, 0.5)'
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  postInfoSection: {
  },
  postUserName: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left'
  },
  messageSection: {
    borderWidth: normalize(2),
    borderRadius: normalize(5),
    borderColor: 'rgba(112,112,112, 0.5)',
    padding: normalize(5)
  },
  attachmentSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  attachImage: {
    margin: normalize(5),
    width: width / 2,
    height: width / (2 * 1.6),
    borderRadius: normalize(5)
  },
  tagSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagImage: {
    width: normalize(20),
    height: normalize(20),
    marginRight: normalize(5)
  },
  tagText: {
    fontSize: normalize(12)
  },
  commentsSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})


export default styles