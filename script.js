let sports = [
    {
        name: "Sport:",
        type: "Position:",
        played: "Played:"
    },
    { 
        name: "Soccer",
        type: "Mid-Field",
        played: "Yes"
    },
    {
        name: "Track and Field",
        type: "100m",
        played: "Yes"
    },
    {
        name: "Bowling",
        type: "N/a",
        played: "Yes"
    }

];

let pos = 0;

window.onload = function(){
    displayCandy(0);
    
}

function displayCandy(i){
    let dsp = document.getElementById("sport");
    dsp.innerHTML="";
    let tbl = document.createElement("table")
    
    
for (let i = 0; i <= sports.length; i++) {
   
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = sports[i].name;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = sports[i].type;
    tr.appendChild(td);
    td = document.createElement("td");
    td.textContent = sports[i].played;
    tr.appendChild(td);
    tbl.appendChild(tr);
    dsp.appendChild(tbl);
}
}

document.getElementById("btnSubmit").onclick = function(){
    //get the text from the text boxws
    let cname = document.getElementById("txtName").value;
    let cType = document.getElementById("txtType").value;
    let cPlay = document.getElementById("txtPlay").value;
    //add new object to the array
    let obj = {name: cname, type: cType, played: cPlay};
    sports.push(obj)
    //Set the pos to the newly added candy
    pos = sports.length - 1;
    //display the candy
    displayCandy(pos);
    document.getElementById("btnNext").disabled = true;
    document.getElementById("btnPrev").disabled = false;

}