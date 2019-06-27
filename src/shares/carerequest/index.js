import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'


import styles from './style'


class CareRequest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    const {
      source,
      onPressOffer,
      onPressMore
    } = this.props

    return(
      <View style={styles.careRequestItem}>
        <Image
          style={styles.itemImage}
          source={source}
        />
        <View style={styles.itemContentSection}>
          <Text style={styles.itemContent}>
            Caregiver for 75 YO grandmother. Need 2 hours respite for a doctor's appointment.
          </Text>
          <View style={styles.timeDateSection}>
            <Text style={styles.timeDate}>Friday, June 14 2019, 2pm-4pm </Text>
            <TouchableOpacity style={styles.moreLink} onPress={() => onPressMore()}>
              <Text style={styles.timeDate}>More...</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSection}>
            <TouchableOpacity onPress={() => onPressOffer()}>
              <View style={styles.tagButton}>
                <Text style={styles.tagButtonTitle}>OFFER CARE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )

  }

}

export default CareRequest