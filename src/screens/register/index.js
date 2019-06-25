import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Dimensions
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import {
  Button,
  StrInput
} from '../../components'

import {
  HomeFooter
} from '../../shares'

import {
  commonActions,
  userActions
} from '../../actions'

import {
  normalize
} from '../../helpers'


import styles from './style'

const { width } = Dimensions.get('window')

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


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.navigateTo = this.navigateTo.bind(this)
  }

  navigateTo(screen) {

  }

  render() {

    return(
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/images/register_background.png')}
      >
        <View style={styles.container}>
          <View style={styles.headerSection}>
            <Text style={styles.titleText}>Create Account</Text>
          </View>
          <View style={styles.inputSection}>
            <View style={styles.formSection}>
              <View style={styles.inputContainer}>
                <StrInput
                  type={'email'}
                  placeholder={'Email'}
                  width={width - normalize(60)}
                />
                <StrInput
                  type={'password'}
                  placeholder={'Password'}
                  width={width - normalize(60)}
                />
                <StrInput
                  type={'password'}
                  placeholder={'Confirm Password'}
                  width={width - normalize(60)}
                />
              </View>
              <View style={styles.descSection}>
                <Text style={styles.descText}>
                  By creating an account, you agree to Cara's Terms & Conditions.
                </Text>
              </View>
              <View style={styles.nextBtnSection}>
                <View style={styles.rightFloat}>
                  <Button
                    title={'NEXT >'}
                    background={'#ffffff'}
                    color={'#000000'}
                    onPress={() => this.navigateTo('Register')}
                  />
                </View>
              </View>
            </View>
            <HomeFooter />
          </View>
        </View>
      </ImageBackground>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Register)