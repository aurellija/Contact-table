function pridetiEilute(){
    var lentele=document.getElementsByTagName("table")[0];
    var inputai=document.getElementsByTagName("input");

    var eilute=document.createElement("tr");
    var stulpelis=document.createElement("td");
    
    //if the number index of contact would be needed:
    //var numeris=lentele.childNodes.length;
    //stulpelis.innerText=numeris;
    //eilute.appendChild(stulpelis);
    //stulpelis=document.createElement("td");
    
    var i; 
    var duom;
    for(i=0; i<6; i++){
        if(i==3){
            checkInp(duom);
        }
        var duom=inputai[i].value;
        stulpelis.innerText=duom;
        eilute.appendChild(stulpelis);
        stulpelis=document.createElement("td");
    }
    
    var delbtn=document.createElement("input"); // delete button
    delbtn.value="Delete";
    delbtn.type="button";
    delbtn.onclick=function(){
        trinti(this);
    };

    var editbtn=document.createElement("input"); // edit and save buttons
    editbtn.value="Edit";
    editbtn.type="button";
    editbtn.onclick=function(){
        editdata(this);
        editbtn.style.display="none";
    };

    var savebtn=document.createElement("input"); // save button
    savebtn.value="Save";
    savebtn.type="button";
    savebtn.style.display="none"; 

    stulpelis=document.createElement("td");
    stulpelis.appendChild(delbtn);
    stulpelis.appendChild(editbtn);
    stulpelis.appendChild(savebtn);

    eilute.appendChild(stulpelis);
    lentele.appendChild(eilute);
    
}

function checkInp(phone){
    if (isNaN(phone)) 
    {
        alert("Phone number must contain only digits");
        return false;
    }
}

function trinti(btn){
    var eilute=btn.parentNode.parentNode;
    var lentele=eilute.parentNode;
    lentele.removeChild(eilute);

    // skaičiuoja numerius
    /*for(var i=1;i<lentele.childNodes.length;i++)
    {
        lentele.childNodes[i].firstChild.innerText=i;
    }*/ 
}

function editdata(btn){

    var eilute=btn.parentNode.parentNode;
    var savb=eilute.childNodes[6].childNodes[2];

    savb.style.display="block";

    var fname=eilute.childNodes[0];
    var lname=eilute.childNodes[1];
    var dbirth=eilute.childNodes[2];
    var pnum=eilute.childNodes[3];
    var email=eilute.childNodes[4];
    var address=eilute.childNodes[5];

    var fnameval=fname.innerHTML; 
    var lnameval=lname.innerHTML; 
    var dateval=dbirth.innerHTML; 
    var numval=pnum.innerHTML; 
    var emailval=email.innerHTML;
    var adval=address.innerHTML;

    fname.innerHTML="<input type='text' id='f' value='"+fnameval+"'>";
    lname.innerHTML="<input type='text' id='l' value='"+lnameval+"'>";
    dbirth.innerHTML="<input type='text' id='b' value='"+dateval+"'>";
    pnum.innerHTML="<input type='text' id='p' value='"+numval+"'>";
    email.innerHTML="<input type='text' id='e' value='"+emailval+"'>";
    address.innerHTML="<input type='text' id='a' value='"+adval+"'>";

    savb.onclick=function(){

    var fa=document.getElementById("f").value;
    var l=document.getElementById("l").value;
    var b=document.getElementById("b").value;
    var p=document.getElementById("p").value;
    var e=document.getElementById("e").value;
    var a=document.getElementById("a").value;

    fname.innerHTML=fa;
    lname.innerHTML=l;
    dbirth.innerHTML=b;
    pnum.innerHTML=p;
    email.innerHTML=e;
    address.innerHTML=a;

    savb.style.display="none";

    var eilute=savb.parentNode.parentNode;
    var ebt=eilute.childNodes[6].childNodes[1];
    ebt.style.display="block";
    }
}
