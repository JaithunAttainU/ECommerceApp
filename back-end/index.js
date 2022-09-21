const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8000

app.use(cors({
  origin: '*'
}))

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})


const products = [
  {
    name: 'P1',
    price: 100
  },
  {
    name: 'P2',
    price: 300
  },
]