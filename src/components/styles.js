'use strict';

// import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    maxUpButton: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 4,
        marginBottom: 4,
        marginRight: 29,
        marginLeft: 29,
        backgroundColor: 'green'       
    },
    maxDownButton: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 4,
        marginBottom: 4,
        marginRight: 29,
        marginLeft: 29,        
    },
    deleteButton: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'red',
        marginTop: 4,
        marginBottom: 4,
        marginRight: 29,
        marginLeft: 29,
    },
    maxUpButtonView: {
        // flex: 1, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    liftColumnRows: {
        flex: 1,
        flexDirection: 'row',
    },
    columnBoldText: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 2.3
    },
    liftColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderWidth: 2,
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 2,
        paddingBottom: 6
    },
    liftColumnText: {
        margin: 2.3
    },
    workoutTableBody: {
        flexDirection: 'row',
        flex: 1,
    },
    workoutTable: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 75,
        marginRight: 20,
        marginBottom: 0,
        marginLeft: 20,
        justifyContent: 'center',
        maxWidth: '100%'
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
    navBarButton: {
        backgroundColor: 'yellow'
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