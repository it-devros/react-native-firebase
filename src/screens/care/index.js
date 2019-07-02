import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
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


class Care extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo(screen) {
    this.props.navigation.navigate(screen)
  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.navigateSection}>
            <View style={styles.avatarSection}>
              <Image
                style={styles.avatarImage}
                source={require('../../assets/avatars/avatar9.jpg')}
              />
            </View>
            <View style={styles.navDropSection}>
              <TouchableOpacity style={styles.navItem} onPress={() => this.navigateTo('RequestCare')}>
                <Image
                  style={styles.navImage}
                  source={require('../../assets/icons/request_care.png')}
                />
                <Text style={styles.navTitle}>Request Care</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={() => this.navigateTo('CareRequests')}>
                <Image
                  style={styles.navImage}
                  source={require('../../assets/icons/offer_care.png')}
                />
                <Text style={styles.navTitle}>Offer Care</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem}>
                <Image
                  style={styles.navImage}
                  source={require('../../assets/icons/view_super_profile.png')}
                />
                <Text style={styles.navTitle}>View Super Carer Profile</Text>
              </TouchableOpacity>
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
          <View style={styles.mapContainer}>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </View>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Care)