const crypto = require('crypto');

module.exports = function(password) {
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto.createHmac('sha256', salt)
                   .update(password)
                   .digest('hex');
    return { hash, salt };
}