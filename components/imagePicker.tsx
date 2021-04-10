import React, { Component } from 'react'
import { ActivityIndicator, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Card, Image, Text, } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import uploadToAnonymousFilesAsync from 'anonymous-files';
import Icon from 'react-native-vector-icons/FontAwesome';
// import logo from '../assets/images/logo.png';
// import ImageButtons from '../components/elements/ImageButtons'
const imagePicker = () => {
  // render() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  {/* Camera Function */ }
  let openCameraPickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  };

  {/* Gallery Function */ }
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  };

  {/* Sharing Function */ }
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    {/* Starting View */ }
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
          PlaceholderContent={<ActivityIndicator />}
        />
        {/* start of button group view */}
        <View style={styles.buttonContainer}>
          {/* <Camera /> */}
          <Button
            // title="Camera"
            onPress={openCameraPickerAsync}
            style={styles.button}
            raised
            icon={
              <Icon
                name="camera"
                size={13}
                color="yellow"
              />
            }
          >
            {/* <Text style={styles.buttonText}>Take a photo</Text> */}
          </Button>
          {/* <Gallery /> */}
          <Button
            // title="Gallery"
            onPress={openImagePickerAsync}
            style={styles.button}
            raised
            icon={
              <Icon
                name="folder-open"
                size={13}
                color="yellow"
              />
            }
          >
            {/* <Text style={styles.buttonText}>Pick an Image</Text> */}
          </Button>
          {/* <LipStickButton /> */}
          <Button
            // title="LipStick"
            onPress={openShareDialogAsync}
            style={styles.button}
            raised
            // disabled
            icon={
              <Icon
                name="camera"
                size={15}
                color="red"
              />
            }
          >
            {/* <Text style={styles.buttonText}>Share It</Text> */}
          </Button>
          {/* <Sharing /> */}
          <Button
            // title="Share"
            onPress={openShareDialogAsync}
            style={styles.button}
            raised
            // disabled
            icon={
              <Icon
                name="share"
                size={15}
                color="orange"
              />
            }
          >
            {/* <Text style={styles.buttonText}>Share It</Text> */}
          </Button>
          {/* Button ? */}
          <Button
            // title="Share"
            onPress={openShareDialogAsync}
            style={styles.button}
            raised
            disabled
            icon={
              <Icon
                name="share"
                size={10}
                color="white"
              />
            }
          >
            {/* <Text style={styles.buttonText}>Share It</Text> */}
          </Button>
          {/* Button ? */}
          <Button
            // title="Share"
            onPress={openShareDialogAsync}
            style={styles.button}
            raised
            disabled
            icon={
              <Icon
                name="share"
                size={10}
                color="white"
              />
            }
          >
            {/* <Text style={styles.buttonText}>Share It</Text> */}
          </Button>
          {/* Button ? */}
          <Button
            // title="Share"
            onPress={openShareDialogAsync}
            style={styles.button}
            raised
            disabled
            icon={
              <Icon
                name="share"
                size={10}
                color="white"
              />
            }
          >
            {/* <Text style={styles.buttonText}>Share It</Text> */}
          </Button>
        </View>
        {/* end of button group view */}
      </View>
    );
  }

  {/* Primary View */ }
  return (
    <View style={styles.container} >
      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone,
          </Text>
      <Text style={styles.instructions}>
        just press the button below!
          </Text>
      {/* start of button group view */}
      <View style={styles.buttonContainer}>
        {/* <Camera /> */}
        <Button
          // title="Camera"
          onPress={openCameraPickerAsync}
          style={styles.button}
          raised
          icon={
            <Icon
              name="camera"
              size={15}
              color="orange"
            />
          }
        >
          {/* <Text style={styles.buttonText}>Take a photo</Text> */}
        </Button>
        {/* <Gallery /> */}
        <Button
          // title="Gallery"
          onPress={openImagePickerAsync}
          style={styles.button}
          raised
          icon={
            <Icon
              name="folder-open"
              size={15}
              color="orange"
            />
          }
        >
          {/* <Text style={styles.buttonText}>Pick an Image</Text> */}
        </Button>
        {/* <LipStickButton /> */}
        <Button
          // title="LipStick"
          onPress={openShareDialogAsync}
          style={styles.button}
          raised
          disabled
          icon={
            <Icon
              name="camera"
              size={10}
              color="white"
            />
          }
        >
          {/* <Text style={styles.buttonText}>Share It</Text> */}
        </Button>
        {/* <Sharing /> */}
        <Button
          // title="Share"
          onPress={openShareDialogAsync}
          style={styles.button}
          raised
          disabled
          icon={
            <Icon
              name="share"
              size={10}
              color="white"
            />
          }
        >
          {/* <Text style={styles.buttonText}>Share It</Text> */}
        </Button>
        {/* Button ? */}
        <Button
          // title="Share"
          onPress={openShareDialogAsync}
          style={styles.button}
          raised
          disabled
          icon={
            <Icon
              name="share"
              size={10}
              color="white"
            />
          }
        >
          {/* <Text style={styles.buttonText}>Share It</Text> */}
        </Button>
        {/* Button ? */}
        <Button
          // title="Share"
          onPress={openShareDialogAsync}
          style={styles.button}
          raised
          disabled
          icon={
            <Icon
              name="share"
              size={10}
              color="white"
            />
          }
        >
          {/* <Text style={styles.buttonText}>Share It</Text> */}
        </Button>
        {/* Button ? */}
        <Button
          // title="Share"
          onPress={openShareDialogAsync}
          style={styles.button}
          raised
          disabled
          icon={
            <Icon
              name="share"
              size={10}
              color="white"
            />
          }
        >
          {/* <Text style={styles.buttonText}>Share It</Text> */}
        </Button>
      </View>
      {/* end of button group view */}
    </View >
  )
}
// }
export default imagePicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: '#888',
    alignItems: 'center',
    width: 260,
    justifyContent: 'space-between',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#ccc',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 7,
  },
  button: {
    // backgroundColor: "blue",
    // padding: 10,
    // borderRadius: 5,
    // marginBottom: 10
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    // Try switching it from contain to stretch or cover 
    marginBottom: 20,
  }
});
