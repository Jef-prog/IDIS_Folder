

// clickalbe tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
// clickalbe tabs


// the selection and button that adds a subject
function showSelection() {
  document.getElementById("showSelect").style.display = "block";
  document.getElementById("showButton").style.display = "block";
  evt.currentTarget.className += " active";
}
// the selection and button that adds a subject



