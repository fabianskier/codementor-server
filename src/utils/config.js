require('dotenv').config()

exports.PORT = process.env.NODE_PORT
exports.SECRET = process.env.NODE_SECRET
exports.USERNAME = encodeURIComponent(process.env.DB_USER)
exports.PASSWORD = encodeURIComponent(process.env.DB_PASS)
exports.CLUSTER  = process.env.DB_CLUSTER
exports.PARAMETERS = process.env.DB_PARAMETERS
