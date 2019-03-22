
function whatToDo(dayOfWeek, weather) {
    //Create a compound conditional statement below. 
    

    //These three lines will have to be used in the conditional statement. Feel free to re-arrange.
    

}
$("button").click(function(){
    var dayOfWeek = $("#dayOfWeek").val();
    var weather = $("#weather").val();
    whatToDo(dayOfWeek, weather);
    
     if(dayOfWeek==="Saturday" && weather==="sunny" ){
    $("#result").html("I'll go for a bike ride.");
}
 else if(dayOfWeek==="Saturday" && weather==="cloudy"){ 
    $("#result").html("I'll go binge watch Netflix.");     
}
   else if(dayOfWeek==="Sunday" && weather==="sunny") {
          $("#result").html("I'll go to the park.");
   }
   else if(dayOfWeek==="Sunday" && weather==="cloudy"){ 
        $("#result").html("I'll go binge watch Netflix.");     
       }
});
