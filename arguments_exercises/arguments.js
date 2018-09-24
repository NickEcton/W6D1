function sum(...args) {
  let tote = 0;
  for (i = 0; i < args.length; i++) {
    tote += args[i];
  }
  return tote;
}

Function.prototype.myBind = function(ctx, ...args1) {
  let this_dup = this;
  return function(...args2) {
    console.log(this_dup);
    return this_dup.apply(ctx, args1.concat(args2));
  };
};

function curriedSum(numArgs){
  // let that = this; 
  let numbers = [];
  _curriedSum = function(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el, 0);
    } else {
      return _curriedSum; 
    }
  };
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  this_dup = this;
  let args = [];
  _curried = function(arg){
    args.push(arg);
    if (args.length === numArgs) {
      return this_dup.apply(this_dup, args);
    } else {
      return _curried; 
    }
  };
  return _curried;
};

Function.prototype.curry2 = function(numArgs) {
  this_dup = this;
  let args = [];
  _curried = function(arg){
    args.push(arg);
    if (args.length === numArgs) {
      return this_dup(...args);
    } else {
      return _curried; 
    }
  };
  return _curried;
};
















