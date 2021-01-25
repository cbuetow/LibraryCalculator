$(document).ready(
    function () {
        // add event listener (clicks, etc.)
        $("#LibraryButton").click(calculateFees);
        function calculateFees()
        {
            // Get amount of books turned in
            var numBooks = $("#numBooks").val();
            numBooks = parseInt(numBooks);

            // Get how many days past due
            var lateDayBooks = $("#lateDayBooks").val();
            lateDayBooks = parseInt(lateDayBooks);

            // Get amount of DVDs turned in
            var numDVDs = $("#numDVDs").val();
            numDVDs = parseInt(numDVDs);

            var lateDayDVDs = $("#lateDayDVDs").val();
            lateDayDVDs = parseInt(lateDayDVDs);

            // Declare variable for lateFeeBooks
            var lateFeeBooks = 0.25;

            // Declare variable for lateFeeDVDs
            var lateFeeDVDs = 0.5;

            // Calculate lateDayBooks * numBooks * lateFeeBooks = bookFeeTotal
            var bookFeeTotal = lateDayBooks * numBooks * lateFeeBooks;

            // Calculate lateDayDVDs * numDVDs * lateFeeDVDs = dvdFeeTotal
            var dvdFeeTotal = lateDayDVDs * numDVDs * lateFeeDVDs;

            // Add bookFeeTotal + dvdFeeTotal to get grandFeeTotal
            var grandFeeTotal = bookFeeTotal + dvdFeeTotal;

            $("#costLibOutput").text(grandFeeTotal.toFixed(2));

            $(".output").show();
        }
    }
);