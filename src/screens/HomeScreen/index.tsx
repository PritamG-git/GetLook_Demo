import InputText from 'components/inputText';
import PageHeader from 'components/pageheader';
import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {appImages, appTheme} from 'theme';
import styles from './styles';

const CategoryData = [
  {
    id: 1,
    image: appImages.Img1,
    label: 'HAIR',
  },
  {
    id: 2,
    image: appImages.Img3,
    label: 'FACE',
  },
  {
    id: 3,
    image: appImages.Img4,
    label: 'PEDI / MANI',
  },
];

const BannerData = [
  {
    id: 1,
    image: appImages.Img5,
  },
  {
    id: 2,
    image: appImages.Img6,
  },
];

const HomeScreen = () => {
  function renderCatData() {
    const renderItem = ({item}) => (
      <View style={{alignSelf: 'center', margin: 0}}>
        <Image source={item.image} />
        <View style={styles.Section1}>
          <Text style={styles.CustomText2}>{item.label}</Text>
        </View>
      </View>
    );

    return (
      <FlatList
        data={CategoryData}
        keyExtractor={item => `${item.id}`}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    );
  }

  function renderBannerData() {
    const renderItem = ({item}) => (
      <Image source={item.image} style={{margin: 10}} />
    );

    return (
      <View style={{top: -30}}>
        <FlatList
          data={BannerData}
          keyExtractor={item => `${item.id}`}
          horizontal
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
  return (
    <ScrollView>
      <PageHeader />
      <InputText
        leftIcon="magnify"
        leftColor={appTheme.COLORS.grey}
        inputFieldStyle={{marginHorizontal: 10}}
        placeholderText="Search for salon services etc"
      />
      <Image source={appImages.Img2} />

      <View style={styles.Section}>
        <Text style={styles.CustomText1}>Shop by Category</Text>
      </View>

      {renderCatData()}

      <Image
        source={appImages.Banner}
        style={{
          alignSelf: 'center',
          top: -25,
        }}
      />

      <View
        style={{
          ...styles.Section,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 5,
          top: -30,
        }}>
        <Text></Text>
        <Text style={styles.CustomText1}>Packages</Text>
        <Text style={styles.CustomText2}>View All</Text>
      </View>
      {renderBannerData()}
    </ScrollView>
  );
};

export default HomeScreen;
