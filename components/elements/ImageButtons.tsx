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

  component1 = () => <Text>Camera</Text>
  component2 = () => <Text>Gallery</Text>
  component3 = () => <Text>Share</Text>

  render() {
    const buttons = [{ element: this.component1 }, { element: this.component2 }, { element: this.component3 }]
    const { selectedIndex } = this.state
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 45, width: 200, overflow: 'visible' }} />
    )
  }
}

export default ImageButtons
