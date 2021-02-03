import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount () {
    await this._loadAssets()
  }
  
  async _loadAssets () {
    await Font.loadAsync({
      'lato-bold-extra': require('./assets/fonts/Lato-Black.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      'lato-bold-italic': require('./assets/fonts/Lato-BoldItalic.ttf')
    })
    console.log('your fonts loaded!')
    this.setState({fontLoaded: true})
  }

  render () {
    let text = null
    if (this.state.fontLoaded) {
      text = <View>
        <Text style={{fontSize: 24, fontFamily: 'lato-bold-extra'}}>
          Hello, world!
        </Text>
        <Text style={{fontSize: 24, fontFamily: 'lato-bold'}}>
          Hello, world!
        </Text>
        <Text style={{fontSize: 24, fontFamily: 'lato-bold-italic'}}>
          Hello, world!
        </Text>
      </View>
    }
    return (
      <View style={styles.container}>
        {text}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
