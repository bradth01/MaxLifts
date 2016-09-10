'use strict';

import Store from 'react-native-store';
import Promise from 'bluebird';

const db = {
    'lifts': Store.model('lifts')
};

const utils = {
    // add error hadnling to these routes?
    // temp seed function
    seed() {
        return db.lifts.destroy()
        .then(() => Promise.each(lifts, lift => db.lifts.add(lift)))
        .catch(alert);
    },

    getDbData() {
        return db.lifts.find()
    },

    addToDb(liftObject) {
        return db.lifts.add(liftObject)
    },

    removeAndUpdate(liftName) {
        return db.lifts.remove({
            where: {
                lift: liftName 
            }
        })
        .then(() => db.lifts.find())
        .then(lifts => lifts)
    },

    increaseMax(liftId, max, int, up) {
        let newUp;
        if (up === '2 & 3') {
            newUp = '1';
        } else if (up === '1') {
            newUp = '2 & 3';
        }
        if (up === '1') {
            return db.lifts.updateById({
                max: max + int,
                up: newUp
            }, liftId)
            .then(() => db.lifts.find())
            .then(lifts => lifts);
        } else if (up === '2 & 3') {
            return db.lifts.updateById({
                max: max,
                up: newUp
            }, liftId)
            .then(() => db.lifts.find())
            .then(lifts => lifts);
        }
    },

    decreaseMax(liftId, max, int) {
        let newUp = '1';
        return db.lifts.updateById({
            max: max - int,
            up: newUp
        }, liftId)
        .then(() => db.lifts.find())
        .then(lifts => lifts);
    }
};

let lifts = [
    {lift: 'Bench Press', max: 180, up: '2 & 3'},
    {lift: 'Squat', max: 215, up: '2 & 3'},
    {lift: 'OHP', max: 125, up: '2 & 3'},
    {lift: 'Deadlift', max: 260, up: '1'},
    {lift: 'IBP', max: 155, up: '1'}
];

module.exports = utils;