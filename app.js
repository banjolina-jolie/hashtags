
/**
 * Module dependencies.
 */

var controller = require('./routes/controller.js'), 
    http = require('http'), 
    config = require('./config/initialize.js');


var app = config();

controller(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
