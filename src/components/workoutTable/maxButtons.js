'use strict';

import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Image, 
    View,
    AlertIOS
} from 'react-native';
import styles from '../styles';
import utils from '../store';

const liftUpIcon = require('../../images/ic_trending_up.png');
const liftDownIcon = require('../../images/ic_trending_down.png');
const deleteIcon = require('../../images/ic_clear.png');

export default class MaxButtons extends Component {
    deleteOnClick() {
        AlertIOS.alert(
            'Are you sure you want to delete ' + this.props.lift +'?',
            null,
            [
                {text: 'No'},
                {text: 'Yes', onPress: () => this.props.onDelete(this.props.lift)}
            ]
        );   
    }

    render() {
        return (
            <View style={styles.maxUpButtonView}>
                <TouchableOpacity 
                    style={styles.maxUpButton}
                    activeOpacity={.5}
                    onPress={() => this.props.onAdd(this.props.id, this.props.max, this.props.weightUp, this.props.up)}
                >
                    <Image source={liftUpIcon}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.maxDownButton}
                    activeOpacity={.5}
                    onPress={() => this.props.onSubtract(this.props.id, this.props.max, this.props.weightUp)}
                >
                    <Image source={liftDownIcon}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.deleteButton}
                    activeOpacity={.5}
                    onPress={() => this.deleteOnClick()}
                >
                    <Image source={deleteIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}
