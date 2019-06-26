import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { 
  Post
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


class More extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.overviewSection}>
            <ImageBackground
              style={styles.coverImage}
              source={require('../../assets/images/cover.jpg')}
            >
              <View style={styles.maskView}>
                <TouchableOpacity>
                  <Image
                    style={styles.coverImageAddBtn}
                    source={require('../../assets/icons/add.png')}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <View style={styles.profileSection}>
              <View style={styles.avatarSection}>
                <View style={styles.absoluteAvatar}>
                  <Image
                    style={styles.avatarImage}
                    source={require('../../assets/avatars/avatar9.jpg')}
                  />
                </View>
                <View style={styles.absoluteAdd}>
                  <TouchableOpacity>
                    <Image
                      style={styles.avatarAddImage}
                      source={require('../../assets/icons/add.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.infoSection}>
                <Text style={styles.nameAddress}>Susan C., 62, Raleigh, NC</Text>
                <Text style={styles.description}>
                  Daughter, Caregiver to 87 year old mother with Dementia
                </Text>
              </View>
              <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.buttonItem}>
                  <View style={styles.buttonCircle}>
                    <Image
                      style={styles.buttonImage}
                      source={require('../../assets/icons/plus.png')}
                    />
                  </View>
                  <Text style={styles.buttonTitle}>Write a Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonItem}>
                  <View style={styles.buttonCircle}>
                    <Image
                      style={styles.buttonImage}
                      source={require('../../assets/icons/user_edit.png')}
                    />
                  </View>
                  <Text style={styles.buttonTitle}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonItem}>
                  <View style={styles.buttonCircle}>
                    <Image
                      style={styles.buttonImage}
                      source={require('../../assets/icons/add-contact.png')}
                    />
                  </View>
                  <Text style={styles.buttonTitle}>Find Caregivers near you</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonItem}>
                  <View style={styles.buttonCircle}>
                    <Image
                      style={styles.buttonImage}
                      source={require('../../assets/icons/ellipsis.png')}
                    />
                  </View>
                  <Text style={styles.buttonTitle}>More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.latestPostSecion}>
            <View style={styles.latestPostTitleSection}>
              <Text style={styles.latestPostTitle}>Latest Posts</Text>
            </View>
            <View style={styles.postItems}>
              <Post />
            </View>
          </View>
        </ScrollView>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(More)