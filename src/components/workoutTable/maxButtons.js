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
    componentDidMount() {
        console.log('2nd child', this.props);
    }

    // this.setState isn't a function?!
    handleChange(liftName) {
        utils.removeFromDb(liftName)
        .then(() => this.props.onChangeData())  
        .catch(alert);
    }

    render() {
        return (
            <View style={styles.maxUpButtonView}>
                <TouchableOpacity 
                    style={styles.maxUpButton}
                    onPress={() => console.log(this.props.lift)}
                >
                    <Image source={liftUpIcon}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.maxDownButton}
                    onPress={() => console.log(this.props.lift)}
                >
                    <Image source={liftDownIcon}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.deleteButton}
                    onPress={() => this.handleChange(this.props.lift)}
                >
                    <Image source={deleteIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}
