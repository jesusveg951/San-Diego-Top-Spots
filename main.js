 $.getJSON("data.json", function(response) {
    $.each(response, function(i, item) {
      var $tr = $("<tr>").append(
        $("<td>").text(item.name),
        $("<td>").text(item.description),
        $("<td>").append(
        )
      );
      $tr.appendTo(".table");
    });
  });
