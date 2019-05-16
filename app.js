var	express		  = require('express'),
	  bodyParser 	= require('body-parser'),
	  app	      	= express();

var 	indexRoutes 	 = require('./routes/index');

app.set('port', (process.env.PORT || 3000));
/*app.get('/', (req,res) => {
  res.send("I am loading the home page");
});*/
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*************** ROUTES ****************/
app.use('/', indexRoutes);

app.get('/', (req,res) => {
  res.render('user');
});
app.get('/camera', (req,res) => {
  res.render('camera');
});


app.listen(app.get('port'),() => console.log('Listening on port ' + app.get('port')));
