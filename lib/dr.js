(function(){
  var exports, nextTick, Dr, Qr, Sr, __slice = [].slice;
  if (typeof exports === 'undefined') {
    exports = window.dr = {};
  }
  nextTick = typeof process === 'object' && typeof process.nextTick === 'function'
    ? process.nextTick
    : function(fn){
      return setTimeout(fn, 0);
    };
  Dr = (function(){
    Dr.displayName = 'Dr';
    var prototype = Dr.prototype, constructor = Dr;
    function Dr(){
      this.tasks = {};
      this.res = {};
    }
    prototype.run = function(tag, proc){
      var deps, task, rem, deptag, dep, _ref, _i, _len, _this = this;
      deps = __slice.call(arguments, 2);
      task = (_ref = this.tasks)[tag] || (_ref[tag] = {});
      task.proc = function(){
        proc(function(res){
          var deptag, dep, _i, _ref, _len;
          delete task.rem;
          if (res !== undefined) {
            _this.res[tag] = res;
          }
          if (task.deps) {
            for (_i = 0, _len = (_ref = task.deps).length; _i < _len; ++_i) {
              deptag = _ref[_i];
              dep = _this.tasks[deptag];
              if (0 === --dep.rem) {
                nextTick(dep.proc);
              }
            }
            delete task.deps;
          }
        }, _this.res);
      };
      rem = 0;
      for (_i = 0, _len = deps.length; _i < _len; ++_i) {
        deptag = deps[_i];
        dep = (_ref = this.tasks)[deptag] || (_ref[deptag] = {});
        if (!dep.proc || dep.rem !== undefined) {
          (dep.deps || (dep.deps = [])).push(tag);
          rem++;
        }
      }
      task.rem = rem;
      if (0 === rem) {
        nextTick(task.proc);
      }
    };
    return Dr;
  }());
  exports.Dr = Dr;
  Qr = (function(superclass){
    Qr.displayName = 'Qr';
    var prototype = __extend(Qr, superclass).prototype, constructor = Qr;
    function Qr(dr){
      this.dr = dr;
      if (!this.dr) {
        superclass.call(this, this);
        this.dr = this;
      }
    }
    prototype.run = function(tag){
      var args, _ref;
      args = __slice.call(arguments, 1);
      if (this.last) {
        args.push(this.last);
      }
      this.last = tag;
      (_ref = this.dr).run.apply(_ref, [tag].concat(__slice.call(args)));
    };
    return Qr;
  }(Dr));
  exports.Qr = Qr;
  Sr = (function(superclass){
    Sr.displayName = 'Sr';
    var prototype = __extend(Sr, superclass).prototype, constructor = Sr;
    function Sr(dr, pfx){
      this.dr = dr;
      this.pfx = pfx;
      this.seq = 0;
      if (typeof this.dr === 'string') {
        this.pfx = this.dr;
        superclass.call(this, this);
        this.dr = this;
      }
    }
    prototype.run = function(tag, proc){
      var deps, nproc, _ref, _this = this;
      deps = __slice.call(arguments, 2);
      nproc = function(done){
        _this.dr.run(tag, proc);
        done();
      };
      (_ref = this.dr).run.apply(_ref, [this.pfx + "" + this.seq++, nproc].concat(__slice.call(deps)));
    };
    return Sr;
  }(Dr));
  exports.Sr = Sr;
  function __extend(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
}).call(this);
