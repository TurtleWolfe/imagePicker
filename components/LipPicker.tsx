import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ButtonGroup } from 'react-native-elements/'

export class LipPicker extends PureComponent {
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
  component4 = () => <Text>four</Text>
  component5 = () => <Text>five</Text>

  render() {
    const buttons = [{ element: this.component1 }, { element: this.component2 }, { element: this.component3 }, { element: this.component4 }, { element: this.component5 }]
    const { selectedIndex } = this.state
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 45, width: 260 }} />
    )
  }
}

export default LipPicker
