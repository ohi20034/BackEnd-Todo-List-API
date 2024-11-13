const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';

    if (process.env.NODE_ENV === 'development') {
        console.error(err.stack);
    }
    if (err.name === 'ValidationError') {
        // MongoDB validation error
        statusCode = 400;
        message = Object.values(err.errors).map(val => val.message).join(', ');
    } else if (err.name === 'CastError') {
        // Invalid MongoDB ObjectId error
        statusCode = 400;
        message = `Invalid ${err.path}: ${err.value}`;
    }
    res.status(statusCode).json({
        success: false,
        error: message,
    });
}
module.exports = errorHandler;