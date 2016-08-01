$("#target").submit(function(e){
    e.preventDefault();
    var num = $( "input:first" ).val()
    $("#final").html(num);
})