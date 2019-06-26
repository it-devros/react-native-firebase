import React from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
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


class Note extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null,
      searchKey: null
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.inputFormSection}>
          <Image
            style={styles.postItemAvatar}
            source={require('../../assets/avatars/avatar9.jpg')}
          />
          <View style={styles.inputSector}>
            <View style={styles.inputSection}>
              <TextInput
                style={styles.inputElement}
                placeholder={'Share something with your group or ask a question...'}
                value={this.state.content}
                multiline={true}
              />
            </View>
            <View style={styles.attachBtnSection}>
              <TouchableOpacity>
                <Image
                  style={styles.attachBtnImage}
                  source={require('../../assets/icons/add.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.searchFormSection}>
          <TextInput
            style={styles.searchElement}
            placeholder={'Latest Posts'}
            value={this.state.searchKey}
          />
          <Image
            style={styles.searchIcon}
            source={require('../../assets/icons/search-outline.png')}
          />
        </View>
        <ScrollView>
          <View style={styles.postItems}>
            <View style={styles.item}>
              <Post />
            </View>
            <View style={styles.item}>
              <Post />
            </View>
            <View style={styles.item}>
              <Post />
            </View>
          </View>
        </ScrollView>
      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Note)