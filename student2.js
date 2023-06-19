function getheader() {
    var headerHTML = "<header style=' background-color: #F1F1F1; text-align: center; 10 px; '>"
    + "<h1 style='font-size: 24px;'>" + companyname4 + "</h1>"
                 + "</header>";
  return headerHTML;
}
function getFooter(companyname4, address3, phoneNumber3) {
  var footerHTML = "<footer style='background-color: #000000; text-align: center; padding: 10px; font-size: 12px;'>"
                 + "<p>" + companyname3 + "</p>"
                 + "<p>" + address3 + "</p>"
                 + "<p>" + phoneNumber3 + "</p>"
                 + "</footer>";
  return footerHTML;
}