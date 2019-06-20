import React from 'react'
import {
  View
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


class Temp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return(
      <View>

      </View>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Temp)