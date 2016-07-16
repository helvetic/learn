export default function deepEqual(objA, objB){
  for(let key in objA){

    let type = typeof objA[key];

    if(type === 'function'){
      if(objA[key].toString() !== objB[key].toString())
        return false;

    }else if(type === 'object'){
      if(objA[key] instanceof Date){
        if(objA[key].getTime() !== objB[key].getTime())
          return false;
      }else if(!deepEqual(objA[key],objB[key])){
        return false;
      }

    }else{
      if(objA[key] !== objB[key] && objA[key] === objA[key])
        return false;

    }
  }

  return true;
}
