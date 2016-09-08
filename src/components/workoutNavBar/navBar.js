'use strict';

import React, { Component } from 'react';
import { 
    Navigator, 
    Text,
    TouchableHighlight,
    View 
} from 'react-native';
import AddLiftScene from '../addLift/addLiftScene';
import WorkoutTable from '../workoutTable/workoutTable';
import styles from '../styles';

export default class NavBar extends Component {
    render () {
        const routes = [
            {title: 'Lifts', component: WorkoutTable, index: 0},
            {title: 'Add Lift', component: AddLiftScene, index: 1},
        ];

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route, navigator) => {
                    return <route.component title={route.title} />   
                }}
                configureScene={(route, routeStack) => 
                    Navigator.SceneConfigs.HorizontalSwipeJump
                }
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navBar}
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) => { 
                                if (route.index === 0) {
                                    return null;
                                } else {
                                    return (
                                        <TouchableHighlight
                                            onPress={() => navigator.pop()}>
                                            <Text style={styles.navBarText}>Cancel</Text>
                                        </TouchableHighlight>
                                    );
                                }; 
                            },
                            RightButton: (route, navigator, index, navState) => {
                                if (route.index === 0) {
                                    return (
                                        <TouchableHighlight 
                                            style={styles.navBarButton}
                                            onPress={() => navigator.push(routes[route.index + 1])}>
                                            <Text style={styles.navBarText}>Add Lift</Text>
                                        </TouchableHighlight>
                                    );
                                } else {
                                    return null;
                                    // return (
                                    //     <TouchableHighlight 
                                    //         onPress={() => console.log(route.props)}>
                                    //         <Text style={styles.navBarText}>Save</Text>
                                    //     </TouchableHighlight>
                                    // );
                                }
                            },
                            Title: (route, navigator, index, navState) =>
                                { return (<Text style={styles.navBarTitleText}>{route.title}</Text>); },
                        }}
                    />
                }
            />
        );
    }
}