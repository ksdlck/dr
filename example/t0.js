(function(){
  var Dr, dr;
  Dr = require("../dr").Dr;
  dr = new Dr;
  dr.run('a', function(cb){
    console.log('a');
    cb();
  }, 'b', 'c');
  dr.run('b', function(cb){
    console.log('b');
    cb();
  }, 'c');
  dr.run('c', function(cb){
    console.log('c');
    cb();
  });
}).call(this);
