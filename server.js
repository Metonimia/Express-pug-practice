var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views' );

app.get('/', function(req, res) {
	res.render('main-page', {
		name: "Strona główna",
		link: "/auth/google"
	});
});

app.get('/auth/google', function(req, res) {
	res.render('google-page', {
		name: "Hooray!"
	});
});

app.listen(3000, function() {
	console.log('Aplikacja nasłuchuje na http://localhost:3000');
})

app.use(function(req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});