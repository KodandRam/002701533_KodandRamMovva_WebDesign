//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}
function firstToLoad(){
  document.getElementsByClassName("dropDownTextArea")[0].style.display = "none";
  document.getElementsByClassName("dropDownTextArea")[1].style.display = "none";
  document.getElementsByClassName("dropDownTextArea")[2].style.display = "none";
}

var i = 0;

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

var img = document.createElement("IMG");
var br= document.createElement('br');
var br1= document.createElement('br');


/*On clicking down png*/
img.setAttribute('src', 'down.png');
img.setAttribute('width','25');
img.id="img1";
img.onclick = function () {
  expandrow(img);
}

var cb = document.createElement("INPUT");
cb.type = "checkbox";
cb.className = "check"; 

function expandrow(i){


var x = document.getElementById("dropdown");

if(document.getElementsByClassName("dropDownTextArea")[i].style.display=="none"){
  document.getElementsByClassName("dropDownTextArea")[i].style.display = "";
}else
document.getElementsByClassName("dropDownTextArea")[i].style.display = "none";
}
/*Expanding rows for newly added students*/
function expandnewrows(i){
  var mtable= document.getElementById("myTable");
  var newrow= i.parentElement.parentElement;
  var imgRowindex= newrow.rowIndex;
  var reqindex= imgRowindex+1;
  var reqrow= mtable.rows[reqindex];
   
  if(reqrow.cells[0].style.display=="none"){
    reqrow.cells[0].style.display="";
  }else{
    reqrow.cells[0].style.display="none";
  }
}
/*Inserting new student*/
function newStudent(){
  alert('Adding New Student Record!')
  var table = document.getElementById("myTable");
  //var noofrows = table.rows.length;
  var newRow = table.insertRow(-1);//-1 is default value which adds rows to end 
  // add row and then insert cell
  var cell1= newRow.insertCell(0);
  var cell2= newRow.insertCell(1);
  var cell3= newRow.insertCell(2);
  var cell4= newRow.insertCell(3);
  var cell5= newRow.insertCell(4);
  var cell6= newRow.insertCell(5);
  var cell7= newRow.insertCell(6);
  var cell8= newRow.insertCell(7);

  cell2.innerHTML = "Student "+Math.floor(table.rows.length /2 );
  cell3.innerHTML = "Teacher "+Math.floor(table.rows.length /2 );
  cell4.innerHTML = "Approved";
  cell5.innerHTML = "Fall";
  cell6.innerHTML = "TA";
  min=11111;
  max=99999;
  const bud = Math.floor(Math.random() * (max - min + 1)) + min;
  cell7.innerHTML = bud;
  amin=0;
  amax=100;
  const per = (Math.floor(Math.random() * (amax - amin + 1)) + amin)+"%";
  cell8.innerHTML = per;

//we are adding checkbox, dropdown img and br tag for the first cell

  var cb1 = document.createElement("INPUT");
  cb1.type = "checkbox";
  cb1.className = "check"; 
  var br= document.createElement('br');
  var br1= document.createElement('br');
  cb1.onclick='checkBoxToggle(this)';
  var imgs = document.createElement("IMG");
  
  imgs.id="img1";
  imgs.setAttribute('src', 'down.png');
  imgs.setAttribute('width','25px');
  
  cell1.appendChild(cb1);
  cell1.appendChild(br);
  cell1.appendChild(br1);
  cell1.appendChild(imgs);

  // adding rows after rows
  var drpDwn_Ind = newRow.rowIndex;// index of new row and where it should be added
  var drpDwn_Row= table.insertRow(drpDwn_Ind+1);// insert nextrow to the new row added
  var cell= drpDwn_Row.insertCell(0);//adding 1st cell
  cell.setAttribute('colspan',8);
  //On click of down image
  drpDwn_Row.setAttribute("class","dropDownTextArea");
  cell.innerHTML= "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";
  cell.style.display="none";
  
  var row01= cb1.parentElement.parentElement;
  row01.id = i;
  cb1.onclick = function () {
    checkBoxToggle(this);
  }
  i++;

  imgs.onclick = function () {
    expandnewrows(imgs);
  }
}
/*delete row  functionality*/
function deleteStudent(deleteBtn){
  if (confirm('Are you sure you want to delete this row?')== true) {
    var submitButton = document.querySelector('#button');
    var table01= document.getElementById("myTable");
    var cRow=  deleteBtn.parentElement.parentElement;
    var chkboxes01= document.querySelectorAll('.check');

    var cRowindex= cRow.rowIndex;
    var reqDropRow= table01.rows[cRowindex+1];
    reqDropRow.style.display = "none";

    table01.deleteRow(cRow.rowIndex);
    
    if(chkboxes01.checked){
      submitButton.style.backgroundColor = 'orange';
      document.getElementById("button").disabled= false;
      
    }else{
      submitButton.style.backgroundColor = '';
      document.getElementById("button").disabled= true;
    }
  }

}

function editStudent(){
  alert("Edit the Details");
}

/****Checkbox toggle funtion */
 function checkBoxToggle(c){

  
  var cb02 = document.querySelectorAll('.check');
  var cRow01 = c.parentElement.parentElement;
  var submitBtn02 = document.getElementById('button');
  var checks = document.querySelectorAll('.check:checked');
  var r = document.getElementById(cRow01.id);
  [].forEach.call(cb02, function(eventlistener) {
    document.getElementById("button").disabled= false;// enable the button
    eventlistener.addEventListener('change', function() {
      var checkedd = document.querySelectorAll('.check:checked');
      if (checkedd.length) {
        submitBtn02.style.backgroundColor = 'orange';
      } else {
        submitBtn02.style.backgroundColor = 'grey';
        document.getElementById("button").disabled= true;
      }
    });
  });
  if (c.checked) {
    document.getElementById('editColu').style.display="table-cell";
    document.getElementById('delColu').style.display="table-cell";

    document.getElementById(cRow01.id).bgColor='yellow';    
    var cel8= r.insertCell(8);
    cel8.innerHTML = "<input type='button' id='deletebutton' onclick=deleteStudent(this) value='Delete'>";
    var cel9= r.insertCell(9);
    cel9.innerHTML = "<input type='button' id='editbutton' onclick=editStudent(this) value='Edit'>";

  } else {
    console.log("Checkbox not clicked");
    document.getElementById(cRow01.id).bgColor='white';
    submitBtn02.style.background='gray';

    r.deleteCell(9);
    r.deleteCell(8);     
  }
};