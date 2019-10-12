
$(function () {

    $(".eatburger").on("click", function (event) {
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("Burger changed status to", devouredState);
                location.reload();
            }
        );
    });


    $("#addburger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerNameID").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });


    $(".trashburger").on("click", function (event) {
        event.preventDefault();
        console.log("the trash button was clicked")
        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(
            function () {
                console.log("Burger was deleted")
                location.reload();

            })
    });

});