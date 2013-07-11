request = require("request")

MONGOLAB_STATUS_URL = "https://api.mongolab.com/api/1/clusters/rs-dbh97/databases/mongolab-status/collections/public-status-events?s={'timeStarted':%20-1}&apiKey=4f023946e4b0d227da1b51d8"


module.exports.mongolab = (req, res) ->
  req = request MONGOLAB_STATUS_URL, (error, response, body) ->
    throw error if error
    throw new Error("status " + response.statusCode) unless response.statusCode is 200
    lines = JSON.parse(body)
    proje = ({time: Date(line.timeStarted.$date), details: line.details} for line in lines)
    res.end(proje, 200)
