// ================================= DOM ELEMENTS ========================================= //
var container = document.getElementById("container");

// ================================= FUNCTIONS ========================================= //

function output(data) {
  
  // Store data in variable
  var brands = data.dog_brands;
  // Iterate through brands
  for (let i = 0; i < brands.length; i++) {
    // Current brand to work with
    var currentBrand = brands[i];
    // Get brandName
    var brandName = currentBrand.name;
    // Get array of brandTypes
    var brandTypes = currentBrand.types;

    // Create output string for brandname  
    var outputBrandName = `<div class="brandItem">
                    <h3>${brandName}</h3>`;

    // Add string to DOM
    container.innerHTML += outputBrandName;

    // Loop through brands
    for (let i = 0; i < brandTypes.length; i++) {
      // Get current brand type
      var currentBrandType = brandTypes[i].type;
      // Format output using currentBrandType
      var brandType = `<h4>${currentBrandType}</h4>`;
      // Add brandType HTML
      container.innerHTML += brandType;
      // Get volumes and prices for brand
      var volumesAndPrices = brandTypes[i].volumes;
      // Add volumes and prices for brandType
      for(let i = 0; i < volumesAndPrices.length; i++) {
        var currentVolume = volumesAndPrices[i].name;
        var currentPrice = volumesAndPrices[i].price;
        // Buind currentVolume and currentPrice string
        var volumeAndPriceString = `<h5>${currentVolume} - $${currentPrice}</h5>`;
        // Add string to DOM
        container.innerHTML += volumeAndPriceString;
      }
    }

    // Add closing brandItem tag
    container.innerHTML += '</div>';

  }

}

// ================================= XMLHttpRequest ========================================= //

// Create XMLHttpRequest object
var xmlhttp = new XMLHttpRequest();

// Create logic for when readyState changes
xmlhttp.onreadystatechange = function() {
  // Check ready state and status
  if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {

    // Parse and store responseText
    var data = JSON.parse(xmlhttp.responseText);
    
    // Output data to DOM
    output(data);
  }
};

// Open request
xmlhttp.open('GET', "food.js");

// Send request
xmlhttp.send();