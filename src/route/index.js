const express = require('express')

const router = express.Router()

require('@src/route/auth')(router)

module.exports = router
