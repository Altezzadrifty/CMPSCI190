var companyname4 = "Xander's Clothes";
var address3 = "251 Main St. Valencia, CA 91344";
var phonenumber3 = "(555) 319-1234";
var imgurl851 = "https://class-phi.vercel.app/Images/"
var cardimgurl741 = "http://www.college1.com/images/cards/gbCard"
var cardnum593 = -1;
var cardsInHand = [];


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
     menuHTML += `<button onClick='JavascriptFunction:dealCards581()'> Deal Cards </button>`;
     menuHTML += `<button onClick='hitCard423()'> Hit Card </button>`;
     return menuHTML;

  }
  function makeMain7(product) {
    var mainHTML = `My Product:<br/>`;
    mainHTML += `Product Name: ${product.Name}<br/>`;
    mainHTML += `Product ID: ${product.id}<br/>`;
    mainHTML += `Product Description: ${product.desc}<br/>`;
    // mainHTML += `Shopping Cart Link Bar <br/>`; 
    mainHTML += `Product Image: <img src="${imgurl851}${product.id}.jpg" /> `;
    return mainHTML;
  }

  function execButton933(product) {
    console.log(product)
    document.getElementById("Productdiv").innerHTML=makeMain7(product)
  }

  function dealCards581() {
    var htmltoadd=""
    htmltoadd +=`<img src="${cardimgurl741}${0}.gif" id="card0" />`
    htmltoadd +=`<img src="${cardimgurl741}${1}.gif" id="card1" />`
    htmltoadd +=`<img src="${cardimgurl741}${52}.gif" id="card2" />`
    htmltoadd +=`<img src="${cardimgurl741}${52}.gif" id="card3" />`
    htmltoadd +=`<img src="${cardimgurl741}${52}.gif" id="card4" />`
    document.getElementById("Productdiv").innerHTML= htmltoadd
  }

  function hitCard423() {
    if (cardnum593 === -1 || cardnum593 >= 5) {
        alert("Cannot hit card at this moment!");
        return;
    }
    var cardToFlip = cardnum593 + 1;
    document.getElementById(`card${cardToFlip}`).src = `${cardimgurl741}${cardsInHand[cardToFlip]}.gif`;
    cardnum593++;
}

function dealCards581() {
    cardnum593 = -1;
    cardsInHand = [];

    var htmltoadd = "";
    for (var i = 0; i < 5; i++) {
        var cardNumber;
        do {
            cardNumber = Math.floor(Math.random() * 52);
        } while (cardsInHand.includes(cardNumber));

        cardsInHand.push(cardNumber);
        if (i < 2) {
            htmltoadd += `<img src="${cardimgurl741}${cardNumber}.gif" id="card${i}" />`;
            cardnum593++;
        } else htmltoadd += `<img src="${cardimgurl741}52.gif" id="card${i}" />`;
        
    }

    document.getElementById("Productdiv").innerHTML = htmltoadd;
}



  
  