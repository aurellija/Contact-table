function pridetiEilute(){
    var lentele=document.getElementsByTagName("table")[0];
    var inputai=document.getElementsByTagName("input");
    var vardas=inputai[0].value;
    var pavarde=inputai[1].value;
    var birthday=inputai[2].value;
    var phone=inputai[3].value;
    var email=inputai[4].value;
    var address=inputai[5].value;

    var eilute=document.createElement("tr");

    var stulpelis=document.createElement("td");
    //var numeris=lentele.childNodes.length;

    //stulpelis.innerText=numeris;
    //eilute.appendChild(stulpelis);
    //stulpelis=document.createElement("td");
    stulpelis.innerText=vardas;
    eilute.appendChild(stulpelis);
    stulpelis=document.createElement("td");
    stulpelis.innerText=pavarde;
    eilute.appendChild(stulpelis);
    stulpelis=document.createElement("td");
    stulpelis.innerText=birthday;
    eilute.appendChild(stulpelis);
    stulpelis=document.createElement("td");
    stulpelis.innerText=phone;
    eilute.appendChild(stulpelis);
    stulpelis=document.createElement("td");
    stulpelis.innerText=email;
    eilute.appendChild(stulpelis);
    stulpelis=document.createElement("td");
    stulpelis.innerText=address;
    eilute.appendChild(stulpelis);
    
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

function trinti(btn){
    var eilute=btn.parentNode.parentNode;
    var lentele=eilute.parentNode;
    lentele.removeChild(eilute);

    ///// skaičiuoja numerius

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
