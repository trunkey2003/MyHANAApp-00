// srv/server.js
const cds = require('@sap/cds')

// cds.on('bootstrap', app => {
//   app.get('/', (req, res) => {
//     res.send('<h1>Welcome to SAP CAP Application (Production)</h1>')
//   })
// })

module.exports = cds.server
