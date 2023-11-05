import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AppColors from "../constants/AppColors";
import * as ImagePicker from "expo-image-picker";

const BoxWithCards = () => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Card style={styles.doubleWidthCard} />
        <Card style={styles.card} />
      </View>
      <View style={styles.row}>
        <Card style={styles.card} />
        <Card style={styles.card} />
        <Card style={styles.card} />
      </View>
    </View>
  );
};

const Card = ({ text, style, children }) => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        const newImageUri = result.assets[0].uri;
        setImageUri(newImageUri);
        console.log("Image URI:", newImageUri);
      }
    } catch (error) {
      console.error("Image picking error:", error);
    }
  };

  const cardStyle = [styles.card, style];

  if (imageUri) {
    cardStyle.push({
      backgroundImage: `url(${imageUri})`,
      backgroundSize: "cover",
    });
  }

  return (
    <View style={cardStyle}>
      {imageUri ? (
        <>
          <Image source={{ uri: imageUri }} style={styles.coverImage} />

          <TouchableOpacity style={styles.updateButton} onPress={pickImage}>
            <AntDesign name="camera" size={21} color="white" />
            <Text>&nbsp;</Text>
            <Text style={styles.buttonTextUpdate}>Change</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <MaterialIcons
            name="emoji-emotions"
            size={55}
            color="white"
            style={{ paddingTop: 30 }}
          />
          <Text>&nbsp;</Text>
          <TouchableOpacity style={styles.addButton} onPress={pickImage}>
            <MaterialIcons name="add" size={24} color="white" />
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </>
      )}
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    margin: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  doubleWidthCard: {
    flex: 2.1,
  },
  card: {
    flex: 1,
    height: 160,
    margin: 5,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgray",
  },
  coverImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    borderRadius: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.primaryColorNormal,
    padding: 5,
    borderRadius: 20,
  },
  updateButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(211, 203, 222, 0.8)",
    padding: 7,
    borderRadius: 20,
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    marginLeft: 0,
    marginRight: 10,
  },
  buttonTextUpdate: {
    color: "white",
  },
});

export default BoxWithCards;
