var Case = require('./models/case');
var path = require('path');

  module.exports = function(app) {

    console.log('ROUTES')

    app.get('/api/cases', function(req, res) {

      Case.find(function(err, cases) {
        if (err) 
          res.send(err);

        res.json(cases);
      });
    });

    app.post('/api/cases', function(req, res) {
      var data = req.body
      console.log(data);
      Case.create(data, function(err, wert) {
        if(err)
          res.send(err);

        res.json(wert);
      });
    });

    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });
  };