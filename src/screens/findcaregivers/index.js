import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  CareGiver
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


class FindCareGivers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topText}>
            Help expand your care tribe. Invite friends & share on social media
          </Text>
          <TouchableOpacity>
            <Image
              style={styles.topImage}
              source={require('../../assets/icons/share.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.topImage}
              source={require('../../assets/icons/facebook-add.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.addCareGiverSection}>
          <TouchableOpacity style={styles.buttonItem}>
            <View style={styles.buttonCircle}>
              <Image
                style={styles.buttonImage}
                source={require('../../assets/icons/user-add.png')}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.addCareGiverTitle}>Add Suggested Caregiver Friends Near You</Text>
        </View>
        <ScrollView>
          <View style={styles.contactItems}>
            <CareGiver
              source={require('../../assets/avatars/avatar3.jpg')}
              tag={'NEW'}
            />
            <CareGiver
              source={require('../../assets/avatars/avatar8.jpg')}
              tag={'Super\nCarer'}
            />
            <CareGiver
              source={require('../../assets/avatars/avatar12.png')}
            />
            <CareGiver
              source={require('../../assets/avatars/avatar9.jpg')}
              tag={'NEW'}
            />
          </View>
        </ScrollView>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(FindCareGivers)