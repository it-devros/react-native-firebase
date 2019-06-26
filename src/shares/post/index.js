import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'


import styles from './style'


class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.postItem}>
        <Image
          style={styles.postItemAvatar}
          source={require('../../assets/avatars/avatar.jpg')}
        />
        <View style={styles.content}>
          <View style={styles.postInfoSection}>
            <Text style={styles.postUserName}>Susan C., Raleigh, NC.</Text>
            <Text>Sun. at 3.09 PM</Text>
          </View>
          <View style={styles.messageSection}>
            <Text>Some angel came and sat with mom for 4 hours so hubby and I went dancing last night. It's been ages! Thanks to all those Super Carers!</Text>
          </View>
          <View style={styles.attachmentSection}>
            <View style={styles.tagSection}>
              <Image
                style={styles.tagImage}
                source={require('../../assets/icons/heart.png')}
              />
              <Text style={styles.tagText}>85</Text>
            </View>
            <Image
              style={styles.attachImage}
              source={require('../../assets/images/cover.jpg')}
            />
            <View style={styles.tagSection}>
              <Image
                style={styles.tagImage}
                source={require('../../assets/icons/comment.png')}
              />
              <Text style={styles.tagText}>55</Text>
            </View>
          </View>
          <View style={styles.commentsSection}>
            <View style={styles.tagSection}>
              <Image
                style={styles.tagImage}
                source={require('../../assets/icons/like.png')}
              />
              <Text style={styles.tagText}>Like</Text>
            </View>
            <Text>{' '}</Text>
            <View style={styles.tagSection}>
              <Image
                style={styles.tagImage}
                source={require('../../assets/icons/comment.png')}
              />
              <Text style={styles.tagText}>Comment</Text>
            </View>
          </View>
        </View>
      </View>
    )

  }

}

export default Post