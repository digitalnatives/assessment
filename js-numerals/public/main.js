$("#target").submit(function(e){
    e.preventDefault();
    var num = $( "input:first" ).val()
    num = Number(num);
    if(Number.isInteger(num)){
        //translate
        $("#final").text(translate(num));
    }else{
        $("#final").text("Please submit a whole number!")
    }
    //function to translate numbers into string
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
})