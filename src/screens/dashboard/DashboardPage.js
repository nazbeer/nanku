import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import AppImages from '../../constants/AppImages'
import AppColors from '../../constants/AppColors'
import { IconButton, MD3Colors } from 'react-native-paper'
import SwitchSelector from 'react-native-switch-selector'
import AppDimensions from '../../constants/AppDimensions';

export default function DashboardPage() {
  const options = [
    { label: "01:00", value: "1" },
    { label: "01:30", value: "1.5" },

  ];

  const insets = useSafeAreaInsets()
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          marginTop: Platform.OS === 'android' ? insets.top + 4 : 1,
        }}>
          <Image source={AppImages.logo} />

          <IconButton
            mode='outlined'
            icon="bell-outline"
            iconColor={MD3Colors.error50}
            size={24}
            animated={true}
            onPress={() => console.log('Pressed')}
          />
        </View>

        <View style={{ marginTop: AppDimensions.heightPercentage('2') }}>
          <SwitchSelector
            options={options}
            initial={0}
            onPress={value => console.log(`Call onPress with value: ${value}`)}
            selectedColor={AppColors.primaryColor}
            buttonColor={'#f8e7f6'}
            hasPadding
            textStyle={{ fontSize: 16, fontWeight: '600' }}
            selectedTextStyle={{ fontSize: 16, fontWeight: '700' }}
            borderRadius={18}
            buttonMargin={2}

          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})