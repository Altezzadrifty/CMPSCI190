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

  var product1 = { Name:"Adidas Tracksuit", id:"4000", desc:"Hottest Tracksuit of 2023"};
  var product2 = { Name:"Nike Sweatpants", id:"5000", desc:"Hottest Sweatpants of 2023"};
  var product3 = { Name:"Puma T-Shirt", id:"000", desc:"Hottest T-shirt of 2023"};

  function makeMenu6() {
    var products = [product1, product2, product3]
    var menuHTML = "My Menu: ";
    for (const product of products) {
      menuHTML +=  `<button onClick='JavascriptFunction:execButton933(${JSON.stringify(product)})' > ${product.Name} </button>`;
    }
    return menuHTML;
  }
  function makeMain7(product) {
    var mainHTML = `My Product:<br/>`;
    mainHTML += `Product Name: ${product.Name}<br/>`;
    mainHTML += `Product ID: ${product.id}<br/>`;
    mainHTML += `Product Description: ${product.desc}<br/>`;
    // mainHTML += `Shopping Cart Link Bar <br/>`; 
    // mainHTML += `Product Image: <br/>`;
    return mainHTML;
  }

  function execButton933(product) {
    console.log(product)
    document.getElementById("Productdiv").innerHTML=makeMain7(product)
  }


  
  