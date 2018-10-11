$().ready(function(){

    var url="http://localhost:8080/Product/List";

    $.getJSON(url)
    .then(function(jsonResponse) {
        console.log(jsonResponse);
        render(jsonResponse);
        
    });

    function render(jsonResponse) {
        var tbody = $("#tbody");
        var products = jsonResponse.data;
        
        for(var product of products) {
            var row = "<tr>";
            row += "<td>" + product.id + "</td>";
            row += "<td>" + product.name + "</td>";
            row += "<td>" + product.price + "</td>";
            row += "<td>" + product.vendor.name + "</td>";
            row += "</tr>";
            tbody.append(row);
        }
    }
});