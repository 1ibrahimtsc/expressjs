const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Our Application today'
    })
    })

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
        console.log(` SERVER is RUNNING ON PORT ${PORT} ` )
    })