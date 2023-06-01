$(function () {
    // Wait for the document to finish loading

    // Attach a submit event listener to the element with ID "dataform"
    document.getElementById("dataform").addEventListener("submit", function (e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Create a new FormData object from the form data
        var formData = new FormData(e.target);

        // Show the element with class "query-params"
        $('.query-params').show();

        // Select the table body within the element with class "query-params"
        var $tbody = $('.query-params tbody');

        // Loop through each key-value pair in the form data
        for (var pair of formData.entries()) {
            // Create a new table row
            var $tr = $('<tr>');

            // Create a table cell for the key and append it to the row
            $tr.append($('<td>').html(pair[0]));

            // Create a table cell for the value and append it to the row
            $tr.append($('<td>').html(pair[1]));

            // Append the row to the table body
            $tbody.append($tr);
        }
    });
});
