/**
 * Created by bailey on 8/15/2016.
 */
export default {
    "development": {
        "dialect": "sqlite",
        "storage": "./db.development.sqlite"
    },
    "test": {
        "username": "postgres",
        "password": "test",
        "database": "postgres",
        "host": "192.168.99.100",
        "port": "32782",
        "dialect": "postgres"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};