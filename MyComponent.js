import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const MyComponent = () => {
  const [clickedEvent, setClickedEvent] = useState(null);

  const handleTextClick = event => {
    setClickedEvent(event);
    console.log(`Text clicked: ${JSON.stringify(event)}`);
  };

  const handleButtonClick = event => {
    setClickedEvent(event);
    console.log(`Button clicked: `, event.target.value);
  };

  const textStyles = {
    color: 'blue',
    textDecorationLine: 'underline',
  };

  const buttonStyles = {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  };

  return (
    <View>
      <Text onPress={event => handleTextClick(event)} style={{...textStyles}}>
        Click me (text)
      </Text>
      <TouchableOpacity
        onPress={event => handleButtonClick(event)}
        style={{...buttonStyles}}>
        <Text style={{color: 'white'}}>Click me (button)</Text>
      </TouchableOpacity>
      {clickedEvent && (
        <View>
          <Text>Clicked event: {JSON.stringify(clickedEvent)}</Text>
        </View>
      )}
    </View>
  );
};

export default MyComponent;
