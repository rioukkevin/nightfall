import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class SocialView extends React.Component<any, any> {

    render = () => {
        return (
            <div>
                <View style={styles.view}>
                    <Text>Home Screen 1</Text>
                </View>
            </div>
        );
    };
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default SocialView