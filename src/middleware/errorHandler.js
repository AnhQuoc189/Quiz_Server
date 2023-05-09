const { constants } = require('../constants/httpStatus');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.BAD_REQUEST:
            return res.json({
                title: 'Validation Failed',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.NOT_FOUND:
            return res.json({
                title: 'Not Found',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.UNAUTHORIZED:
            return res.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.FORBIDDEN:
            return res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            return res.json({
                title: 'Server Error',
                message: err.message,
                stackTrace: err.stack
            });
        case constants.UNPROCESSABLE_ENTITY:
            return res.json({
                title: 'UNPROCESSABLE_ENTITY',
                message: err.message,
                stackTrace: err.stack
            });
        default:
            console.log(err);
            break;
    }
};

module.exports = errorHandler;
