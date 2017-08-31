require('dotenv').config();

module.exports = () => {
    return {
        debug: process.env.NODE_ENV === 'development',
        title: process.env.APP_TITLE
    };
};

