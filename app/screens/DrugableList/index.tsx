import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  PanResponder,
  Animated,
  LayoutAnimation,
} from 'react-native';

import {Text, Header} from '../../components';
import styles from './drugableListStyles';
import {DrugableListScreenProps} from './drugableListProps';

const firstArr = ['first', 'second', 'third'];
const secondArr = ['four', 'five', 'six'];
export const DrugableListScreen: React.FC<DrugableListScreenProps> = ({
  navigation,
}) => {
  const [first, setFirst] = useState<string[]>(firstArr);
  const [second, setSecond] = useState<string[]>(secondArr);

  const onBackPress = () => navigation.goBack();

  const RenderItem = ({item}: {item: string}) => {
    let x = 0;

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: e => {
          e.stopPropagation();
          e.target.measureInWindow((pageX: number) => (x = pageX));
        },
        onPanResponderTerminate: () => false,
        onPanResponderTerminationRequest: () => false,
        onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (evt, gestureState) => {
          if (x < 100 && gestureState.dx > 100) {
            LayoutAnimation.linear();
            setFirst(first.filter(el => el !== item));
            setSecond([...second, item]);
          } else if (x > 190 && gestureState.dx < -100) {
            LayoutAnimation.easeInEaseOut();
            setSecond(second.filter(el => el !== item));
            setFirst([...first, item]);
          } else {
            Animated.timing(pan, {
              toValue: {x: 0, y: 0},
              useNativeDriver: false,
              duration: 200,
            }).start();
          }
        },
      }),
    ).current;

    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.item,
          {
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          },
        ]}>
        <Text style={styles.text}>{item}</Text>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.root}>
      <Header
        onBackPress={onBackPress}
        backLabel="Back"
        style={styles.header}
        isWhite={true}
      />

      <View style={styles.main}>
        <FlatList
          data={first}
          keyExtractor={item => item}
          renderItem={({item}) => <RenderItem item={item} />}
          contentContainerStyle={styles.container}
          style={styles.overflow}
        />
        <FlatList
          data={second}
          keyExtractor={item => item}
          renderItem={({item}) => <RenderItem item={item} />}
          contentContainerStyle={styles.container}
          style={styles.overflow}
        />
      </View>
    </SafeAreaView>
  );
};
