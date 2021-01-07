import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

import { width, height } from '../helpers/Dimensions';

const FormInput = ({ labelname, ...rest }) => {
  return (
    <TextInput
      label={labelname}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width / 1.5,
    height: height / 15,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default FormInput;
