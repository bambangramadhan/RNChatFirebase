import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { width, height } from '../helpers/Dimensions';

const FormButton = ({ text, labelStyle, buttonStyle, ...rest }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        {...rest}
      >
        <Text style={labelStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.055,
    borderRadius: 10
  },
  buttonContainer: {
    width: width / 2,
    height: height / 15
  }
});

export default FormButton;
