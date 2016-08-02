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
    		if(chars[1]==0&&chars[2]==0&&chars[3]==0){
    			print.push(ones[chars[0]])
    			print.push(" thousand")
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
    		if(num.length === 1){
    		print.push(ones[n])
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
        return(print.join(""));
    }
})