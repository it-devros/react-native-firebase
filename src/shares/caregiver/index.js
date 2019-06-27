import React from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'


import styles from './style'


class CareGiver extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      source,
      tag
    } = this.props

    return(
      <View style={styles.contactItem}>
        <View style={styles.avatarSection}>
          <Image
            style={styles.avatarImage}
            source={source}
          />
          {
            tag != null ?
              <View style={styles.tagButton}>
                <Text style={styles.tagButtonTitle}>{ tag }</Text>
              </View>
            :
              null
          }
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.nameAddress}>Gail S., f, 61</Text>
          <Text style={styles.nameAddress}>Knightdale, NC</Text>
          <Text style={styles.distance}>5.5miles away</Text>
        </View>
        <View style={styles.iconSection}>
          <TouchableOpacity>
            <Image
              style={styles.contactIcon}
              source={require('../../assets/icons/wave-hand.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.contactIcon}
              source={require('../../assets/icons/user-add.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    )

  }

}

export default CareGiver