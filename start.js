function start(){
    var lentele=document.getElementsByTagName("table")[0];
    var inputai=["Baltrus", "Baltaragis", "1956-12-05", 
    "+37062020200", "b.baltaragis@pastas.lt", "Maluno g. 28"];

    var eilute=document.createElement("tr");
    var stulpelis=document.createElement("td");

    var i;
    for(i=0; i<6; i++){
        stulpelis.innerText=inputai[i];
        eilute.appendChild(stulpelis);
        stulpelis=document.createElement("td");
    

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
    
}