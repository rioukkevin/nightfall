import * as React from 'react';
import {StyleSheet, View, Text, Share} from 'react-native';
// @ts-ignore
import {ShareDialog, ShareLinkContent} from 'react-native-fbsdk';
import * as Facebook from 'expo-facebook';

// @ts-ignore
import {getFacebookDatas, getTwitterDatas, getInstagramDatas} from "../services/ShareService";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from "react-native-paper";

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
        /*
        const shareLinkContent: ShareLinkContent = {
            contentType: 'link',
            contentUrl: "https://facebook.com",
            contentDescription: 'Facebook sharing is easy!',
        };

        ShareDialog.setMode('webview');


        ShareDialog.canShow(shareLinkContent)
            .then(
                function(canShow: any) {
                    console.log("canShow");
                    console.log(canShow);
                    if (canShow) {
                        return ShareDialog.show(shareLinkContent);
                    }
                }
            )
            .then(
                function(result: any) {
                    if (result.isCancelled) {
                        alert('Share operation was cancelled');
                    } else {
                        alert('Share was successful with postId: '
                            + result.postId);
                    }
                },
                function(error: any) {
                    alert('Share failed with error: ' + error.message);
                }
            );

         */
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

                <Surface onTouchEnd={this.shareFacebook} style={styles.item}>
                    <Surface style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="facebook" />
                    </Surface>
                    {infoFacebook}
                </Surface>

                <Surface onTouchEnd={this.shareTwitter} style={styles.item}>
                    <Surface style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="twitter"/>
                    </Surface>
                    {infoTwitter}

                </Surface>
                <Surface onTouchEnd={this.shareInstagram} style={styles.item}>
                    <Surface style={styles.icon}>
                        <MaterialCommunityIcons size={50} name="instagram"/>
                    </Surface>
                    {infoInstagram}
                </Surface>

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
        maxWidth: "90%",
        fontSize: 35,
        fontWeight: "bold",
        marginTop: "20%",
        marginBottom: "10%",
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
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
        backgroundColor: "transparent",
        shadowOpacity: 0,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    }
});

export default ShareScreen