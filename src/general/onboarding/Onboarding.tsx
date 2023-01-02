import {
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {onboardingData} from '~/constants/Const';
import {MyButton} from '~/general/widgets';

const Onboarding = ({navigation}: {navigation: any}) => {
  const {width} = useWindowDimensions();

  const lengthData = onboardingData.length - 1;

  const scrollX = useRef(new Animated.Value(0)).current;

  const pageRef = useRef<any>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any}) => {
      setCurrentIndex(viewableItems[0].index);
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const renderItem = ({
    item,
  }: {
    item: {id: number; title: string; image: any};
  }) => {
    return (
      <View style={(styles.container, {width})}>
        <View style={[styles.container, styles.center]}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={[styles.viewContent, styles.center]}>
          <Text style={styles.content}>{item.title}</Text>
        </View>
      </View>
    );
  };

  const renderPaginator = (_: any, index: number) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    const dotWidth = scrollX.interpolate({
      inputRange,
      outputRange: [10, 25, 10],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.2, 1, 0.2],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={[styles.dot, {width: dotWidth, opacity}]}
        key={index.toString()}
      />
    );
  };

  const nextPage = () => {
    if (currentIndex < lengthData) {
      return pageRef?.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.replace('LetIsInStack', {screen: 'LetIsIn'});
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewList}>
        <FlatList
          renderItem={renderItem}
          data={onboardingData}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.image}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          ref={pageRef}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
        />
      </View>
      <View style={[styles.viewPaginator, styles.center]}>
        {onboardingData?.map(renderPaginator)}
      </View>
      <View style={styles.viewButton}>
        <MyButton
          onPress={() => nextPage()}
          title={currentIndex < lengthData ? 'Next' : 'Get Started'}
        />
      </View>
    </View>
  );
};

export default Onboarding;
