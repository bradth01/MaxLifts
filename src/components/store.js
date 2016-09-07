'use strict';

import Store from 'react-native-store';
import Promise from 'bluebird';

const db = {
    'lifts': Store.model('lifts')
};

const utils = {
    //temp seed function
    seed() {
        return db.lifts.destroy()
        .then(() => Promise.each(lifts, lift => db.lifts.add(lift)))
        .catch(alert);
    },

    getDbData() {
        db.lifts.find()
        .then(lifts => lifts)
        .catch(alert);
    }
};

let lifts = [
    {lift: 'Bench Press', max: 180},
    {lift: 'Squat', max: 215},
    {lift: 'OHP', max: 125}
];

module.exports = utils;