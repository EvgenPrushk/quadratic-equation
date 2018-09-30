module.exports = function solveEquation(equation) {
  var NumberArray = equation.split(' ');   
     for (var i = 1; i <  NumberArray.length; i++) {
       if ( NumberArray[i] == "-" ) {
        NumberArray[i+1] = -NumberArray[i+1];
       }  
   
     }; 
           /*Можно было использовать  for(var i=0; i< equation.length; i++) {  equation[i] = parseInt(equation[i], 10); }  */
     var ABCArray = NumberArray.map(Number).filter(Boolean);
       
     var discriminant = ABCArray[1] * ABCArray[1] - 4 * NumberArray[0] * ABCArray[2]; console.log(ABCArray[2]); 
    
  
  var rootEquation1 = (-ABCArray[1] - Math.sqrt(discriminant))/(2 * ABCArray[0]);   
  rootEquation1 = Math.round(rootEquation1); console.log(rootEquation1);
  var rootEquation2 = (-ABCArray[1] + Math.sqrt(discriminant))/(2 * ABCArray[0]);    
   rootEquation2 = Math.round(rootEquation2); console.log(rootEquation2); 
   if (discriminant > 0) {
 return (rootEquation1 < rootEquation2) ? [rootEquation1, rootEquation2] : [rootEquation2, rootEquation1]
   } else if (discriminant == 0) {return [((-ABCArray[1]) + Math.sqrt(discriminant))/(2 * ABCArray[1]), null] }
 else { return [null, null]}

}
   

