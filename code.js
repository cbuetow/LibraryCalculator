$(document).ready(
    function () {
        // add event listener (clicks, etc.)
        $("#LibraryButton").click(calculateFees);
        function calculateFees()
        {
            // Get amount of books turned in
            let numBooks = $("#numBooks").val();
            numBooks = parseInt(numBooks);

            // Get how many days past due
            let lateDayBooks = $("#lateDayBooks").val();
            lateDayBooks = parseInt(lateDayBooks);

            // Get amount of DVDs turned in
            let numDVDs = $("#numDVDs").val();
            numDVDs = parseInt(numDVDs);

            let lateDayDVDs = $("#lateDayDVDs").val();
            lateDayDVDs = parseInt(lateDayDVDs);

            // Declare variable for lateFeeBooks
            let lateFeeBooks = 0.25;

            // Declare variable for lateFeeDVDs
            let lateFeeDVDs = 0.5;

            // Calculate lateDayBooks * numBooks * lateFeeBooks = bookFeeTotal
            let bookFeeTotal = lateDayBooks * numBooks * lateFeeBooks;

            // Calculate lateDayDVDs * numDVDs * lateFeeDVDs = dvdFeeTotal
            let dvdFeeTotal = lateDayDVDs * numDVDs * lateFeeDVDs;

            // Add bookFeeTotal + dvdFeeTotal to get grandFeeTotal
            let grandFeeTotal = bookFeeTotal + dvdFeeTotal;

            $("#costLibOutput").text(grandFeeTotal.toFixed(2));

            $(".output").show();
        }
    }
);