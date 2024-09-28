document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const guestName = document.getElementById('guestName').value;
    const guestEmail = document.getElementById('guestEmail').value;
    const roomType = document.getElementById('roomType').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;

    // Create table row with booking info
    const table = document.getElementById('bookingsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = guestName;
    newRow.insertCell(1).innerText = guestEmail;
    newRow.insertCell(2).innerText = roomType;
    newRow.insertCell(3).innerText = checkIn;
    newRow.insertCell(4).innerText = checkOut;

    // Clear the form after submission
    document.getElementById('bookingForm').reset();
});
