

function myFunction() {
    var x = document.getElementById("myForm");
    var text = x.elements[0].value;
    document.getElementById("answer").innerHTML = convert(text);
}


var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convert_millions(num){
    if (num>=1000000){
        return convert_millions(Math.floor(num/1000000)) +" million "+convert_thousands(num%1000000);
    }
    else {
        return convert_thousands(num);
    }
}

function convert_thousands(num){
    if (num>=1000){
        return convert_hundreds(Math.floor(num/1000))+" thousand "+convert_hundreds(num%1000);
    }
    else{
        return convert_hundreds(num);
    }
}

function convert_hundreds(num){
    if (num>99){
        return ones[Math.floor(num/100)]+" hundred " +convert_tens(num%100);
    }
    else{
        return convert_tens(num);
    }
}

function convert_tens(num){
    if (num<10) return ones[num];
    else if (num>=10 && num<20) return teens[num-10];
    else{
        return tens[Math.floor(num/10)]+"-"+ones[num%10];
    }
}

function convert(num){
    if (num=="") return "";

    var answer = "";
    num = Number(num);
    if (isNaN(num)) return "please type an integer";
    else if (num==0) return "zero";
    else if (num < -999999999) return "number is too small for this script";
    else if (num > 999999999) return "number is too big for this script";
    else if (num < 0) {
        answer += "minus ";
        num*=-1;
    }


    var and = "";
    if (num >=100) and = " and ";


    if(num>=1000000) answer += convert_millions(Math.floor(num/1000000)) + " million ";
    num = num%1000000;
    if (num>=1000) answer += convert_thousands(Math.floor(num/1000)) + " thousands ";
    num=num%1000;
    if (num>99) answer += ones[Math.floor(num/100)]+" hundred ";
    num=num%100;
    if (num<10) answer += and + ones[num];
    else if (num>=10 && num<20) answer += and + teens[num-10];
    else {
        answer += and + tens[Math.floor(num/10)]+"-"+ones[num%10];
    }

    return answer;

}