(function(){
  var Dr, Qr, dr, qr, _ref;
  _ref = require("../dr"), Dr = _ref.Dr, Qr = _ref.Qr;
  dr = new Dr;
  qr = new Qr(dr);
  dr.run('x', function(done){
    console.log('x');
    done();
  }, 'a', 'b');
  qr.run('a', function(done){
    console.log('a');
    done();
  });
  qr.run('b', function(done){
    console.log('b');
    done();
  });
  qr.run('c', function(done){
    console.log('c');
    done();
  }, 'x');
}).call(this);
