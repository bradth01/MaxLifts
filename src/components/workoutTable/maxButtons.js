'use strict';

import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Image, 
    View
} from 'react-native';
import styles from '../styles';

class MaxButtons extends Component {
    render() {
        return (
            <View style={styles.maxUpButtonView}>
                <TouchableOpacity style={styles.maxUpButton}>
                    <Image source={require('../../images/ic_trending_up.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.maxDownButton}>
                    <Image source={require('../../images/ic_trending_down.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = MaxButtons;
