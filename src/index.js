module.exports =  function toReadable (number) {
    let num = [
            "zero",
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
            "twelwe",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
          ]
    
    
    let decimal = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ]        
    
    let num3 = [
      "hundred",      
    ]
    
    
            let str = "";
            let newNumber = String(number).split('');
            let numberLength = newNumber.length;
    
    
           if (numberLength < 2){
              //  return (str = num[number]);
                str = num[number];
                console.log(str);
    
            }
    
            if ( numberLength === 2 ){
              if ( newNumber[1] === '0' ){
                console.log(`${decimal[Number(newNumber[0]-2)]}`);
                console.log('one');
              }else{
                console.log(`${decimal[Number(newNumber[0]-2)]} ${num[newNumber[1]]}`);
                console.log('two');
              }
           
            }   

            if (numberLength === 3) {
                if (newNumber[1]  === '0') {
                  // если 2-я или 3-я цифра равняется 0, то используем только единицы и убираем пробелы
                  console.log(`${num[Number(newNumber[0])]} ${num3} ${num[Number(newNumber[2])]}`);
                  console.log('three');
                } else if (newNumber[1] === '1') {
                  // если 2-я цифра равняется единице, то рассматриваем 2-ю и 3-ю цифру как одно число
                  console.log('four');
                  console.log( `${num[Number(newNumber[0])]} ${num3} ${num[parseInt(newNumber[1] + newNumber[2])]}`);
                } else {
                    console.log('five');
                  // во всех остальных случаях убираем пробелы, если последняя цифра равняется нулю
                  console.log(`${num[Number(newNumber[0])]} ${num3} ${decimal[Number(newNumber[0]-1)]} ${num[Number(newNumber[2])]}`);
                }
              }
          
    
    
    }
    
    
    toReadable(517);
