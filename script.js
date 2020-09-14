function createTable() {
  // https://www.w3schools.com/jsref/dom_obj_table.asp
  var x = document.createElement("TABLE");
  x.setAttribute("id", "myTable");
  document.body.appendChild(x);

  var y = document.createElement("TR");
  y.setAttribute("id", "myTr");
  document.getElementById("myTable").appendChild(y);

  var z = document.createElement("TD");
  var t = document.createTextNode("cell");
  z.appendChild(t);
  document.getElementById("myTr").appendChild(z);
}