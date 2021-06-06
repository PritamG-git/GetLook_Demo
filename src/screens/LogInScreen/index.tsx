import Button from 'components/button';
import IconElement from 'components/icon';
import InputText from 'components/inputText';
import React from 'react';
import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import {appFonts, appImages, appTheme} from 'theme';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={appImages.Img7}
        style={{
          width: appTheme.SIZES.width,
          height: appTheme.SIZES.height,
          justifyContent: 'space-between',
        }}>
        <Image source={appImages.logo2} style={{margin: 10}} />
        <View
          style={{
            padding: 30,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <Text
            style={{
              color: appTheme.COLORS.white,
              alignSelf: 'center',
              fontFamily: appFonts.Regular,
            }}>
            LOGIN / SIGNUP USING
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <View style={{width: '47%'}}>
              <Button
                label="Facebook"
                onPress={() => navigation.navigate('HomeScreen')}
                btnStyle={{backgroundColor: '#3B5998'}}
                icon={
                  <IconElement
                    iconName="facebook"
                    color={appTheme.COLORS.white}
                  />
                }
              />
            </View>
            <View style={{width: '47%'}}>
              <Button
                label="Google"
                onPress={() => navigation.navigate('HomeScreen')}
                btnStyle={{backgroundColor: '#D44638'}}
                icon={
                  <IconElement
                    iconName="google"
                    color={appTheme.COLORS.white}
                  />
                }
              />
            </View>
          </View>

          <InputText
            placeholderText="Enter Mobile No."
            placeholderColor={appTheme.COLORS.black}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
