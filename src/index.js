module.exports = function toReadable (number) {
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
  "thousand",
  "million",
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
            console.log(`${decimal[newNumber[0]]}`);
            console.log('one');
          }else{
           // console.log(`${decimal[newNumber[0]]} ${num[newNumber[1]]}`)
            console.log('two');
          }
       
        }

       // if ( numberLength === 3 ){
         // str = decimal[number];
         // console.log(str);
        //}

      //  if ( numberLength === 4 ){
            
      //  }


}


toReadable(20);
