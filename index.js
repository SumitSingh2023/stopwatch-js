let milisec=0;
let sec=0;
let min=0;
let hr=0;

let timer=false

function start(){
    timer=true
    stopWatchRun()

}

function pause(){
    timer=false

}

function reset(){
    timer=false
    milisec=0
    sec=0
    min=0
    hr=0

}

function stopWatchRun(){
    if(timer==true){
        milisec=milisec+1
        
        if(milisec==100){
            sec+=1
            milisec=0

        }

        if(sec==60){
            min+=1
            sec=0
        }

        if(min==60){
            hr+=1
            min=0
        }
    }


let getSec=sec
let getMin=min
let getHr=hr



if(sec<10){
    getSec="0"+sec;
}

if(min<10){
    getMin="0"+min;
}

if(hr<10){
    getHr="0"+hr;
}

    setTimeout("stopWatchRun()",10)
    document.getElementById("milisec").innerHTML=milisec
    document.getElementById("sec").innerHTML=getSec
    document.getElementById("min").innerHTML=getMin
    document.getElementById("hr").innerHTML=getHr



}