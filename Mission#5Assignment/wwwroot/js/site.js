// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(function () {
    const RATE = 25; // change this to whatever you want

    // Make sure the rate shown matches the JS rate
    $("#rate").val(RATE);

    $("#btnCalc").on("click", function () {
        // Hide any previous error
        $("#hoursError").hide().text("");

        const hoursRaw = $("#hours").val().trim();
        const hours = Number(hoursRaw);

        // Validation: must be a number > 0
        if (hoursRaw === "" || Number.isNaN(hours) || hours <= 0) {
            $("#total").val("");
            $("#hoursError")
                .text("Please enter a positive number of hours.")
                .show();
            return;
        }

        const total = hours * RATE;

        // Format as currency (USD)
        const formatted = total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        $("#total").val(formatted);
    });
});

