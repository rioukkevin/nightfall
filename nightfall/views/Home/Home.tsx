import * as React from 'react';
import {Text, Image, View} from 'react-native';
import * as AuthService from '../../services/auth';
import {Modal, Provider, Portal, Button} from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LayoutHome from "./LayoutHome";
import {AnimatedCircularProgress} from "react-native-circular-progress";

const HomeScreen = () => {

  const [visible, setVisible] = React.useState(false);
  const showModalInformation = () => setVisible(true);
  const hideModalInformation = () => setVisible(false);

  let countPointsLastMonth = AuthService.getAuthUser().countPointsLastMonth;

  return (
    <LayoutHome>
      <Provider>
        <Portal>
          <Modal visible={visible} onDismiss={hideModalInformation}>
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
          </Modal>
          <Button style={{marginTop: 30}} onPress={showModalInformation}>
            <MaterialCommunityIcons name="information-outline" onPress={showModalInformation}/>
          </Button>
        </Portal>
      </Provider>
      <View>
        <AnimatedCircularProgress
          size={90}
          width={10}
          fill={countPointsLastMonth}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {
            (countPointsLastMonth) => (
              <Text>
                {countPointsLastMonth} / 120004
              </Text>
            )
          }
        </AnimatedCircularProgress>
        <Text>{AuthService.getAuthUser().login}</Text>
        <MaterialCommunityIcons name="account"/>
      </View>
      <Image source={{uri: "../assets/logo-nightfall.png"}}/>
    </LayoutHome>
  );
};

export default HomeScreen
