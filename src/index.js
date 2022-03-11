module.exports =  function toReadable (number) {
  let num = [
          "",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
        ];

  let num1 = [
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
        ];      
  
  
  let decimal = [
         "twenty",
         "thirty",
         "forty",
         "fifty",
         "sixty",
         "seventy",
         "eighty",
         "ninety",
       ];        
  
  let num3 = [
        "hundred",      
       ];
  
  
      let str = "";
      let newNumber = String(number).split('');
      let numberLength = newNumber.length;

      if (number === 0) {
          console.log('zero');
          return 'zero';
          }
          if (numberLength < 2){
          return (str = num[number]);       
       }
        
  
      if (numberLength === 2) {    
          if (Number(newNumber[0]) < 2) {
          return `${num1[Number(newNumber[1])]}`;           
          }       
          if ( newNumber[1] === '0' ){
          return `${decimal[Number(newNumber[0]-2)]}`
          }else{             
          return `${decimal[Number(newNumber[0]-2)]} ${num[newNumber[1]]}`
          }         
        }   

       if (numberLength === 3) {
           if (newNumber[1]  === '0') {              
           return `${num[Number(newNumber[0])]} ${num3} ${num[Number(newNumber[2])]}`.trim();
           } else if (newNumber[1] === '1') {
           return `${num[Number(newNumber[0])]} ${num3} ${num[parseInt(newNumber[1] + newNumber[2])]}`;
           } else {
           return `${num[Number(newNumber[0])]} ${num3} ${decimal[Number(newNumber[1]-2)]} ${num[Number(newNumber[2])]}`.trim();
           }
       }  
  }  
