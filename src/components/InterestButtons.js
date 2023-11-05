import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColors from '../constants/AppColors';

const InterestButtons = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleInterestSelect = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else if (selectedInterests.length < 5) { // Limit to 5 selections
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const isInterestSelected = (interest) => selectedInterests.includes(interest);

  const interests = [
    '🎮 Gaming',
    '💃🏼 Dancing',
    '🔈 Language',
    '🎵 Music',
    '🎬 Movie',
    '📸 Photography',
    '🏛️ Architecture',
    '👗 Fashion',
    '📚 Book',
    '✍️ Writing',
    '🍃 Nature',
    '🎨 Painting',
    '⚽ Football',
    '🙂 People',
    '🐼 Animals',
    '💪 Gym & Fitness',
  ];

  return (
    <View style={styles.buttonContainer}>
      {interests.map((interest) => (
        <TouchableOpacity
          key={interest}
          style={[
            styles.smallButton,
            isInterestSelected(interest) && {
              backgroundColor: AppColors.primaryColorNormal,
              borderColor: AppColors.primaryColorNormal,
            },
          ]}
          onPress={() => handleInterestSelect(interest)}
        >
          <Text style={isInterestSelected(interest) ? { color: 'white' } : {}}>
            {interest}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal:20
  },
  smallButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: 'white',
    padding: 10,
    margin: 6,
    borderWidth: 1,
    borderColor:AppColors.primaryColorNormal
  },
});

export default InterestButtons;
