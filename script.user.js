// ==UserScript==
// @name         AMO searchBar
// @namespace    http://tampermonkey.net/
// @version      1.2.1
// @description  try to take over the world!
// @author       You
// @match        https://*.algerianmo.com/control/correction*
// @match        https://algerianmo.com/control/correction*
// @match        https://*.algerianmo.com/accounts/students-ranking*
// @match        https://algerianmo.com/accounts/students-ranking*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=algerianmo.com
// @downloadURL https://github.com/SpeedCode210/algerianmo-search-bar/raw/main/script.user.js
// @grant        none
// ==/UserScript==
if(window.location.href.includes("algerianmo.com/control/correction")){
    for(let a of document.getElementsByTagName("a")){
        a.href = a.href + "?decide=a";
    }
}
let tables = document.getElementsByTagName("table");
if(tables && tables.length >= 1)
    document.getElementsByTagName("body")[0].children[1].insertAdjacentHTML('beforebegin',
`<div class="container">
<input type="text" class="form-control" style="margin: 10px 0;" id="searchBar`+`" placeholder="ابحث عن...🔍">
</div>
`);
for(let t = 0; t < tables.length;t++){
document.getElementById("searchBar").addEventListener ("keyup", function(){myFunction(t);}, false);

}


function myFunction(t) {
  var input, filter, table, tr, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  table = document.getElementsByTagName("table")[t];
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    let tds = tr[i].getElementsByTagName("td");
    if (tds) {
      txtValue = "";
      for(let j = 0; j < tds.length; j++){
            txtValue += tds[j].textContent || tds[j].innerText;
      }
      if (txtValue.replace("𝑹𝒂𝒔𝒔𝒊𝒎 𝑪𝒉𝒆𝒓𝒊𝒓","Rassim Cherir").toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
