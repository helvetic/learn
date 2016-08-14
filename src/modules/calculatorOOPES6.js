export class CalculatorES6{
  constructor(firstNumber){
    this.firstNumber = firstNumber;
  }

  sum(){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
      result += arguments[i];
    }
    return this.firstNumber + result;
  }

  dif(){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
      result += arguments[i];
    }
    return this.firstNumber - result;
  }

  div(){
    let result = this.firstNumber;
    for(let i = 0; i < arguments.length; i++){
      if(arguments[i] == 0){
        throw new SyntaxError("Деление на ноль не предусмотрено");
      }
      result /= arguments[i];
    }
    return result;
  }

  mul(){
    let result = this.firstNumber;
    for(let i = 0; i < arguments.length; i++){
      result *= arguments[i];
    }
    return result;
  }

}

export class SqrCalcES6 extends CalculatorES6{
  constructor(firstNumber){
    super(firstNumber);
  }
  sum(){
    let result = super.sum(...arguments);
    return result * result;
  }
  dif(){
    let result = super.dif(...arguments);
    return result * result;
  }
  div(){
    let result = super.div(...arguments);
    return result * result;
  }
  mul(){
    let result = super.mul(...arguments);
    return result * result;
  }
}
