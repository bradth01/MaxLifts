'use strict';

import React, { Component } from 'react';
import {
    TouchableOpacity, 
    Image, 
    View
} from 'react-native';
import styles from '../styles';
import utils from '../store';

const liftUpIcon = require('../../images/ic_trending_up.png');
const liftDownIcon = require('../../images/ic_trending_down.png');
const deleteIcon = require('../../images/ic_clear.png');

export default class MaxButtons extends Component {

    render() {
        return (
            <View style={styles.maxUpButtonView}>
                <TouchableOpacity 
                    style={styles.maxUpButton}
                    onPress={() => this.props.onAdd(this.props.id, this.props.max, this.props.weightUp)}
                >
                    <Image source={liftUpIcon}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.maxDownButton}
                    onPress={() => this.props.onSubtract(this.props.id, this.props.max, this.props.weightUp)}
                >
                    <Image source={liftDownIcon}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => this.props.onDelete(this.props.lift)}
                >
                    <Image source={deleteIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}
