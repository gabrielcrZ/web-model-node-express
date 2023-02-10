$("#add_shinobi").submit(function(event) {
    alert("Shinobi inserted!");
})

$("#update_shinobi").submit(function(event) {
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
    
    $.map(unindexed_array, function(n,i) { 
        data[n['name']] = n['value']
    })
    
    console.log(data);

    var request = {
        "url" : 'http://localhost:3000/api/shinobilist/'+data.id,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response) {
        alert('Shinobi updated!');
    })
})

if(window.location.pathname =="/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url" : 'http://localhost:3000/api/shinobilist/'+id,
            "method" : "DELETE",
        }

        if(confirm("Do you want to delete this shinobi?")) {
            $.ajax(request).done(function(response) {
                alert('Shinobi deleted!');
                location.reload();
            })
        }
    })
}