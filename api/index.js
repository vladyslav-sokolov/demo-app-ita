
import express from 'express'
import { urlencoded, json } from 'body-parser'
const app = express()

app.use(urlencoded({ extended: false }))
app.use(json())

import logs from './logs'
app.use(logs)

import status from './status'
app.use(status)

if (require.main === module) {
    const port = 8080
    app.listen(port, () => {
        console.log(`API server listening on port ${port}`)
    })
}

export default app