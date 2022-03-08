module.exports = function toReadable (number) {
let numbers = [
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
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred",
        "thousand",
        "million",
        ]


        let str = "";
        let newNumber = String(number).split('');
        let numberLength = newNumber.length;


        if (numberLength < 2){
          //  return (str = numbers[number]);
            str = numbers[number];
            console.log(str);

        }

        if ( numberLength === 2 ){

        }

        if ( numberLength === 3 ){
            
        }

        if ( numberLength === 4 ){
            
        }


}


toReadable(11);
