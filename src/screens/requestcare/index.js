import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
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


class RequestCare extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: null
    }

  }

  render() {

    return(
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.inputSection}>
            <Image
              style={styles.avatarImage}
              source={require('../../assets/avatars/avatar9.jpg')}
            />
            <View style={styles.inputFormSection}>
              <Text style={styles.nameAddress}>Marci T., TX</Text>
              <View style={styles.inputMainSection}>
                <TextInput
                  style={styles.inputElement}
                  placeholder={'Start typing your request...'}
                  value={this.state.content}
                  multiline={true}
                />
              </View>
            </View>
          </View>
          <View style={styles.middleButtonSection}>
            <TouchableOpacity>
              <View style={styles.tagButton}>
                <Text style={styles.tagButtonTitle}>REQUEST CARE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.tagButton}>
                <Text style={styles.tagButtonTitle}>OFFER CARE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.mapHeaderTextSection}>
            <Text style={styles.mapHeaderText}>CAREGIVERS NEAR YOU</Text>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapContent}
            initialRegion={{
              latitude: 40.700782,
              longitude: -73.905979,
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestCare)