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
    
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Use form input to filter the data by date
    var filterData = tableData.filter(x => x.datetime === inputValue);
  
    
    var tbody = d3.select("tbody")

    tbody.text("");

    // Append filtered data to HTML to display results
    filterData.forEach(function(tabledata) {
        var tr = tbody.append("tr");

        tr.append("td").text(tabledata.datetime)
        tr.append("td").text(tabledata.city)
        tr.append("td").text(tabledata.state)
        tr.append("td").text(tabledata.country)
        tr.append("td").text(tabledata.shape)
        tr.append("td").text(tabledata.durationMinutes)
        tr.append("td").text(tabledata.comments)

    })



  };

