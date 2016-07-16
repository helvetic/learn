export default function calculator (firstNumber){
  return {

    
    
    sum: function(){
      let result = 0;
      for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
      }
      return firstNumber + result;
    },

    
    
    dif(){
      let result = 0;
      for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
      }
      return firstNumber - result;
    },

    
    
    div(){
      let result = firstNumber;
      for(let i = 0; i < arguments.length; i++){
        if(arguments[i] == 0){
          throw new SyntaxError("Деление на ноль не предусмотрено");
        }
        result /= arguments[i];
      }
      return result;
    },

    
    
    mul(){
      let result = firstNumber;
      for(let i = 0; i < arguments.length; i++){
        result *= arguments[i];
      }
      return result;
    }

    
    
  };
}