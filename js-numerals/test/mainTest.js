var chai = require('chai');
var assert = chai.assert;

describe('Main', function() {
    
    function translate(n){
    	var print = [];
    	var ones = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    	var tens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eightteen","nineteen"];
    	var decimals = ["placeholder0","ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
    	var chars = ("" + n).split("");
    	
    	if(chars.length<3){
    		decs(chars);
    	}else if(chars.length===3){
    		hundreds(chars);
    	}else if(chars.length===4){
    		thousands(chars);
    	}else if(chars.length===5){
    	    tenThousands(chars);
    	}else if(chars.length===6){
    		hundredThousands(chars)
    	}else if(chars.length===7){
    		millions(chars);
    	}else if(chars.length===8){
    		tenMillions(chars);
    	}else if(chars.length===9){
    		hundredMillions(chars)
    	}
    	
    	function hundredMillions(num){
    		hundreds(num.slice(0,3))
    		print.push(" million ")
    		hundredThousands(num.slice(3,9))
    	}
    	
    	function tenMillions(num){
    		decs(num.slice(0,2))
    		print.push(" million ")
    		hundredThousands(num.slice(2,8))
    	}
    	
    	function millions(num){
    		print.push(ones[num[0]]+" million ")
    		hundredThousands(num.slice(1,7))
    	}
    	
    	function hundredThousands(num){
    		hundreds(num.slice(0,3));
    		if(num[0]!=0){
    		print.push(" thousand ");
    		}
    		hundreds(num.slice(3,6))
    	}
    	
    	function tenThousands(num){
    		decs(num.slice(0,2));
    		print.push(" thousand ");
    		hundreds(num.slice(2,5))
    	}
    	
    	function thousands(number){
    		if(number[1]==0&&number[2]==0&&number[3]==0){
    			print.push(ones[chars[0]]+ " thousand")
    		}else if(number[1]==0||number[1]+number[2]==0){
    			print.push(ones[number[0]])
    			print.push(" thousand and ")
    			number = number.slice(-2)
    			decs(number);
    		}else if(number[2]==0&&number[3]==0){
    			decs(number[0]+number[1])
    			print.push(" thousand")
    		}
    			else{
    			decs(number[0]+number[1])
    			print.push(" hundred and ")
    			decs(number[2]+number[3])
    		}
    	}
    	
    	function hundreds(id){
    		if(id[0]==0){
    			id = id.slice(1,3)
    			decs(id);
    		}else{
    			if(id[1]==0&&id[2]==0){
    		print.push(ones[id[0]])
    		print.push(" hundred");
    		}else if(id[1]==0){
    		print.push(ones[id[0]])
    		print.push(" hundred and ");
    		print.push(ones[id[2]])
    		}else if(id.length===3){
    		print.push(ones[id[0]])
    		print.push(" hundred and ")
    		id.shift()
    		decs(id)
    		}
    	  }
    	}
    	
    	function decs(num){
    		if(num.length==2&&num[0]==0){
    			if(num[1]!=="0"){
    			num = num.slice(1,2)
    			}else{
    				return
    			}
    		}
    		if(num.length === 1||num[0]==0){
    			if(num.length===2){
    				print.push(ones[num[1]])
    			}else{
    				print.push(ones[num[0]])
    			}
    	}else if(num.length === 2&&num[0]==1){
    		print.push(tens[num[1]])
    	}else if(num.length===2&&num[0]>1){
    	    if(num[1]==0){
    	        print.push(decimals[num[0]])
    	    }else{
    		    print.push(decimals[num[0]])
    		    print.push("-"+ones[num[1]])
    	    }
    	  }
    	}
    	
        return print.join("");
    }
    
  it('should print three', function() {
    var res = translate(3);
    assert.equal(res, "three");
  });

  it('should print eleven', function() {
    var res = translate(11);
    assert.equal(res, "eleven");
  });
  
  it('should print thirty-two', function() {
    var res = translate(32);
    assert.equal(res, "thirty-two");
  });
  
  it('should print two hundred', function() {
    var res = translate(200);
    assert.equal(res, "two hundred");
  });
  
  it('should print three hundred and one', function() {
    var res = translate(101);
    assert.equal(res, "one hundred and one");
  });
  
  it('should print four hundred and fifty-four', function() {
    var res = translate(454);
    assert.equal(res, "four hundred and fifty-four");
  });
  
  it('should print two thousand', function() {
    var res = translate(2000);
    assert.equal(res, "two thousand");
  });
  
  it('should print four thousand and fifteen', function() {
    var res = translate(4015);
    assert.equal(res, "four thousand and fifteen");
  });
  
  it('should print fifteen hundred and ninety-nine', function() {
    var res = translate(1599);
    assert.equal(res, "fifteen hundred and ninety-nine");
  });
  
  it('should print eleven thousand', function() {
    var res = translate(11000);
    assert.equal(res, "eleven thousand ");
  });
  
  it('should print thirty-four thousand four hundred', function() {
    var res = translate(34400);
    assert.equal(res, "thirty-four thousand four hundred");
  });
  
  it('should print fifty-four thousand fourty', function() {
    var res = translate(54040);
    assert.equal(res, "fifty-four thousand fourty");
  });
  
  it('should print seventy-seven thousand six hundred and sixty-six', function() {
    var res = translate(77666);
    assert.equal(res, "seventy-seven thousand six hundred and sixty-six");
  });
  
  it('should print one hundred thousand two hundred', function() {
    var res = translate(100200);
    assert.equal(res, "one hundred thousand two hundred");
  });
  
  it('should print four hundred and sixty-seven thousand three hundred and fifty-six', function() {
    var res = translate(467356);
    assert.equal(res, "four hundred and sixty-seven thousand three hundred and fifty-six");
  });
  
  it('should print two million two hundred and three', function() {
    var res = translate(2000203);
    assert.equal(res, "two million two hundred and three");
  });
  
  it('should print five million six hundred and thirty-four thousand seven hundred and eighty-nine', function() {
    var res = translate(5634789);
    assert.equal(res, "five million six hundred and thirty-four thousand seven hundred and eighty-nine");
  });
  
  it('should print two hundred million one hundred and one thousand two hundred and thirty-four', function() {
    var res = translate(200101234);
    assert.equal(res, "two hundred million one hundred and one thousand two hundred and thirty-four");
  });
  
  it('should print nine hundred and sixty seven million six hundred and fifty-three thousand four hundred and eleven', function() {
    var res = translate(967653411);
    assert.equal(res, "nine hundred and sixty-seven million six hundred and fifty-three thousand four hundred and eleven");
  });
});