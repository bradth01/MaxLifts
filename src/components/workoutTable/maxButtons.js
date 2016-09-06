'use strict';

import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Image, 
    View
} from 'react-native';
import styles from '../styles';

const liftUpIcon = require('../../images/ic_trending_up.png');
const liftDownIcon =require('../../images/ic_trending_down.png')

class MaxButtons extends Component {
    render() {
        return (
            <View style={styles.maxUpButtonView}>
                <TouchableOpacity style={styles.maxUpButton}>
                    <Image source={liftUpIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.maxDownButton}>
                    <Image source={liftDownIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = MaxButtons;
