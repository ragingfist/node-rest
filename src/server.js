/**
 * Created by bailey on 8/15/2016.
 */
import log from 'winston';
import app from './app';

app.set('port', process.env.PORT || 3000);
let server = app.listen(app.get('port'), function() {
   log.info('Express server listening on port ' + server.address().port);
});
