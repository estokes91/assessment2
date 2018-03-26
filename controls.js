var prevDiv = document.getElementById("preview"),
    displayDiv = document.getElementById("display"),
    range1 = document.getElementById("range1"),
    range2 = document.getElementById("range2"),
    range3 = document.getElementById("range3"),
    range4 = document.getElementById("range4"),
    hairImg = document.getElementById("hair"),
    eyesImg = document.getElementById("eyes"),
    noseImg = document.getElementById("nose"),
    mouthImg = document.getElementById("mouth"),
    filevalue = 1;
    

document.getElementById("colorChange").addEventListener("change", function(){
    prevDiv.style.backgroundColor = this.value;
});

range1.addEventListener("change", function(){
    hairImg.style.width = this.value+"px";
});
range2.addEventListener("change", function(){
    eyesImg.style.width = this.value+"px";
});
range3.addEventListener("change", function(){
    noseImg.style.width = this.value+"px";
});
range4.addEventListener("change", function(){
    mouthImg.style.width = this.value+"px";
});

hairImg.addEventListener("click", function(){
    if (filevalue < 3){
        filevalue + 1;
        hairImg.src = "img/hair" + (filevalue+1) + ".png";}
});

eyesImg.addEventListener("click", function(){
    filevalue = 1;
    eyesImg.src = "img/eyes" + (filevalue+1) + ".png";
});

noseImg.addEventListener("click", function(){
    filevalue = 1;
    noseImg.src = "img/nose" + (filevalue+1) + ".png";
});

mouthImg.addEventListener("click", function(){
    filevalue = 1;
    mouthImg.src = "img/mouth" + (filevalue+1) + ".png";
});

document.getElementById("numberButton").addEventListener("click", function(){
    range1.type = "number";
    range2.type = "number";
    range3.type = "number";
    range4.type = "number";
});

document.getElementById("rangeButton").addEventListener("click", function(){
    range1.type = "range";
    range2.type = "range";
    range3.type = "range";
    range4.type = "range";
});

document.getElementById("plusButton").addEventListener("click", function(){
    var nDiv = document.createElement('div');
    displayDiv = document.getElementById("display");
    displayDiv.appendChild(nDiv);
    nDiv.style='width:100px;height:100px;left:0;right:0;';
    
    img1 = document.createElement("img");
    img1.className = "items";
    img1.src="img/hair1.png";
    img1.style="width:50px;height:50px;position:relative;left:0;right:0;margin:auto;"
    nDiv.appendChild(img1);
    
    img2 = document.createElement("img");
    img2.className = "items";
    img2.style="width:50px;height:50px;position:relative;left:0;right:0;margin:auto;"
    img2.src="img/eyes1.png";
    nDiv.appendChild(img2);
    
    img3 = document.createElement("img");
    img3.className = "items";
    img3.style="width:50px;height:50px;position:relative;left:0;right:0;margin:auto;"
    img3.src="img/nose1.png";
    nDiv.appendChild(img3);
    
    img4 = document.createElement("img");
    img4.className = "items";
    img4.style="width:50px;height:50px;position:relative;left:0;right:0;margin:auto;"
    img4.src="img/mouth1.png";
    nDiv.appendChild(img4);
    
    
    
});


