import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation'


import {
  TabItem
} from './src/shares'

import {
  Home,
  Register,
  Note,
  Menu,
  Leadership,
  Care,
  RequestCare,
  OfferCare,
  CareRequests,
  CareRequestView,
  Notification,
  More,
  FindCareGivers
} from './src/screens'

import {
  normalize
} from './src/helpers'


const AuthStack = {
  Home: { screen: Home },
  Register: { screen: Register }
}


const NoteStack = {
  Note: { screen: Note }
}
const NoteNavigator = createStackNavigator({
  ...NoteStack
}, {
    mode: 'modal',
    headerMode: 'none',
})


const ContactStack = {
  Menu: { screen: Menu },
  FindCareGivers: { screen: FindCareGivers }
}
const ContactNavigator = createStackNavigator({
  ...ContactStack
}, {
    mode: 'modal',
    headerMode: 'none',
})


const LeadershipStack = {
  Leadership: { screen: Leadership }
}
const LeadershipNavigator = createStackNavigator({
  ...LeadershipStack
}, {
    mode: 'modal',
    headerMode: 'none',
})


const CareStack = {
  Care: { screen: Care },
  RequestCare: { screen: RequestCare },
  OfferCare: { screen: OfferCare },
  CareRequests: { screen: CareRequests },
  CareRequestView: { screen: CareRequestView }
}
const CareNavigator = createStackNavigator({
  ...CareStack
}, {
    mode: 'modal',
    headerMode: 'none',
})


const NotificationStack = {
  Notification: { screen: Notification }
}
const NotificationNavigator = createStackNavigator({
  ...NotificationStack
}, {
    mode: 'modal',
    headerMode: 'none',
})

const MoreStack = {
  More: { screen: More }
}
const MoreNavigator = createStackNavigator({
  ...MoreStack
}, {
    mode: 'modal',
    headerMode: 'none',
})


const TabStack = {
  NoteTab: {
    screen: NoteNavigator,
    navigationOptions: {
      tabBarLabel: 'Note',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <TabItem focused={focused} route={'Note'} />
      }
    }
  },
  ContactTab: {
    screen: ContactNavigator,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <TabItem focused={focused} route={'Contact'} />
      }
    }
  },
  LeadershipTab: {
    screen: LeadershipNavigator,
    navigationOptions: {
      tabBarLabel: 'Leadership',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <TabItem focused={focused} route={'Leadership'} />
      }
    }
  },
  CareTab: {
    screen: CareNavigator,
    navigationOptions: {
      tabBarLabel: 'Care',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <TabItem focused={focused} route={'Care'} />
      }
    }
  },
  NotificationTab: {
    screen: NotificationNavigator,
    navigationOptions: {
      tabBarLabel: 'Notification',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <TabItem focused={focused} route={'Notification'} />
      }
    }
  },
  MoreTab: {
    screen: MoreNavigator,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        return <TabItem focused={focused} route={'More'} />
      }
    }
  },
}
const TabNavigator = createMaterialTopTabNavigator({
  ...TabStack
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    upperCaseLabel: false,
    pressColor: 'rgba(255,255,255, 0.6)',
    pressOpacity: 0.6,
    activeTintColor: 'rgba(255,255,255, 0.5)',
    inactiveTintColor: '#ffffff',
    indicatorStyle: {
      backgroundColor: '#540C69',
    },
    style: {
      padding: normalize(5),
      backgroundColor: '#ffffff',
      borderTopWidth: 0,
      borderBottomWidth: 2,
      borderColor: '#f2f2f2',
      height: normalize(60)
    },
    tabStyle: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    labelStyle: {
      fontSize: normalize(8),
    },
    iconStyle: {
    }
  },
  hiddenTabs: []
})










const AppNavigator = createStackNavigator({
  ...AuthStack,
  TabNav: { screen: TabNavigator }
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