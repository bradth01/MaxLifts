'use strict';

import React, { Component } from 'react';
import {
    ActivityIndicator
} from 'react-native';

export default class Loading extends Component {
    render() {
        return (
            <ActivityIndicator
                animating={true}
                style={{
                    marginTop: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 8,
                    height: 80
                }}
                size="large"
            />
        );
    } 
}