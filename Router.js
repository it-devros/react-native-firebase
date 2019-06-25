import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'




import {
  Home,
  Register
} from './src/screens'


const AuthStack = {
  Home: { screen: Home },
  Register: { screen: Register }
}


const AppNavigator = createStackNavigator({
  ...AuthStack
}, {
  mode: 'modal',
  headerMode: 'none',
})


const AppContainer = createAppContainer(AppNavigator)



const mapDispatchToProps = (dispatch) => {
	return ({
	})
}

const mapStateToProps = (state) => {
	return ({
	})
}


class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <AppContainer />
    )
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Router)