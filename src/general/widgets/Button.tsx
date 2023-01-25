import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import styles from './styles';

const LoginButton3rdPparty = ({
  containerStyle,
  icon,
  iconStyle,
  title,
  titleStyle,
}: {
  containerStyle: any;
  icon: any;
  iconStyle: any;
  title?: string;
  titleStyle?: any;
}) => {
  return (
    <TouchableOpacity style={containerStyle}>
      <Image source={icon} style={iconStyle} />
      {title && <Text style={titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

const LoginButton3rdPparty1 = ({title, icon}: {title: string; icon: any}) => (
  <LoginButton3rdPparty
    title={title}
    icon={icon}
    iconStyle={styles.icon3rd}
    titleStyle={styles.fs14bold}
    containerStyle={[styles.button, styles.center]}
  />
);

const LoginButton3rdPparty2 = ({icon}: {icon: any}) => (
  <LoginButton3rdPparty
    icon={icon}
    iconStyle={styles.icon3rd}
    containerStyle={[styles.button2, styles.center]}
  />
);

const MyButton = ({
  onPress,
  title,
  containerStyle,
  disabled,
  titleStyle,
}: {
  onPress: any;
  title: string;
  containerStyle?: any;
  titleStyle?: any;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={containerStyle ? containerStyle : [styles.button3, styles.center]}
      onPress={onPress}>
      <Text style={titleStyle ? titleStyle : styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};
const MyButton1 = ({
  onPress,
  title,
  backgroundColor,
  disabled,
  titleStyle,
}: {
  onPress: any;
  title: string;
  backgroundColor: any;
  titleStyle?: any;
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button3, styles.center, backgroundColor]}
      onPress={onPress}>
      <Text style={titleStyle ? titleStyle : styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export {
  LoginButton3rdPparty,
  LoginButton3rdPparty1,
  LoginButton3rdPparty2,
  MyButton,
  MyButton1,
};
