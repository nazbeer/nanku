import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import the Material Icons library

const BoxWithCards = () => {
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <Card text="Card 1" style={styles.doubleWidthCard}>
          <Image source={require('../assets/google.png')} style={styles.image} />
        </Card>
        <Card text="Card 3" style={styles.card}>
          <Image source={require('../assets/google.png')} style={styles.image} />
        </Card>
      </View>
      <View style={styles.row}>
        <Card text="Card 6" style={styles.card}>
          <Image source={require('../assets/google.png')} style={styles.image} />
        </Card>
        <Card text="Card 7" style={styles.card}>
          <Image source={require('../assets/google.png')} style={styles.image} />
        </Card>
        <Card text="Card 8" style={styles.card}>
          <Image source={require('../assets/google.png')} style={styles.image} />
        </Card>
      </View>
    </View>
  );
};

const Card = ({ text, style, children }) => {
  return (
    <View style={[styles.card, style]}>
      {children} 
      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add" size={24} color="white" />
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doubleWidthCard: {
    flex: 2.3,
  },
  card: {
    flex: 1,
    height: 120,
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 20,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 0,
    marginRight:10
  },
});

export default BoxWithCards;
