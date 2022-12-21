import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {ThemeContext} from '../../../../theme/theme-context';
import styles from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = () => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <Layout style={styles.container}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
        <AntDesign name="arrowleft" />
        <Text>TEXT</Text>
      </Layout>
    </Layout>
  );
};
export default Login;
