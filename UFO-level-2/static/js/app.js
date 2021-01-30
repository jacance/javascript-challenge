// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    // Make one for each field
    var inputElement = d3.select("#datetime");
    var inputElement1 = d3.select("#city");
    var inputElement2 = d3.select("#state");
    var inputElement3 = d3.select("#country");
    var inputElement4 = d3.select("#shape");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");

    // Filter data based on input
    var filterData = tableData.filter(x => 
        x.datetime === inputValue &&
        x.city === inputValue1 &&
        x.state === inputValue2 &&
        x.country === inputValue3 &&
        x.shape === inputValue4);
    console.log(filterData);
  
    var tbody = d3.select("tbody");
    

    tbody.text("");


    // Append filtered data to HTML to display results
    filterData.forEach(function(tabledata) {
        var tr = tbody.append("tr");

        tr.append("td").text(tabledata.datetime);
        tr.append("td").text(tabledata.city);
        tr.append("td").text(tabledata.state);
        tr.append("td").text(tabledata.country);
        tr.append("td").text(tabledata.shape);
        tr.append("td").text(tabledata.durationMinutes);
        tr.append("td").text(tabledata.comments);
    });

};

    