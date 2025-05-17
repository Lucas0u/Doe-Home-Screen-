import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const MAX_WIDTH = 440;

export default function ScreenWrapper({ children }) {
  const childrenWithFont = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.props.style) {
      return React.cloneElement(child, {
        style: [child.props.style, { fontFamily: 'Poppins-Regular' }]
      });
    }
    return child;
  });

  return (
    <View style={styles.wrapper}>
      {childrenWithFont}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: width > MAX_WIDTH ? MAX_WIDTH : '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
});
