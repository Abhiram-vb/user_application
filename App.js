import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, Button, Keyboard} from 'react-native';
// import Apps from 'awesomeproject_abhiram_testing/App';
// import Interceptor from 'zipy_sdk_abhiram_testing/src/modules/Interceptor';
import Zipy from 'zipy_sdk_abhiram_testing/Zipy';
import {
  logException,
  logMessage,
  FloatingButton,
} from 'zipy_sdk_abhiram_testing/Zipy';
import GeastureCapture from './GeastureDetectorTesting';
const App = () => {
  Zipy('123');
  // Interceptor((start = new Date().getTime()), true);
  const [data, setData] = useState('Your api call data comes here');
  const [message, setMessage] = useState('');
  // console.log(abhiram);
  const getCollectionss = async () => {
    // const response = await fetch('http://jsonplaceholder.typicode.com/posts', {
    //   method: 'GET',
    //   headers: new Headers({
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
    //     'Content-Type': 'application/json',
    //   }),
    // });
    axios
      .get('https://apis.ccbp.in/videos/30b642bd-7591-49f4-ac30-5c538f975b15', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('Response:', response.data);
        setData(JSON.stringify(response.data));
        // Do something with the response data
      })
      .catch(error => {
        console.log('Error:', error);
        // Handle the error
      });
  };
  const onChangeTextMessage = text => {
    setMessage(text);
  };
  const sendLogMessage = () => {
    console.log('this button is used to send log message');
    Keyboard.dismiss();
    logMessage(message);
    setMessage('');
  };
  const sendException = () => {
    try {
      console.log(handledException);
    } catch (error) {
      logException('exception raised when sendException clicked', error);
    }
  };
  const raiseUnHandledException = () => {
    console.log(unHandledException);
  };
  useEffect(() => {
    // getCollectionss();
  }, []);

  return (
    <GeastureCapture
      renderElement={
        <View style={{flex: 1}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'red',
              fontWeight: '900',
              fontSize: 20,
            }}>
            Hello Abhiram Welcome to this app
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              padding: 2,
            }}>
            <Text style={{color: 'blue', fontWeight: 600}}>{data}</Text>
            <TextInput
              onChangeText={onChangeTextMessage}
              style={{borderWidth: 2, borderColor: 'gray', margin: 5}}
              value={message}
              placeholder="Enter some text to log"
            />
            <View style={{display: 'flex', flexWrap: 'wrap', padding: 2}}>
              <Button
                onPress={sendLogMessage}
                title="Click to log the above message"
                color="#841584"
                style={{margin: 5}}
              />
              <Button
                onPress={sendException}
                title="Click to raise Handled Exception"
                color="orange"
              />
              <Button
                onPress={raiseUnHandledException}
                title="Click to raise UN-Handled Exception"
                color="red"
              />
              <Button
                onPress={getCollectionss}
                title="Click to call an API"
                color="green"
              />
            </View>
            <FloatingButton
              title="this is floating button"
              message="you clicked me"
            />
          </View>
        </View>
      }></GeastureCapture>
  );
};

export default App;
