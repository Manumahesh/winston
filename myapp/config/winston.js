var winston = require('winston');
var { transports, createLogger, format } = winston;

var winston = createLogger({
    format: format.combine(
        // format.timestamp(),
        format.json(),
        format.align(),
        // format.prettyPrint(),
        // format.logstash()
    ),
    exceptionHandlers:[
        new transports.File({
            filename:  'D:/Node Programs/myapp/logs/exception.log'
        })
    ],
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: 'D:/Node Programs/myapp/logs/app.log',
            message:  'helo',
            meta: 44,
            handleExceptions: false,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            uncolorize: false
            
        }),
        new winston.transports.File({
            level: 'error',
            filename: 'D:/Node Programs/myapp/logs/error.log',
            handleExceptions: false,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: true
        }),
        new winston.transports.Console({
            level: 'info',
            handleExceptions: false,
            json: false,
            colorize: true
        })
    ],
});

module.exports = winston; 
module.exports.stream = {
    write: function(message, encoding){
        winston.info(message);
        
    }
};