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


class CareRequestView extends React.Component {
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
          <View style={styles.contentSection}>
            <Image
              style={styles.avatarImage}
              source={require('../../assets/avatars/avatar9.jpg')}
            />
            <View style={styles.statusSection}>
              <View style={styles.statusHeaderSection}>
                <Image
                  style={styles.superIconImage}
                  source={require('../../assets/icons/view_super_profile.png')}
                />
                <Text style={styles.statusText}>Super Carer Status</Text>
              </View>
              <View style={styles.detailSection}>
                <View style={styles.detailItem}>
                  <View style={styles.detailItemSection1}>
                    <Text style={styles.detailTitle}>Total Care Hours Offered</Text>
                    <Text style={styles.detailBold}>24</Text>
                  </View>
                </View>
                <View style={styles.detailItem}>
                  <View style={styles.detailItemSection2}>
                    <Text style={styles.detailTitle}>Upcoming Care Hours</Text>
                    <Text style={styles.detailBold}>8</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.descriptionSection}>
            <Text style={styles.descriptionText}>
              Tina, you have helped 7 caregivers get 24 hours of their life back. Thanks for making the world a better place. You're a Platinum Status SUPER CARER!
            </Text>
          </View>
          <View style={styles.middleButtonSection}>
            <TouchableOpacity onPress={() => this.navigateTo('CareRequests')}>
              <View style={styles.tagButton}>
                <Text style={styles.tagButtonTitle}>View Care Requests</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.mapHeaderTextSection}>
            <Text style={styles.mapHeaderText}>CAREGIVERS NEEDING CARE NEAR YOU</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(CareRequestView)