import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import {
  CareRequest
} from '../../shares'

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


class CareRequests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.topSection}>
            <Image
              style={styles.avatarImage}
              source={require('../../assets/avatars/avatar9.jpg')}
            />
            <View style={styles.textSection}>
              <Image
                style={styles.iconImage}
                source={require('../../assets/icons/marker.png')}
              />
              <View style={styles.textContent}>
                <Text style={styles.boldText}>All Care Requests</Text>
                <Text style={styles.normalText}>near me</Text>
              </View>
            </View>
            <Image
              style={styles.iconImage}
              source={require('../../assets/icons/wine.png')}
            />
          </View>
          <CareRequest
            source={require('../../assets/avatars/avatar3.jpg')}
          />
          <CareRequest
            source={require('../../assets/avatars/avatar8.jpg')}
          />
          <CareRequest
            source={require('../../assets/avatars/avatar12.png')}
          />
          <CareRequest
            source={require('../../assets/avatars/avatar9.jpg')}
          />
        </ScrollView>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CareRequests)