import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/themed'
import { faker } from '@faker-js/faker'

import AppColors from '../../../constants/AppColors'


const DiscoverItem = ({ discoverItem }) => {
    return (
        <ListItem containerStyle={{ backgroundColor: 'rgba(203, 158, 202, 0.5)', borderRadius: 12 }}>
            <Avatar size={60} avatarStyle={{ borderRadius: 8 }}
                source={{ uri: faker.image.avatarGitHub() }}
            />

            <ListItem.Content>

                <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>
                   {discoverItem.title}
                </ListItem.Title>
                <ListItem.Subtitle style={{ color: AppColors.primaryColor }}>
                    Vice Chairman
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="black" />
        </ListItem>
    )
}

export default DiscoverItem