document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your booking request has been submitted. We will contact you shortly!");
  this.reset();
});
