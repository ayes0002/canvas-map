document.addEventListener("DOMContentLoaded",function(){
    
    "use strict";
    
    if(navigator.geolocation){
        alert("Getting your geolocation");
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = 400;
        canvas.height = 400;
        document.querySelector("body").appendChild(canvas);
        
        let params = {enableHighAcuracy:true, timeout:30000, maximunAge:1000};
        
        navigator.geolocation.getCurrentPosition(gotPosition, badStuff, params);
    } else {
        alert("Your browser does not support geolocation");
    }
    
    function gotPosition(position){
        let image = new Image(400,400);
        image.onload = function(){
            context.drawImage(image,0,0,400,400);   
        }
        
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        
        image.src="http://maps.googleapis.com/maps/api/staticmap?center="+lat+ ","+long+"&zoom=14&size=400x400&sensor=false&markers=color:green%7Clabel:C%7C"+lat+','+long;
        
    }
    
    function badStuff(err){
        alert(ERRCODES[err.code]);
    }

});

//for (var prop in window){
//    console.log("window.",prop);
//}