import * as React from 'react';
import {StyleSheet, View, Share, ShareContent, Linking, ImageBackground} from 'react-native';
import { Text } from 'react-native-paper';

// @ts-ignore
import BackgroubdImageImage from '../assets/background-image-dark.png';

// @ts-ignore
import {getFacebookDatas, getTwitterDatas, getInstagramDatas} from "../services/ShareService";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from "react-native-paper";

class ShareScreen extends React.Component<any, any> {

    text: string = "Nightfall c'est trop cool !";

    app_id: string ="1216319518700295";

    url: string = "https://www.nightfallcards.fr/";

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

    onShare = async (data: ShareContent) => {
        try {
            const result = await Share.share(data);
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // console.log("shareFacebook");

                    // shared with activity type of result.activityType
                } else {
                    // console.log("shareFacebook");

                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    shareFacebook = () => {
        Linking.openURL(`https://www.facebook.com/dialog/share?app_id=${this.app_id}&display=popup&quote=${this.text}&href=${this.url}`
        ).then(r => {
            console.log("share Facebook status : " + r.status);
        })
    };

    shareTwitter = () => {
        Linking.openURL(`https://www.twitter.com/intent/tweet?text=${this.text}&via=${this.url}`
        ).then(r => {
            console.log("share Twitter status : " + r.status);
        });
    };

    shareInstagram = () => {
        console.log("shareInstagram");
        // TODO Partage de photo sur instagram ?!!! quel rapport avec Nightfall

        this.onShare({
            message: this.text + this.url,
            url: this.url,
        }).then(r => {
            console.log(JSON.stringify(r));
            console.log("Shared");
        });

    };

    render() {

        return (

            <ImageBackground source={BackgroubdImageImage} style={styles.image}>

            <View style={styles.view}>
                <Text style={styles.title}>MONPSEUDO</Text>
                <Text style={styles.subTitle}>Partage ton expérience sur les réseaux</Text>

                <Surface onTouchEnd={this.shareFacebook} style={styles.item}>
                    <Surface style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="facebook" />
                    </Surface>
                    <Text>Facebook</Text>
                </Surface>

                <Surface onTouchEnd={this.shareTwitter} style={styles.item}>
                    <Surface style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="twitter"/>
                    </Surface>
                    <Text>Twitter</Text>

                </Surface>
                <Surface onTouchEnd={this.shareInstagram} style={styles.item}>
                    <Surface style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="share-variant"/>
                    </Surface>
                    <Text>Autres</Text>

                </Surface>

            </View>
            </ImageBackground>
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
        maxWidth: "90%",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: "20%",
        marginBottom: "10%",
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "5%",
        maxWidth: "75%",
        textAlign: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
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
        backgroundColor: "transparent",
        shadowOpacity: 0,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
});

export default ShareScreen