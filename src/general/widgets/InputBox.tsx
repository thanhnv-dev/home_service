import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Layout, Button} from '@ui-kitten/components';

const InputBox = ({
  borderColorBox,
  backGroundColorBox,
  IconLeft,
  IconRight,
  placeholder,
  value,
  onChangeText,
  onBlur,
  onFocus,
  onPressIconRight,
  secureTextEntry,
  colorTextInput,
  selectionColor,
}: {
  borderColorBox: string;
  backGroundColorBox: string;
  IconLeft: any;
  IconRight?: any;
  placeholder: string;
  value: string;
  onChangeText: any;
  onBlur: any;
  onFocus: any;
  onPressIconRight?: any;
  secureTextEntry?: boolean;
  colorTextInput: string;
  selectionColor: string;
}) => {
  const checkTypeInput = IconRight
    ? styles.viewInputTwoIcon
    : styles.viewInputAnIcon;
  return (
    <Layout
      style={[
        styles.boxInput,
        {
          borderColor: borderColorBox,
          backgroundColor: backGroundColorBox,
        },
      ]}>
      <Layout style={[styles.viewIconLeft, styles.center]}>{IconLeft}</Layout>
      <Layout style={checkTypeInput}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          secureTextEntry={secureTextEntry}
          selectionColor={selectionColor}
          style={[
            styles.textInput,
            {
              color: colorTextInput,
            },
          ]}
        />
      </Layout>
      {IconRight && (
        <Button
          style={styles.viewIconRight}
          appearance="ghost"
          accessoryLeft={IconRight}
          onPress={onPressIconRight}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  boxInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
  },
  viewIconLeft: {
    flex: 1.5,
    backgroundColor: 'transparent',
  },
  viewIconRight: {
    backgroundColor: 'transparent',
  },
  viewInputAnIcon: {
    flex: 9.5,
    backgroundColor: 'transparent',
  },
  viewInputTwoIcon: {
    backgroundColor: 'transparent',
    flex: 8,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
});

export {InputBox};
