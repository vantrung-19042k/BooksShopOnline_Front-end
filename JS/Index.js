// Chuyển Banner 
var count = 1;
function left(){
	count++;
	if (count > 5)
		{
			count = 1;
		}
	var x = document.getElementById("banner");
	x.src ="imges/Banner/banner" + count + ".jpg";
	x.style.width = "851px";
	x.style.height = "315px";
}
function right(){
	count--;
	if (count < 1)
		{
			count = 5;
		}
	var x = document.getElementById("banner");
	x.src ="imges/Banner/banner" + count + ".jpg";
	x.style.width = "851px";
	x.style.height = "315px";
}
setInterval(function(){right();},2000);


// Chuyển TAGBOOK
function openBook(evt, tagName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tagName).style.display = "block";
  evt.currentTarget.className += " active";
}
