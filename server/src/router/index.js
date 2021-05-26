const postRouter = require('./postRouter')

module.exports = function Router (app) {
    app.use('/api/posts', postRouter)
}