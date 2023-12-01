const moment = require('moment');

module.exports = {
    formatDate: function (date, format) {
        if (date != null) {
            return moment(date).format(format);
        }
        return null;
        
    }
};