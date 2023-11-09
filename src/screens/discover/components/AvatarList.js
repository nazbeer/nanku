import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { faker } from '@faker-js/faker';
import { Avatar } from '@rneui/base';


export default function AvatarList() {

    const AvatarItem = ({ isTxt = false }) => {
        return isTxt ? <View style={styles.avatar}></View> : <View style={styles.avatar}><Avatar rounded={true} size={36} avatarStyle={{}}
            source={{ uri: faker.image.avatarGitHub() }}
        />
        </View>
    };


    return (

        <View style={styles.avatarList}>
            <AvatarItem />
            <AvatarItem />
            <AvatarItem />
            <AvatarItem />

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    avatarList: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    avatar: {
        height: 36,
        width: 36,
        marginRight: -8,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white',
    },
});