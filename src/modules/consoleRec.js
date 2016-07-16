export default function consoleRec (array,index = 0){
  if(array[index]){
    console.log(array[index]);
    index++;
    consoleRec(array,index);
  }
}