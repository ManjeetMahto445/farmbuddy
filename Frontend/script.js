console.log("Script loaded successfully!");
document
.getElementById("cropForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    console.log("Submit button clicked!");

    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
    const village = document.getElementById("village").value;
    const area = document.getElementById("area").value;
    const soil = document.getElementById("soil").value;
    const water = document.getElementById("water").value;


    let recommendation = "";
    if (soil === "Red Soil" && water === "Medium") {
        recommendation = "Wheat, Rice, Maize";
    }
    else if (soil === "Black Soil" && water === "High") {
        recommendation = "Sugarcane, Cotton, Soybean";
    }
    else {
        recommendation = "Please provide more specific soil and water conditions for better recommendations.";
    }

    document.getElementById("resultcard").innerHTML = `
       <h3> 🌱 Recommended Crops </h3>
       <p>${recommendation}</p>
    `;

    
    
    document.getElementById("resultcard").style.display = "block";


    console.log("State:", state);
    console.log("District:", district);
    console.log("Village:", village);
    console.log("Area:", area);

});