import React, {useRef} from 'react';
import { Image, View, StyleSheet, Animated, AsyncStorage } from 'react-native';
import * as AuthService from '../../services/auth';
import { Modal, Surface, FAB, Button, Text } from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LayoutHome from "./LayoutHome";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { PieChart } from 'react-native-chart-kit'
import Pie from '../../components/Pie'
import { useNavigation } from '@react-navigation/native';

// assets
import LogoImage from '../../assets/logo-nightfall.png';
import CardsImage from '../../assets/cards.png';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [open, setOpen] = React.useState(false);

  const fadeAnimInfo = useRef(new Animated.Value(100)).current;

  const goRanking = () =>  {
    navigation.navigate('Home', { screen: 'Scores' });
  }

  const fadeInInfo = () => {
    Animated.timing(fadeAnimInfo, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fadeOutInfo = () => {
    Animated.timing(fadeAnimInfo, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  const fadeAnimAccount = useRef(new Animated.Value(100)).current;

  const fadeInAccount = () => {
    Animated.timing(fadeAnimAccount, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fadeOutAccount = () => {
    Animated.timing(fadeAnimAccount, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  let [countPointsLastMonth, setCountPointsLastMonth] = React.useState(0);
  let [countPointsLastYear, setCountPointsLastYear] = React.useState(0);
  let [firstname, setFirstname] = React.useState('');

  React.useEffect( () => {
    loadUser();
  });

  const loadUser = async () => {
    try {
      const user : any = await AuthService.getAuthUser()

      setFirstname(user.firstname)
      setCountPointsLastMonth(user.countPointsLastMonth)
      setCountPointsLastYear(user.countPointsLastYear)

    } catch (err) {
      console.log(err);
    }

    {
      const userLogin : any = await AuthService.loginUser("admin@admin.fr", "Not24get")
      const bearerToken = userLogin.token;
      // On stocker et utiliser le bearer token
      await AsyncStorage.setItem('BEARER_TOKEN', bearerToken)
    }
    
    
  }

  const onStateChange = (state: { open: boolean}) => {
    setOpen(state.open)
  }

  return (
    <LayoutHome>
      <View style={styles.container}>
        <Animated.View style={[styles.overlayInfo,{ top: fadeAnimInfo.interpolate({
          inputRange: [0,100],
          outputRange: ['0%', '100%']
        }), position: 'absolute' }]}>
          <Text>UTILISATION</Text>
          <Text>Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii,
          considerans
          incitationem eius ad multorum augeri discrimina, non maturitate vel consiliis mitigabat, ut aliquotiens
          celsae potestates iras principum molliverunt, sed adversando iurgandoque cum parum congrueret, eum ad
          rabiem
          potius evibrabat, Augustum actus eius exaggerando creberrime docens, idque, incertum qua mente, ne
          lateret
          adfectans. quibus mox Caesar acrius efferatus, velut contumaciae quoddam vexillum altius erigens, sine
          respectu salutis alienae vel suae ad vertenda opposita instar rapidi fluminis irrevocabili impetu
              ferebatur.</Text>
          <FAB icon="close" onPress={fadeOutInfo} style={styles.overlayClose} />
        </Animated.View>
        <Animated.View style={[styles.overlayAccount,{ top: fadeAnimAccount.interpolate({
          inputRange: [0,100],
          outputRange: ['0%', '100%']
        }), position: 'absolute' }]}>
          <View style={styles.container}>
            <Surface style={styles.bandeau}>
              <Text style={{textTransform: 'uppercase', fontWeight: '700'}}>Acheter un autre jeu</Text>
              <Image style={styles.cards} source={CardsImage} />
            </Surface>
            <Text style={styles.title}>{firstname}</Text>
            <Surface style={styles.chartAccount}>
              <Pie style={{}} value={countPointsLastYear ? countPointsLastYear : 0} max={12000} text="Annuel"/>
              <Pie style={{}} value={countPointsLastMonth ? countPointsLastMonth : 0} max={1000} text="Mensuel"/>
            </Surface>
          </View>
          <FAB icon="close" onPress={fadeOutAccount} style={styles.overlayClose} />
        </Animated.View>
        <Text style={styles.title}>{firstname}</Text>
        <Pie style={styles.chart} value={countPointsLastMonth ? countPointsLastMonth : 0} max={1000} text="Mensuel"/>
        <Image style={styles.logo} source={LogoImage} />
        <FAB.Group
          fabStyle={styles.groupBtnAction}  
          visible={true}
          theme={{colors:{text:'#000000'}}}
          style={styles.groupBtn}
          open={open}
          icon={open ? 'close' : 'information-outline'}
          actions={[
            {
              icon: 'account',
              label: 'Mon compte',
              onPress: fadeInAccount,
            },
            {
              icon: 'information-outline',
              label: 'Informations',
              onPress: fadeInInfo,
            },
            {
              icon: 'podium-gold',
              label: 'Classement',
              onPress: goRanking,
            },
          ]}
          onStateChange={onStateChange}
        />
      </View>
    </LayoutHome>
  );
};

const styles = StyleSheet.create({
  groupBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
  groupBtnAction:{
    zIndex: 0,
  },
  chart: {
    marginTop: 40
  },
  logo:{
    position: 'absolute',
    bottom: 60,
    left: '50%',
    marginLeft: -80,
    width: 160,
    height: 80,
    zIndex: 10
  },
  title:{
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 140,
    marginBottom: 40,
  },
  container: {
    width: '100%',
    height: '100%'
  },
  overlayClose: {
    position: 'absolute',
    bottom: 10,
    zIndex: 60
  },
  overlayInfo:{
    height: '100%',
    position: 'absolute',
    right: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 50
  },
  overlayAccount:{
    height: '100%',
    position: 'absolute',
    right: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,1)',
    zIndex: 50
  },
  chartAccount:{
    position: 'absolute',
    top: 300,
    left: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  bandeau:{
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    height: 55,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fea500'
  },
  cards: {
    width: 100,
    height: 100
  }
});

export default HomeScreen
