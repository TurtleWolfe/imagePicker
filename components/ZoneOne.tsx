import * as React from 'react';
import { Button, TouchableOpacity, Linking, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 
import { Feather, Ionicons, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from './Themed';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

const _handleOpenWithWebBrowser = () => {
  WebBrowser.openBrowserAsync('https://docs.viromedia.com/docs/integrating-with-react-native-projects');
};

export default function ZoneOne() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };


  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }; 


  if (selectedImage !== null) {
    return (
<View style={styles.container}>
<View style={styles.camcontainer}>
<Text style={styles.title}>virtual filters</Text>
<Text style={styles.title}>April 1st</Text>
<Image
  source={{ uri: selectedImage.localUri }}
  style={styles.thumbnail}
/>
</View>
<View style={styles.separator} lightColor="#000" darkColor="rgba(255,255,255,0.1)" />
  {/* <Text style={styles.title}>Link to ViroReact for React Native</Text> */}
  {/* <EditScreenInfo path="/screens/UploadScreen.tsx" /> */}
  
  {/* Zone One */}
  <View style={styles.cccontainer}>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Ionicons name="camera" size={24}  color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
      <MaterialIcons name="collections" size={22} color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
        <MaterialCommunityIcons name="lipstick" size={24}  color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Lipstick</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openShareDialogAsync}
        style={styles.shareButton}>
        <Ionicons name="share" size={24}  color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
      <Feather name="arrow-up-left" size={24} color="purple" />
        {/* <Text style={{ fontSize: 12, color: '#000' }}>L</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
      <Feather name="arrow-up-right" size={24} color="purple" />  
        {/* <Text style={{ fontSize: 12, color: '#000' }}>R</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
      <Ionicons name="md-checkmark-circle" size={24}  color="purple" />
        {/* <Text style={{ fontSize: 12, color: '#000' }}>^</Text> */}
      </TouchableOpacity>
      </View>
</View>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.camcontainer}>
      <Text style={styles.title}>Don't be fooled</Text>
      <Text style={styles.title}>find the perfect fit</Text>
      <Text style={styles.title}>for your face</Text>
      <Text style={styles.title}>virtual filters</Text>
      <Text style={styles.title}>launching</Text>
      <Text style={styles.title}>April 1st</Text>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
        {/* <MaterialCommunityIcons name="camera" size={24}  color="purple" /> */}
        <Text style={{ fontSize: 20, color: '#000' }}>Viro for React Native</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/UploadScreen.tsx" /> */}
      {/* Zone One */}
      <View style={styles.cccontainer}>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Ionicons name="camera" size={24}  color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
      <MaterialIcons name="collections" size={22} color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
        <MaterialCommunityIcons name="lipstick" size={24}  color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Lipstick</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.button}>
        <Ionicons name="share" size={24}  color="purple" />
        <Text style={{ fontSize: 12, color: '#000' }}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
      <Feather name="arrow-up-left" size={24} color="purple" />
        {/* <Text style={{ fontSize: 12, color: '#000' }}>L</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
      <Feather name="arrow-up-right" size={24} color="purple" />  
        {/* <Text style={{ fontSize: 12, color: '#000' }}>R</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={_handleOpenWithWebBrowser}
        style={styles.button}>
      <Ionicons name="md-checkmark-circle" size={24}  color="purple" />
        {/* <Text style={{ fontSize: 12, color: '#000' }}>^</Text> */}
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  camcontainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // paddingTop: Constants.statusBarHeight,
    height: '77%',
    width: '100%',
    backgroundColor: '#DF9F7C',
  },
  cccontainer: {
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // width: '90%',
    // marginTop: 10,
    fontSize: 4,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 6, 
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 10,
    margin:1,
  },
  shareButton: {
    marginVertical: 6, 
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10,
    margin:1,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
  }, 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});