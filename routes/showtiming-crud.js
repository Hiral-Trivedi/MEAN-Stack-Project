
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser'),
router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');

var showtimingSchema = mongoose.Schema({

  showHours: Number,
  showMinutes:Number,
  showPeriod:String,

 });

var Showtiming = mongoose.model('Showtiming', showtimingSchema, 'showtiming');


router.get('/getShowtiming', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Showtiming.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getShowtiming/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Showtiming.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addShowtiming', function(req, res){
 console.log(req.body);


  var hours = req.body.showHours;
  var minutes=req.body.showMinutes;
  var period=req.body.showPeriod;

  var showtiming= new Showtiming({

    showHours: hours,
    showMinutes: minutes,
    showPeriod:period,

  });

  showtiming.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });


  })

router.delete('/deleteShowtiming/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Showtiming.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateShowtiming/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Showtiming.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
