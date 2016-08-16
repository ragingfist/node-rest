/**
 * Created by bailey on 8/15/2016.
 */
import log from 'winston';
import app from './app';
import db from './models/db';

app.set('port', process.env.PORT || 8080);

db.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), function() {
        log.info('Express server listening on port ' + server.address().port);
    });
});
