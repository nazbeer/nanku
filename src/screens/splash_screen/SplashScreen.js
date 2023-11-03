import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppImages from '../../constants/AppImages'
import AppColors from '../../constants/AppColors'

export default function SplashScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: AppColors.splashBg }}>
            <Image
                source={AppImages.splashBg}
                style={{ top: '7%', alignSelf: 'flex-end' }}
            >
            </Image>
            <Image
                source={AppImages.logo}
                style={{ position: 'absolute', alignSelf: 'center', bottom: '50%' }}
            >
            </Image>


        </View>
    )
}

const styles = StyleSheet.create({})