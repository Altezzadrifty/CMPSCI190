var companyname4 = "Xander's Clothes";
var address3 = "251 Main St. Valencia, CA 91344";
var phonenumber3 = "(555) 319-1234";
function getHeader() {
    var headerHTML = "<header style='background-color: #ff6e4f; text-align: center; padding: 10px;'>"
                   + "<h1 style='font-size: 24px;'>" + companyname4 + "</h1>"
                   + "</header>";
    return headerHTML;
  }
  function getFooter(companyname4, address3, phonenumber3) {
    var footerHTML = "<footer style='background-color: #ff6e4f; text-align: center; padding: 10px; font-size: 12px;'>"
                   + "<p>" + companyname4 + "</p>"
                   + "<p>" + address3 + "</p>"
                   + "<p>" + phonenumber3 + "</p>"
                   + "</footer>";
    return footerHTML;
  }
  