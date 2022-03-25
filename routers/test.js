const express = require('express')
const Test = require('../models/test')
const router = new express.Router()

router.post('/tests', async (req, res) => {
    const test = new Test(req.body)
    try {
        await test.save()
        res.status(201).send(test)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get('/tests', async (req, res) => {
    Test.find({}).then((tests) => {
        res.send(tests)
    }).catch((e) => {
        res.status(500).send()
    })
})

module.exports = router