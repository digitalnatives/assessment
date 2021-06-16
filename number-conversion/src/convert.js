// System for American Numbering 
let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function convert(n) {
        if(n<0){
            return "minus " + convert(-n);
        }
        if(n < 20){
            return units[n];
        }
        if(n < 100){
             //console.log(tens[n / 10] ) ;
          
            return tens[Math.floor(n / 10)] + ((n % 10 != 0) ? " " : "") + units[n % 10];
        }

        if(n < 1000){
            return units[Math.floor(n / 100)] + " hundred" + ((n % 100 != 0) ? " and " : "") + convert(n % 100);
        }

        if(n < 100000){
            return convert(Math.floor(n / 1000)) + " thousand" + ((n % 100000 != 0) ?  " " : "") + convert(n % 1000);
        }

        if(n < 1000000){
            return convert(Math.floor(n / 1000)) + " thousand" + ((n % 1000000 != 0) ?  " " : "") + convert(n % 1000);
        }

        if(n < 100000000){
            return convert(Math.floor(n / 1000000)) + " million" + ((n % 100000000 != 0) ?  " " : "") + convert(n % 1000000);
        }
  
        if(n < 1000000000){
            return convert(Math.floor(n / 1000000)) + " million" + ((n % 1000000000 != 0) ?  " " : "") + convert(n % 1000000);
        }
  
        if(n < 100000000000){
            return convert(Math.floor(n / 1000000000)) + " billion" + ((n % 100000000000 != 0) ?  " " : "") + convert(n % 1000000000);
        }

    

        return "";
}

 console.log(convert(1300420))