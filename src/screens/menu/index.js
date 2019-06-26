import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


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


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image
            style={styles.avatarImage}
            source={require('../../assets/avatars/avatar9.jpg')}
          />
          <View style={styles.titleSection}>
            <Text style={styles.nameText}>Tina T, TX</Text>
            <TouchableOpacity>
              <Text style={styles.profileText}>View your profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.navItemSection}>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/home.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Home</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/add-contact.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Find Caregivers Near You</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/leadership.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Caregiver Groups</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/care.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Careplace: Give Care, Get Care</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/settings.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Settings</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/notepad.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Terms & Conditions</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/shield.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Privacy Policy</Text>
              </View>
            </View>
            <View style={styles.navItem}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/envelope.png')}
              />
              <View style={styles.navTitle}>
                <Text style={styles.titleText}>Contact Us</Text>
              </View>
            </View>
            <View style={styles.bottomLinks}>
              <TouchableOpacity>
                <Text style={styles.bottomLink}>Deactivate my account</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.bottomLink}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)