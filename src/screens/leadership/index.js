import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
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


class Leadership extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topTitle}>CONNECT WITH OTHERS IN YOUR LOCAL GROUPS</Text>
        </View>
        <ScrollView>
          <View style={styles.yourGroupSection}>
            <Text style={styles.yourGroupTitle}>Your Groups</Text>
            <View style={styles.cardsSection}>
              <View style={styles.card}>
                <Image
                  style={styles.coverImage}
                  source={require('../../assets/images/cover.jpg')}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.contentText}>
                    PUBLIC GROUP RALEIGH Bringing all Raleigh family caregivers together for support, shared connections and relief
                  </Text>
                  <View style={styles.cardFooter}>
                    <Text style={styles.contentText}>1382 Caregivers Sharing</Text>
                    <View style={styles.postButton}>
                      <Text style={styles.postBtnTitle}>68 posts</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.otherGroupSection}>
            <Text style={styles.otherGroupTitle}>Other groups you may be interested in</Text>
            <View style={styles.card}>
              <Image
                style={styles.coverImage}
                source={require('../../assets/images/cover.jpg')}
              />
              <View style={styles.cardContent}>
                <Text style={styles.contentText}>
                  PUBLIC GROUP RALEIGH Bringing all Raleigh family caregivers together for support, shared connections and relief
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.contentText}>1382 Caregivers Sharing</Text>
                  <View style={styles.postButton}>
                    <Text style={styles.postBtnTitle}>68 posts</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                style={styles.coverImage}
                source={require('../../assets/images/cover.jpg')}
              />
              <View style={styles.cardContent}>
                <Text style={styles.contentText}>
                  PUBLIC GROUP RALEIGH Bringing all Raleigh family caregivers together for support, shared connections and relief
                </Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.contentText}>1382 Caregivers Sharing</Text>
                  <View style={styles.postButton}>
                    <Text style={styles.postBtnTitle}>68 posts</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.addGroupButtonSection}>
              <TouchableOpacity style={styles.buttonItem}>
                <View style={styles.buttonCircle}>
                  <Image
                    style={styles.buttonImage}
                    source={require('../../assets/icons/plus.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Leadership)