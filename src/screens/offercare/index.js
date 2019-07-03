import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MapView from 'react-native-maps'


import {
  commonActions,
  userActions
} from '../../actions'


import styles from './style'


const mapDispatchToProps = (dispatch) => {
	return ({
    userActions: bindActionCreators(userActions, dispatch),
    commonActions: bindActionCreators(commonActions, dispatch)
	})
}

const mapStateToProps = (state) => {
	return ({
    loading: state.common.loading,
    label: state.common.label
	})
}


class OfferCare extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.contentSection}>
            <Image
              style={styles.avatarImage}
              source={require('../../assets/avatars/avatar9.jpg')}
            />
            <View style={styles.contentFormSection}>
              <View style={styles.titleSection}>
                <Text style={styles.nameAddress}>Marci T., TX</Text>
                <Text style={styles.timeText}>5 hrs. ago</Text>
              </View>
              <View style={styles.contentMainSection}>
                <Text style={styles.content}>
                  I have a doctor's appointment tomorrow at 11am and aide cancelled on us last minute. Looking to see if anyone in the area is available to sit with my L.O. for 2 hours? Thanks in advance.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.middleButtonSection}>
            <TouchableOpacity>
              <View style={styles.tagButton}>
                <Text style={styles.tagButtonTitle}>REQUEST CARE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.tagButton}>
                <Text style={styles.tagButtonTitle}>OFFER CARE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.mapHeaderTextSection}>
            <Text style={styles.mapHeaderText}>CAREGIVERS NEAR YOU</Text>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapContent}
            initialRegion={{
              latitude: 40.716712,
              longitude: -74.272830,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          </MapView>
        </View>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OfferCare)