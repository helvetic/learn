export default function isAllTrue (source, filterFn){

  let length = source.length;

  if(length == 0){
    throw new SyntaxError("Пустой массив");
  }

  for(let i=0; i<length; i++){
    if(!filterFn(source[i])){
      return false;
    }
  }

  return true;


}
