import { Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AppDimensions = {
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    topParentMarginInPercent:'6%',
    widthPercentage: wp,
    heightPercentage:hp,
    homePageSideMargin:20,
    horizontalMargin:wp('5'),
    horizontalMarginDP:16,

  
};

export default AppDimensions;