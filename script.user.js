// ==UserScript==
// @name         AMO searchBar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://*.algerianmo.com/*
// @match        https://algerianmo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=algerianmo.com
// @downloadURL https://github.com/SpeedCode210/algerianmo-search-bar/raw/main/script.user.js
// @grant        none
// ==/UserScript==

let tables = document.getElementsByTagName("table");
for(let t = 0; t < tables.length;t++){
    document.getElementsByTagName("table")[t].insertAdjacentHTML('beforebegin',
`<input type="text" class="form-control" id="searchBar`+t+`" placeholder="ابحث عن...">
`);
document.getElementById("searchBar"+t).addEventListener ("keyup", function(){myFunction(t);}, false);

}


function myFunction(t) {
  var input, filter, table, tr, i, txtValue;
  input = document.getElementById("searchBar"+t);
  filter = input.value.toUpperCase();
  table = document.getElementsByTagName("table")[t];
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    let tds = tr[i].getElementsByTagName("td");
    if (tds) {
      txtValue = "";
      for(let j = 0; j < tds.length; j++){
            txtValue += tds[j].textContent || td.innerText;
      }
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}