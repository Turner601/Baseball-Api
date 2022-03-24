const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

// Hits In A Single Season
// localhost:3000/hitsSingleSeason
router.get('/hitsSingleSeason', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/hitsSingleSeason'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/hitsSingleSeason', {
                title: 'Hits In A Single Season',
                name: 'Hits In A Single Season',
                data
            })
        })
})

// Career Hits
// localhost:3000/hitsCareer
router.get('/hitsCareer', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/hitsCareer'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/hitsCareer', {
                title: 'Career Hits',
                name: 'Career Hits',
                data
            })
        })
})

// Single Season ERA
// localhost:3000/eraSingleSeason
router.get('/eraSingleSeason', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/eraSingleSeason'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/eraSingleSeason', {
                title: 'Single Season ERA',
                name: 'Single Season ERA',
                data
            })
        })
})

// Career ERA
// localhost:3000/eraCareer
router.get('/eraCareer', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/eraCareer'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/eraCareer', {
                title: 'Career ERA',
                name: 'Career ERA',
                data
            })
        })
})

// Stolen Bases In A Single Season
// localhost:3000/stolenBasesSingleSeason
router.get('/stolenBasesSingleSeason', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/stolenBasesSingleSeason'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/stolenBasesSingleSeason', {
                title: 'Bases Stolen In A Single Sesaon',
                name: 'Bases Stolen In A Single Season',
                data
            })
        })
})

// Stolen Bases In A Single Career
// localhost:3000/stolenBasesCareer
router.get('/stolenBasesCareer', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/stolenBasesCareer'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/stolenBasesCareer', {
                title: 'Home Runs In A Career',
                name: 'Home Runs In A Career',
                data
            })
        })
})

// Batting Average In A Single Season
// localhost:3000/battingAvgsSingleSeason
router.get('/battingAvgsSingleSeason', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/battingAvgsSingleSeason'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/battingAvgsSingleSeason', {
                title: 'Batting Averages In A Single Season',
                name: 'Batting Averages In A Single Season',
                data
            })
        })
})

// Career Batting Averages
// localhost:3000/battingAvgsCareer
router.get('/battingAvgsCareer', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/battingAvgsCareer'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/battingAvgsCareer', {
                title: 'Career Batting Averages',
                name: 'Career Batting Averages',
                data
            })
        })
})

// Single Season RBI
// localhost:3000/rbiSingleSeason
router.get('/rbiSingleSeason', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/rbiSingleSeason'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/rbiSingleSeason', {
                title: 'RBI In A Single Season',
                name: 'RBI In A Single Season',
                data
            })
        })
})

// Career RBI
// localhost:3000/rbiCareer
router.get('/rbiCareer', (req, res) => {
    const URL = 'https://api.sampleapis.com/baseball/rbiCareer'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/rbiCareer', {
                title: 'Career RBI',
                name: 'Career RBI',
                data
            })
        })
})



module.exports = router