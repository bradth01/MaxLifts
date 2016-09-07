'use strict';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    maxUpButton: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        backgroundColor: 'green'        
    },
    maxDownButton: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        backgroundColor: 'red'
    },
    maxUpButtonView: { 
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    liftColumnRows: {
        flex: 1,
        flexDirection: 'row',
    },
    categoryColumn: {
        flex: .14,
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: 'grey',        
    },
    columnBoldText: {
        fontWeight: 'bold'
    },
    liftColumn: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: 'grey',
        paddingBottom: 2
    },
    workoutTableBody: {
        flexDirection: 'row'
    },
    workoutTable: {
        marginTop: 70,
        marginRight: 5,
        marginBottom: 25,
        marginLeft: 5,
        justifyContent: 'space-between'
    },
    navBar: {
        flex: 1,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'white',
    },
    navBarTitleText: {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 6
    },
    navBarText: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 14,
        margin: 7
    }, 
    addLiftBody: {
        marginTop: 70,
        marginRight: 5,
        marginBottom: 25,
        marginLeft: 5,
        alignItems: 'center'
    },
    addLiftRow: {
        alignItems: 'center',
        padding: 25
    },
    addLiftInput: {
        height: 40,
        width: 250,
        borderColor: 'grey',
        borderWidth: 1,
        textAlign: 'center'
    },
    addLiftText: {
        fontSize: 40
    }
});

module.exports = styles;