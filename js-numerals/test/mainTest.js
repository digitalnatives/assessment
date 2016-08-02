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
    		decimaker(chars);
    	}else if(chars.length===3){
    		hundredmaker(chars);
    	}else if(chars.length===4){
    		thousandmaker(chars);
    	}
    	
    	function thousandmaker(number){
    		if(chars[1]==0&&chars[2]==0&&chars[3]==0){
    			print.push(ones[chars[0]])
    			print.push(" thousand")
    		}else if(chars[1]==0||chars[1]+chars[2]==0){
    			print.push(ones[chars[0]])
    			print.push(" thousand and ")
    			var lasts = chars.slice(-2)
    			decimaker(lasts);
    		}else if(chars[2]==0&&chars[3]==0){
    			decimaker(chars[0]+chars[1])
    			print.push(" thousand")
    		}
    			else{
    			decimaker(chars[0]+chars[1])
    			print.push(" hundred and ")
    			decimaker(chars[2]+chars[3])
    		}
    	}
    	
    	function hundredmaker(id){
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
    		decimaker(id)
    	}
    	}
    	
    	function decimaker(num){
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
});