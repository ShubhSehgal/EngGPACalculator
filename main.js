function calcSem1() {
  var chemGPA = parseInt(document.getElementById("chem").value);
  var physicsGPA = parseInt(document.getElementById("physics").value);
  var math1ZA3GPA = parseInt(document.getElementById("math1ZA3").value);
  var computationGPA = parseInt(document.getElementById('computation').value);
  var engProfGPA = parseInt(document.getElementById('engProf').value);
  var elec1GPA = parseInt(document.getElementById("elec1").value);
  var elec1Units = parseInt(document.getElementById("elec1Units").value);

  totalUnits = 3*4 + 4 + elec1Units;
  var gpaTotal = chemGPA*3 + physicsGPA*3 + math1ZA3GPA*3 + computationGPA*4 + engProfGPA*3 + elec1GPA * elec1Units;
  var sem1GPA =  Math.round((gpaTotal/totalUnits) * 100) / 100;

  sem1GPA = sem1GPA.toString();

  var gpa = document.createElement("p");
  var x = document.createTextNode(sem1GPA);
  gpa.appendChild(x);

  var displayBox = document.getElementById('sem1GPA');
  displayBox.appendChild(gpa);

};

function calcSem2() {
  var math1ZB3GPA = parseInt(document.getElementById("math1ZB3").value);
  var math1ZC3GPA = parseInt(document.getElementById("math1ZC3").value);
  var matls1M03GPA = parseInt(document.getElementById('matls1M03').value);
  var physics2GPA = parseInt(document.getElementById('physics2').value);
  var eng1C03GPA = parseInt(document.getElementById('eng1C03').value);
  var elec2GPA = parseInt(document.getElementById("elec2").value);
  var elec2Units = parseInt(document.getElementById("elec2Units").value);

  totalUnits = 3*5 + elec2Units;
  var gpaTotal = math1ZB3GPA*3 + math1ZC3GPA*3 + matls1M03GPA*3 + physics2GPA*3 + eng1C03GPA*3 + elec2GPA*elec2Units;
  var sem2GPA = Math.round((gpaTotal/totalUnits) * 100) / 100;

  sem2GPA = sem2GPA.toString();

  var gpa = document.createElement("p");
  var x = document.createTextNode(sem2GPA);
  gpa.appendChild(x);

  var displayBox = document.getElementById('sem2GPA');
  displayBox.appendChild(gpa);

};

function calcTotalGPA() {

  var chemGPA = parseInt(document.getElementById("chem").value);
  var physicsGPA = parseInt(document.getElementById("physics").value);
  var math1ZA3GPA = parseInt(document.getElementById("math1ZA3").value);
  var computationGPA = parseInt(document.getElementById('computation').value);
  var engProfGPA = parseInt(document.getElementById('engProf').value);
  var elec1GPA = parseInt(document.getElementById("elec1").value);
  var elec1Units = parseInt(document.getElementById("elec1Units").value);
  var math1ZB3GPA = parseInt(document.getElementById("math1ZB3").value);
  var math1ZC3GPA = parseInt(document.getElementById("math1ZC3").value);
  var matls1M03GPA = parseInt(document.getElementById('matls1M03').value);
  var physics2GPA = parseInt(document.getElementById('physics2').value);
  var eng1C03GPA = parseInt(document.getElementById('eng1C03').value);
  var elec2GPA = parseInt(document.getElementById("elec2").value);
  var elec2Units = parseInt(document.getElementById("elec2Units").value);

  var totalUnits = (3*9) + 4 + elec1Units + elec2Units;
  var gpaTotal = chemGPA*3 + physicsGPA*3 + math1ZA3GPA*3 + computationGPA*4 + engProfGPA*3 + elec1GPA * elec1Units + math1ZB3GPA*3 + math1ZC3GPA*3 + matls1M03GPA*3 + physics2GPA*3 + eng1C03GPA*3 + elec2GPA*elec2Units;

  var finalGPA = Math.round((gpaTotal/totalUnits) * 100) / 100;

  finalGPA = finalGPA.toString();

  var gpa = document.createElement("p");
  var x = document.createTextNode(finalGPA);
  gpa.appendChild(x);

  var displayBox = document.getElementById('overallGPA');
  displayBox.appendChild(gpa);

}
