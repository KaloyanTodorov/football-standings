module.exports = {
    dev: {
        port: process.env.PORT || 8080,
        dbURL: 'mongodb://localhost:27017/teams'
    },
    prod: {}
}