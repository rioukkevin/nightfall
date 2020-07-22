import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// @ts-ignore
import {getFacebookDatas, getTwitterDatas, getInstagramDatas} from "../services/ShareService";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class ShareScreen extends React.Component<any, any> {

    constructor({props}: { props: any }) {
        super(props);

        this.state = {
            data: {
                facebook: getFacebookDatas(),
                twitter: getTwitterDatas(),
                instagram: getInstagramDatas(),
            }
        }

    }

    shareFacebook = () => {
        console.log("shareFacebook");

    };
    shareTwitter = () => {
        console.log("shareTwitter");

    };
    shareInstagram = () => {
        console.log("shareInstagram");

    };

    render() {

        let infoFacebook = <Text>{this.state.data.facebook.statusCode == 0 ? "Déconnecté" : "Connecté"}</Text>;
        let infoTwitter = <Text>{this.state.data.twitter.statusCode == 0 ? "Déconnecté" : "Connecté"}</Text>;
        let infoInstagram = <Text>{this.state.data.instagram.statusCode == 0 ? "Déconnecté" : "Connecté"}</Text>;


        return (

            <View style={styles.view}>
                <Text style={styles.title}>MONPSEUDO</Text>
                <Text style={styles.subTitle}>Partage ton expérience sur les réseaux</Text>

                <View onTouchEnd={this.shareFacebook} style={styles.item}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="facebook" />
                    </View>
                    {infoFacebook}
                </View>

                <View onTouchEnd={this.shareTwitter} style={styles.item}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="twitter"/>
                    </View>
                    {infoTwitter}

                </View>
                <View onTouchEnd={this.shareInstagram} style={styles.item}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="instagram"/>
                    </View>
                    {infoInstagram}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: "20%",
        marginBottom: "10%",
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        // marginTop: "",
        marginBottom: "2%",
        maxWidth: "75%",
        textAlign: "center",
    },
    icon: {
        width: 75,
        minHeight: 75,
        borderRadius: 100,
        backgroundColor: "white",
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
});

export default ShareScreen