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
    var fileNum = Math.floor(Math.random() * 3) + 1;
    hairImg.src = 'img/hair'+fileNum+'.png';
});

eyesImg.addEventListener("click", function(){
    var fileNum = Math.floor(Math.random() * 3) + 1;
    eyesImg.src = 'img/eyes'+fileNum+'.png';
});

noseImg.addEventListener("click", function(){
    var fileNum = Math.floor(Math.random() * 3) + 1;
    noseImg.src = 'img/nose'+fileNum+'.png';
});

mouthImg.addEventListener("click", function(){
    var fileNum = Math.floor(Math.random() * 3) + 1;
    mouthImg.src = 'img/mouth'+fileNum+'.png';
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
    var face = document.createElement('div'),
        fhair = document.createElement('img'),
        fmouth = document.createElement('img'),
        fnose = document.createElement('img'),
        feyes = document.createElement('img');
    
    face.style.width = '100px';
    face.style.height = '100px';
    
    fhair.src = hairImg.src;
    fmouth.src = mouthImg.src;
    fnose.src = noseImg.src;
    feyes.src = eyesImg.src;
    
    face.style.backgroundColor = prevDiv.style.backgroundColor;
    
    fhair.style.width = hairImg.style.width;
    fmouth.style.width = mouthImg.style.width;
    fnose.style.width = noseImg.style.width;
    feyes.style.width = eyesImg.style.width;
    
    fhair.style.top = hairImg.style.top;
    fmouth.style.top = mouthImg.style.top;
    fnose.style.top = noseImg.style.top;
    feyes.style.top = eyesImg.style.top;
    
    fhair.className = 'newitems';
    fmouth.className = 'newitems';
    fnose.className = 'newitems';
    feyes.className = 'newitems';
    face.className = 'face';
    
    face.appendChild(fhair);
    face.appendChild(fmouth);
    face.appendChild(fnose);
    face.appendChild(feyes);
    
    displayDiv.appendChild(face); 

    face.addEventListener('click', function(){
     
    displayDiv.removeChild(face);
    
    });

    
    
});


