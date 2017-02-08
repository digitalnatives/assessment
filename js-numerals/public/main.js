$("#target").submit(function(e){
    e.preventDefault();
    var num = $( "input:first" ).val()
    num = Number(num);
    if(Number.isInteger(num)){
        //translate
        var fin = translate(num);
        if(fin==''){
            $("#final").text("Please submit a number between 0-1000000000!")
        }else{
            $("#final").text(fin);
        }
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
})