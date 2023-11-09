import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/themed'
import { faker } from '@faker-js/faker'
import AppColors from '../../../constants/AppColors'
import AvatarList from './AvatarList'

export default function DiscoverDetailItem({discoverItem}) {
  return (
    <ListItem containerStyle={{ backgroundColor: 'rgba(203, 158, 202, 0.5)', borderRadius: 12,  }}>
      <ListItem.Content>
        <ListItem.Title style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>
          {discoverItem.title}
        </ListItem.Title>
        <AvatarList />
      </ListItem.Content>

      <Avatar avatarStyle={{ borderRadius: 8 }} containerStyle={{ height: 60, width: 100, }} imageProps={{ resizeMode: 'cover', }}
        source={{ uri: faker.image.urlLoremFlickr() }}
      />
    </ListItem>
  )
}

const styles = StyleSheet.create({})