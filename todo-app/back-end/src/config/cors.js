module.exports = function(req, res, next) {
    res.header('Access-Control-Allor-Origin', '*')
    res.header('Access-Control-Allor-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allor-Headers', 'Origin, X-Request-With, Contect-Type, Accept')
    next()
}