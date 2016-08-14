export function Calculator(firstNumber){
  this.firstNumber = firstNumber;
}


Calculator.prototype.sum = function(){
  var result = 0;
  for(var i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return this.firstNumber + result;
},

Calculator.prototype.dif = function(){
  var result = 0;
  for(var i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return this.firstNumber - result;
},

Calculator.prototype.div = function(){
  var result = this.firstNumber;
  for(var i = 0; i < arguments.length; i++){
    if(arguments[i] == 0){
      throw new SyntaxError("Деление на ноль не предусмотрено");
    }
    result /= arguments[i];
  }
  return result;
},

Calculator.prototype.mul = function(){
  var result = this.firstNumber;
  for(var i = 0; i < arguments.length; i++){
    result *= arguments[i];
  }
  return result;
}


export function SqrCalc(){
  Calculator.apply(this, arguments);
}

SqrCalc.prototype = Object.create(Calculator.prototype);

SqrCalc.prototype.sum = function(){
  var result = Calculator.prototype.sum.apply(this, arguments);
  return result * result;
}
SqrCalc.prototype.dif = function(){
  var result = Calculator.prototype.dif.apply(this, arguments);
  return result * result;
}
SqrCalc.prototype.div = function(){
  var result = Calculator.prototype.div.apply(this, arguments);
  return result * result;
}
SqrCalc.prototype.mul = function(){
  var result = Calculator.prototype.mul.apply(this, arguments);
  return result * result;
}
