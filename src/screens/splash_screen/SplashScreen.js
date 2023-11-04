import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import AppImages from "../../constants/AppImages";
import AppColors from "../../constants/AppColors";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("login");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={AppImages.splashBg} style={styles.logoImage} />
      <Image source={AppImages.logo} style={styles.splashImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.splashBg,
  },
  splashImage: {
    position: "absolute",
    alignSelf: "center",
    bottom: "50%",
  },
  logoImage: {
    top: "7%",
    alignSelf: "flex-end",
  },
});
