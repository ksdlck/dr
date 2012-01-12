(function(){
  var Dr, Sr, dr, sr, _ref;
  _ref = require("../dr"), Dr = _ref.Dr, Sr = _ref.Sr;
  dr = new Dr;
  sr = new Sr(dr, 'seq-');
  sr.run('x', function(done){
    console.log('x');
    done();
  }, 'c');
  sr.run('a', function(done){
    console.log('a');
    done();
  }, 'c');
  sr.run('b', function(done){
    console.log('b');
    done();
  }, 'a');
  sr.run('c', function(done){
    console.log('c');
    done();
  });
}).call(this);
