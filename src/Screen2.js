import React, { Component } from 'react';
import {
    StyleSheet, TouchableHighlight,
    View, Text, Button, Modal,
    Image,
} from 'react-native';

class Screen2 extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>2</Text>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View styles={styles.modal}>

                        <View style={styles.modal_content}>
                            <TouchableHighlight
                                onPress={() =>
                                    this.setModalVisible(!this.state.modalVisible)}>
                                <Image source={require('./img/wealth-icon.png')} />
                            </TouchableHighlight>
                        </View>

                    </View>
                </Modal>

                <Button title="goto3" onPress={() => this.props.navigation.navigate('Screen3')} />

                <Button title="modal"
                    onPress={() => this.setModalVisible(!this.state.modalVisible)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    content_main: {
        margin: 5,
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_content: {
        width: 200,
        height: 200,
    }
});


export default Screen2;