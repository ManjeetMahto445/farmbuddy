console.log("Script loaded successfully!");
document
.getElementById("cropForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
    const village = document.getElementById("village").value;
    const area = document.getElementById("area").value;

    document.getElementById("result").innerHTML = `
        <h3>Farmer Details:</h3>
        <p>State: ${state}</p>
        <p>District: ${district}</p>
        <p>Village: ${village}</p>
        <p>Area: ${area} acres</p>
    `;


    console.log("State:", state);
    console.log("District:", district);
    console.log("Village:", village);
    console.log("Area:", area);

});