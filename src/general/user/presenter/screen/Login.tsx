import React from 'react';
import {Button, Layout, Icon, Text} from '@ui-kitten/components';
import styles from '../styles';

const arrowIcon = (props: any) => (
  <Icon {...props} name="arrow-back-outline" fill="#8F9BB3" />
);
const Login = () => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.viewTitleIconBack}>
        <Button
          style={styles.iconBack}
          appearance="ghost"
          accessoryLeft={arrowIcon}
        />
        <Text category="h1">{'Login to your \nAccount'}</Text>
      </Layout>
      <Layout style={styles.viewInput}></Layout>
      <Layout style={styles.viewButtonSign}></Layout>
      <Layout style={styles.viewOrWith}></Layout>
      <Layout style={styles.viewButtonSignWith}></Layout>
      <Layout style={styles.viewButtonText}></Layout>
    </Layout>
  );
};

export default Login;
