const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'julia', // e.g. 'my-db-user'
    password: 'julia1983', // e.g. 'my-db-password'
    database: 'test_db', // e.g. 'my-database'
    // socketPath: `empirical-state-256620:europe-west2:iot-data-base`,
    host: '34.89.5.163'
})

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if(!err) {
                console.log('Success');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();
