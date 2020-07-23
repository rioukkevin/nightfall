import * as React from 'react';
import {Text, Image} from 'react-native';
import * as AuthService from '../../services/auth';
import {Modal} from 'react-native-paper';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LayoutHome from "./LayoutHome";

const HomeScreen = () => {

  const [visible, setVisible] = React.useState(false);
  const showModalInformation = () => setVisible(true);
  const hideModalInformation = () => setVisible(false);

  return (
    <LayoutHome>
      <React.Fragment>
        <Modal visible={visible} onDismiss={hideModalInformation}>
          <Text>UTILISATION</Text>
          <Text>Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans
            incitationem eius ad multorum augeri discrimina, non maturitate vel consiliis mitigabat, ut aliquotiens
            celsae potestates iras principum molliverunt, sed adversando iurgandoque cum parum congrueret, eum ad rabiem
            potius evibrabat, Augustum actus eius exaggerando creberrime docens, idque, incertum qua mente, ne lateret
            adfectans. quibus mox Caesar acrius efferatus, velut contumaciae quoddam vexillum altius erigens, sine
            respectu salutis alienae vel suae ad vertenda opposita instar rapidi fluminis irrevocabili impetu
            ferebatur.</Text>
        </Modal>
        <MaterialCommunityIcons name="information-outline" onPress={showModalInformation}/>
        <Text>{AuthService.getAuthUser().login}</Text>
      </React.Fragment>
      <React.Fragment>
        <MaterialCommunityIcons name="account"/>
        <Image source={{uri: "../assets/logo-nightfall.png"}}/>
      </React.Fragment>
    </LayoutHome>
  );
};

export default HomeScreen
