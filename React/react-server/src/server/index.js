const express = require('express')

import { renderToString } from 'react-dom/server'
import Home from '../containers/Home'
import React from 'react'

const app = express()
app.use(express.static('public'));
const content = renderToString(<Home />)
app.get('/', (req, res) =>
  res.send(`
  <html>
     <head>
         <title>ssr demo</title>
     </head>
     <body>
         <div id='root'>${content}</div>
          <script src="/index.js"></script>
     </body>
  </html>
  `)
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))