import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppConfig from '../../../../branding/App_config';

const colors = AppConfig.colors.default;
const Fonts = AppConfig.fonts.default;
const Typography = AppConfig.typography.default;

let Styles = {
  upperWhiteContainer: {
    width: '100%',
    height: hp('20'),
    backgroundColor: 'white',
  },

  container: {
    width: '100%',
    height: hp('80'),
    backgroundColor: colors.textColorGrey2,
    alignItems: 'center',
  },

  profileImageContainer: {
    position: 'absolute',
    top: hp('14'),
    alignSelf: 'center',
  },

  profileImage: {
    width: hp('14'),
    height: hp('14'),
    borderRadius: hp('7'),
    resizeMode: 'cover',
  },

  profileImageAccessoryViewContainer: {
    width: hp('5'),
    height: hp('5'),
    backgroundColor: colors.primaryGreenColor,
    borderRadius: hp('2.5'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp(9.5),
    left: hp(9.5),
  },

  profileImageAccessoryViewImage: {
    width: hp('2.5'),
    height: hp('2.5'),
    resizeMode: 'contain',
    tintColor: 'white',
  },

  infoContainer: {
    alignItems: 'center',
    marginTop: hp('9'),
  },

  nameText: {
    fontFamily: Fonts.RUBIK_MEDIUM,
    fontSize: Typography.P1,
    color: colors.textColorBlack1,
  },

  emailText: {
    fontFamily: Fonts.RUBIK_REGULAR,
    fontSize: Typography.P5,
    color: colors.textColorGrey1,
  },

  cardListContainer: {
    width: '100%',
    marginTop: hp(2),
  },

  cardListingItemContainer: {
    width: wp(27),
    height: hp('14'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: hp(1),
    margin: hp(1),
  },

  cardListingItemIconContainer: {
    width: hp('6'),
    height: hp('6'),
    backgroundColor: colors.secondaryGreenColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('3'),
  },

  cardListingItemIcon: {
    width: hp(2),
    height: hp(2),
    tintColor: colors.primaryGreenColor,
    resizeMode: 'contain',
  },

  cardListingItemText: {
    marginTop: hp('2'),
    fontFamily: Fonts.RUBIK_REGULAR,
    fontSize: Typography.P5,
    color: colors.textColorGrey1,
  },

  listingContainer: {
    width: '100%',
    paddingHorizontal: wp(5),
    marginVertical: hp(4),
  },

  profileListingItemContainer: {
    flexDirection: 'row',
    paddingVertical: hp(1),
  },

  profileListingItemLeftImage: {
    width: hp(2.2),
    height: hp(2.2),
    tintColor: colors.primaryGreenColor,
    marginRight: wp(5),
    resizeMode: 'contain',
  },

  profileListingItemText: {
    fontFamily: Fonts.RUBIK_REGULAR,
    fontSize: Typography.P3,
    color: colors.textColorGrey1,
  },

  profileListingItemRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
};

export default Styles;
