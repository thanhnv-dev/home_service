import {View} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../style';
import {useAppDispatch} from '~/redux/hooks';
import {getService} from '~/redux/service.slide';
import {SvgUri} from 'react-native-svg';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getService());
  });
  return (
    <View style={styles.container}>
      <SvgUri
        width="10%"
        height="10%"
        uri="http://localhost:3000/icons/cleaning.svg"
      />
    </View>
  );
};

export default Home;
