import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PopupDialog from 'react-native-popup-dialog';

export default class Login extends Component {

  render() {
        return (
            <View style={styles.container}>
                <Button
                    text="Show Dialog"
                    onPress={() => {
                    this.popupDialog.show();
                    }}
                />
                <PopupDialog
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                    <View>
                    <Text>Hello</Text>
                    </View>
                </PopupDialog>
                </View>
        );
    };
};