import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppConfig from '../../../../branding/App_config';
import Globals from '../../../utils/Globals';

const colors = AppConfig.colors.default;

let Style = {
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: colors.textColorGrey1,
    shadowOpacity: 0.58,
    shadowRadius: 6.0,
    elevation: 24,
    zIndex: 0,
  },

  bottomTabContainer: {
    flex: 1,
    height: hp(6.5),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Globals.SAFE_AREA_INSET.bottom,
  },

  bottomTabCartOuterContainer: {
    width: hp(8.5),
    height: hp(8.5),
    bottom: hp(2),
    borderWidth: hp(4.5),
    borderRadius: hp(4.3),
    borderColor: 'transparent',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    shadowOffset: {
      width: 0,
      height: -25,
    },
    shadowColor: colors.textColorGrey1,
    shadowRadius: 10.0,

    shadowOpacity: 0.1,
    elevation: 24,
    zIndex: 0,
  },

  bottomTabCartInnerContainer: {
    width: hp(7),
    height: hp(7),
    borderRadius: hp(3.5),
    backgroundColor: colors.buttonGreenColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomTabIcon: {
    width: hp(3),
    height: hp(3),
    resizeMode: 'contain',
  },
};

export default Style;
