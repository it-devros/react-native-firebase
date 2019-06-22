import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Button,
  Link
} from '../../components'

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


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/background.png')}
      >
        <View style={styles.container}>
          <View style={styles.logoSection}>
            <Image
              style={styles.logoImg}
              source={require('../../assets/icons/logo_transparent.png')}
            />
            <View>
              <Text style={styles.logoText}>Cara</Text>
            </View>
          </View>
          <View style={styles.buttonSection}>
            <View style={styles.startSection}>
              <Text style={styles.startTitle}>Give Care, Get Care</Text>
              <Button
                title={'Login with Facebook'}
                styleContainer={[styles.buttonContainer, {backgroundColor: '#3B5998'}]}
                styleTitle={[styles.buttonTitle, {color: '#ffffff'}]}
                icon={
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/icons/facebook.png')}
                  />
                }
              />
              <Button
                title={'Login with Google'}
                styleContainer={styles.buttonContainer}
                styleTitle={styles.buttonTitle}
                icon={
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/icons/search.png')}
                  />
                }
              />
              <Text style={styles.newUserLabel}>New user?</Text>
              <Button
                title={'Sign up with Email'}
                styleContainer={styles.buttonContainer}
                styleTitle={styles.buttonTitle}
                icon={
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/icons/opened-email-envelope.png')}
                  />
                }
              />
            </View>
            <View style={styles.footerNavSection}>
              <View style={styles.footerNavItem}>
                <Link
                  title={'Terms & Conditions'}
                  style={styles.link}
                />
              </View>
              <View style={styles.footerNavItem}>
                <Text style={{ color: '#ffffff' }}>|</Text>
              </View>
              <View style={styles.footerNavItem}>
                <Link
                  title={'Privacy Policy'}
                  style={styles.link}
                /> 
              </View> 
            </View>
          </View>
        </View>
      </ImageBackground>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)