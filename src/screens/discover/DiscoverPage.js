import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { IconButton } from 'react-native-paper'
import AppColors from '../../constants/AppColors'
import AppDimensions from '../../constants/AppDimensions'
import { Avatar, ListItem } from '@rneui/themed'
import { faker } from '@faker-js/faker'
import DiscoverItem from './components/DiscoverItem'
import AvatarList from './components/AvatarList'
import DiscoverDetailItem from './components/DiscoverDetailItem'

export default function DiscoverPage({ navigation }) {
    const insets = useSafeAreaInsets()
    const discoverList = Array(2)
        .fill(0)
        .map(_ => ({
            id: faker.finance.accountNumber(),
            title: faker.person.fullName(),
            subTitle: faker.lorem.sentence(),
            image: faker.image.avatarGitHub()
        }));
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 20, marginTop: 8 }}>
                <IconButton
                    icon="arrow-left"
                    mode='outlined'
                    iconColor={AppColors.primaryColor}
                    size={24}
                    onPress={() => console.log('Pressed')}
                />

                <View>
                    <View style={{}}>
                        <FlatList
                            ListHeaderComponent={<Text style={{ fontSize: 20, fontWeight: 'bold', }}>Discover by Interest</Text>}
                            ListHeaderComponentStyle={{ marginBottom: AppDimensions.heightPercentage('1.5') }}
                            data={discoverList}
                            renderItem={({ item }) => <DiscoverItem discoverItem={item} />}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            style={{ marginTop: AppDimensions.heightPercentage('3') }}
                            ItemSeparatorComponent={<View style={{ height: AppDimensions.heightPercentage('2') }} />}
                        />


                        <FlatList
                            ListHeaderComponent={<Text style={{ fontSize: 20, fontWeight: 'bold', }}>Discover by Interest</Text>}
                            ListHeaderComponentStyle={{ marginBottom: AppDimensions.heightPercentage('1.5') }}
                            data={discoverList}
                            renderItem={({ item }) => <DiscoverDetailItem discoverItem={item} />}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            style={{ marginTop: AppDimensions.heightPercentage('3') }}
                            ItemSeparatorComponent={<View style={{ height: AppDimensions.heightPercentage('2') }} />}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({})