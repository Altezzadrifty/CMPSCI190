function confirmlink455(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?"))
         location = linkname;
 }
 
var thename = "Alexander Turnbough";
var my_message = "cs190 Javascript Lab 2";
var id2 = 931;

function displayinfo991 (){
    alert ( thename + my_message + id2 );
}

// declare this variable outside of your functions
current = 1;     // selects which item that is "on special"

function displayspecial945() {

   if (current == 1) {
	  alert("The current special is #1");
   }
   if (current == 2)  {
	  alert("The current special is #2");
   }
   if (current == 3 )  {
	  alert("The current special is #3");
   }
   current = current + 1;
   if (current > 3) {
	 current = 1 ;  // wrap around
   }

}