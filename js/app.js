// ================================= DOM ELEMENTS ========================================= //
var container = document.getElementById("container");

// ================================= FUNCTIONS ========================================= //

function output(data) {

  container.innerHTML += `<h1>Dog Brands</h1>`;
  
  ///////////////////////////////////// DOGS /////////////////////////////////////
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
                    <h2>${brandName}</h2>`;

    // Add string to buildout
    var brandToOutput = outputBrandName;

    // Loop through brands
    for (let i = 0; i < brandTypes.length; i++) {
      // Get current brand type
      var currentBrandType = brandTypes[i].type;
      // Format output using currentBrandType
      var brandType = `<h4>${currentBrandType}</h4>`;
      // Add brandType to buildout
      brandToOutput += brandType;
      // Get volumes and prices for brand
      var volumesAndPrices = brandTypes[i].volumes;
      // Add volumes and prices for brandType
      for(let i = 0; i < volumesAndPrices.length; i++) {
        var currentVolume = volumesAndPrices[i].name;
        var currentPrice = volumesAndPrices[i].price;
        // Buind currentVolume and currentPrice string
        var volumeAndPriceString = `<h5>${currentVolume} - $${currentPrice}</h5>`;
        // Add string to buildout
        brandToOutput += volumeAndPriceString;
      }
    }

    // Add closing div to buildout
    brandToOutput += '</div>';

    // Add HTML to container
    container.innerHTML += brandToOutput;

  }


  ///////////////////////////////////// CATS /////////////////////////////////////

  container.innerHTML += `<h1>Cat Brands</h1>`;

  // Store data in variable
  brands = data.cat_brands;
  // Iterate through brands
  for (let i = 0; i < brands.length; i++) {
    // Current brand to work with
    var currentCatBrand = brands[i];
    // Get brandName
    var catBrandName = currentCatBrand.name;
    // Get array of brandTypes
    var catBrandTypes = currentCatBrand.types;

    // Get breeds in array
    var catBreedsForBrand = currentCatBrand.breeds;
    // Loop through breeds and add to string
    var breedsHTML = `<h3>For Breeds: `;
    for (let i = 0; i < catBreedsForBrand.length; i++) {
      var currentBreed = catBreedsForBrand[i].breed;
      if (i !== catBreedsForBrand.length - 1) {
        breedsHTML += `${currentBreed}, `;
      } else {
        breedsHTML += `${currentBreed}`;
      }
    }
    // Add closing header tag
    breedsHTML += `</h3>`;



    // Create output string for brandname and breeds
    var outputCatBrandName = `<div class="brandItem">
                    <h2>${catBrandName}</h2>
                    ${breedsHTML}`;

    // Add string to buildout
    var catBrandToOutput = outputCatBrandName;

    // Loop through brands
    for (let i = 0; i < catBrandTypes.length; i++) {
      // Get current brand type
      var currentCatBrandType = catBrandTypes[i].type;
      // Format output using currentBrandType
      var catBrandType = `<h4>${currentCatBrandType}</h4>`;
      // Add brandType to buildout
      catBrandToOutput += catBrandType;
      // Get volumes and prices for brand
      var catVolumesAndPrices = catBrandTypes[i].volumes;
      // Add volumes and prices for brandType
      for(let i = 0; i < catVolumesAndPrices.length; i++) {
        var catCurrentVolume = catVolumesAndPrices[i].name;
        var catCurrentPrice = catVolumesAndPrices[i].price;
        // Buind currentVolume and currentPrice string
        var catVolumeAndPriceString = `<h5>${catCurrentVolume} - $${catCurrentPrice}</h5>`;
        // Add string to buildout
        catBrandToOutput += catVolumeAndPriceString;
      }
    }

    // Add closing div to buildout
    catBrandToOutput += '</div>';

    // Add HTML to container
    container.innerHTML += catBrandToOutput;

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