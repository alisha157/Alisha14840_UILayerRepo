var counter=0;
var cnt1=0;
var cnt2=0;
function myFunction(elem){
    if(elem.id=='flower1'){
        counter+=1;
        document.getElementById('span1').innerHTML=counter;
    }
    else if(elem.id =='flower2'){
        cnt1+=1;
        document.getElementById('span2').innerHTML=cnt1;
    }
    else if(elem.id=='flower3'){
        cnt2+=1;
        document.getElementById('span3').innerHTML=cnt2;
    }
}