const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    setTimeout(next, 1000)
  })
}

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/echo', (req, res) => {
  res.json(req.body.message)
})

app.listen(process.env.PORT, () =>
  console.log('Listening port ' + process.env.PORT)
)
