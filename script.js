document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const uid = document.getElementById('uid').value;

    // Assuming the specific UID required for booking is "12345"
    if (uid === "12345") {
        alert('Bed booked successfully for ' + phone);
        // Implement actual booking logic here
    } else {
        alert('Invalid UID. Please try again.');
    }
});
