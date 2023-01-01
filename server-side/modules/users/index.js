const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/api/users/', (req, res) => {
  res.send('Kullanıcılar servisinden merhabalar!')
})

app.listen(port, () => {
  console.log(`Kullanıcılar servisi ${port} numaralı portu dinlemeye başladı`)
})