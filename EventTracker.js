import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';

const ClickCapture = ({ children }) => {
  const [clicks, setClicks] = useState([]);

  const handleSingleTap = (event) => {
    const { timestamp, locationX, locationY } = event.nativeEvent;
    const newClicks = [...clicks, { type: 'singleTap', timestamp, locationX, locationY }];
    setClicks(newClicks);
  };

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const direction = contentOffset.y > 0 ? 'down' : 'up';
    const position = contentOffset.y;
    const newClicks = [...clicks, { type: 'scroll', direction, position }];
    setClicks(newClicks);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSingleTap}>
        {children}
      </TouchableOpacity>
      <ScrollView onScroll={handleScroll}>
        {children}
      </ScrollView>
    </View>
  );
};

export default ClickCapture;
