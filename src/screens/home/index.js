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
  BlockIconButton
} from '../../components'

import {
  HomeFooter
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


class Home extends React.Component {
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
              <BlockIconButton
                title={'Login with Facebook'}
                background={'#3B5998'}
                color={'#ffffff'}
                icon={
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/icons/facebook.png')}
                  />
                }
              />
              <BlockIconButton
                title={'Login with Google'}
                background={'#ffffff'}
                color={'#000000'}
                icon={
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/icons/search.png')}
                  />
                }
              />
              <Text style={styles.newUserLabel}>New user?</Text>
              <BlockIconButton
                title={'Sign up with Email'}
                background={'#ffffff'}
                color={'#000000'}
                icon={
                  <Image
                    style={styles.buttonIcon}
                    source={require('../../assets/icons/opened-email-envelope.png')}
                  />
                }
                onPress={() => this.navigateTo('Register')}
              />
            </View>
            <HomeFooter />
          </View>
        </View>
      </ImageBackground>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)