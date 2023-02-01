import React, {useRef, useState} from 'react';
import {Image, StatusBar, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Text} from 'react-native-elements';
import AppConfig from '../../../../branding/App_config';
import Routes from '../../../navigation/Routes';
import {StackActions} from '@react-navigation/native';
import Style from './Style';
import Globals from '../../../utils/Globals';
import AppButton from '../../../components/Application/AppButton/View';

const colors = AppConfig.colors.default;

export const Variant1Intro = props => {
  let _carouselRef = useRef();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const _renderItem = ({item, index}) => {
    return (
      <View style={Style.introItemContainer}>
        <Image source={item.headerImg} style={Style.introItemImage} />
        <Text style={Style.introItemTitle}>{item.title}</Text>
        <Text style={Style.introItemSubtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <View style={Style.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      <View style={Style.introUpperContainer}>
        <Carousel
          ref={c => {
            _carouselRef = c;
          }}
          data={Globals.intro1Items}
          renderItem={_renderItem}
          sliderWidth={wp('100%')}
          itemWidth={wp('100%')}
          onSnapToItem={index => {
            setActiveSlideIndex(index);
          }}
        />

        <Pagination
          dotsLength={Globals.intro1Items.length}
          activeDotIndex={activeSlideIndex}
          dotColor={colors.paginationDotActiveColor}
          inactiveDotColor={colors.textColorGrey1}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
          carouselRef={_carouselRef}
          dotStyle={Style.paginationDotStyle}
          inactiveDotStyle={Style.paginationInactiveDotStyle}
        />
      </View>

      <View style={Style.introLowerContainer}>
        <AppButton
          title={activeSlideIndex === 0 ? 'Get started' : 'Skip'}
          onPress={() => {
            props.navigation.dispatch(
              StackActions.replace(Routes.LOGIN_SCREEN1),
            );
          }}
        />
      </View>
    </View>
  );
};
