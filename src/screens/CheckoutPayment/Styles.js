import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../branding/App_config';
import Typography from '../../../branding/carter/styles/Typography';
import fonts from '../../../branding/carter/assets/Fonts';

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const styles = AppConfig.styling.default;

let Styles = {
  paymentMethodMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  paymentMethodOuterContainer: {
    flex: 0.3,
    height: hp('10'),
  },

  paymentMethodInnerContainer: {
    flex: 0.32,
    height: hp('12'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  foodItemContainer: {
    height: hp('8'),

    backgroundColor: 'white',

    paddingLeft: wp('5'),

    marginBottom: hp('1'),
  },
  foodItemImage: {
    width: hp('10'),
    height: hp('10'),
    marginRight: wp('2'),
  },
  nameTitle: {
    fontSize: Typography.P3,
    fontFamily: Fonts.RUBIK_MEDIUM,
    color: colors.textColorBlack1,
  },
  addressTitle: {
    fontSize: Typography.P5,
    fontFamily: Fonts.RUBIK_REGULAR,
    marginVertical: hp('0.5'),
    color: colors.textColorGrey1,
  },
  priceTitle: {
    flex: 1,
    fontSize: Typography.P2,
    fontFamily: Fonts.RUBIK_REGULAR,
    textAlign: 'right',
    alignSelf: 'center',
    color: colors.primaryGreenColor,
  },
  itemLabel: {
    fontSize: Typography.P4,
    fontFamily: Fonts.RUBIK_LIGHT,
  },
  phoneTitle: {
    fontSize: Typography.P3,
    fontFamily: Fonts.RUBIK_REGULAR,
    marginRight: wp('5'),
  },
  weightText: {
    color: '#697281',
    fontFamily: Fonts.RUBIK_LIGHT,
    fontSize: Typography.P5,
  },
  profileItemCircle: {
    width: hp('4'),
    height: hp('4'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('2'),
    backgroundColor: colors.textColorGrey2,
  },

  orderProgressCircle: {
    width: hp('2'),
    height: hp('2'),
    borderRadius: hp('2') / 2,
  },

  orderProgressLine: {
    width: 2,
    height: hp('3'),
  },

  orderProgressTitleContainer: {
    flexDirection: 'row',
    marginTop: hp('2.7'),
  },

  orderProgressTitle: {
    flex: 0.5,
    fontFamily: fonts.RUBIK_MEDIUM,
    fontSize: Typography.P4,
  },

  orderProgressSubTitle: {
    flex: 0.5,
    textAlign: 'right',
    fontFamily: fonts.RUBIK_REGULAR,
    fontSize: Typography.P5,
  },
};

export default Styles;
