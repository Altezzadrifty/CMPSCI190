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

var custtype = "direct";

function changetype524() {
    var newtype;
    if (custtype == "direct") {
      newtype = "advertising";
    } else if (custtype == "advertising") {
      newtype = "subscription";
    } else if (custtype == "subscription") {
      newtype = "direct";
    }
    custtype = newtype;
    alert("Customer type has changed to: " + custtype);
  }
    function displaytype457() {
     if (custtype == "direct") {
          alert("Buy Now! From this web page! My children need new shoes!");
        } else if (custtype == "advertising") {
          alert("Support our advertisers! Click on an ad, so I can make money!");
        } else if (custtype == "subscription") {
          alert("Renew your subscription today! My children need medicine!");
        }
      }