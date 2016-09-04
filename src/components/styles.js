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
    addLiftButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
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
    workoutTableHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    workoutTableHeaderButton: {
        position: 'absolute',
        right: 13,
        top: 11,
        width: 80
    },
    workoutTableHeaderText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    workoutTableBody: {
        flexDirection: 'row'
    },
    workoutTable: {
        marginTop: 25,
        marginRight: 5,
        marginBottom: 25,
        marginLeft: 5,
        justifyContent: 'space-between'
    },
});

module.exports = styles;