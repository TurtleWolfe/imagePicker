// rnpce
import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { ButtonGroup } from 'react-native-elements/'
export class ImageButtons extends PureComponent {
  constructor() {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })
  }

  render() {
    const buttons = ['Camera', 'Gallery', 'Share']
    const { selectedIndex } = this.state

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 45, width: 200 }}
      />
    )
  }
}

export default ImageButtons
