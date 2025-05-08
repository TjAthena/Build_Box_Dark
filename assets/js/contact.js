const scriptURL = "https://script.google.com/macros/s/AKfycbzQ3ooSmx-mKJ0Xa6YbmbBzrbgFQPagOri8Iu-OAi7Q6z8f0_q23j94Te6m66SY2mL3/exec";
const form = document.forms["submit-to-google-sheet"];

// Add submit event listener to the form
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(form);

    // Send data to Google Apps Script
    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            if (response.ok) {
                // Trigger SweetAlert success popup
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been successfully submitted. We will get back to you soon!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });

                // Optionally, reset the form after successful submission
                form.reset();
            } else {
                // Trigger SweetAlert error popup
                Swal.fire({
                    title: 'Error',
                    text: 'There was an issue with your submission. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
            }
        })
        .catch((error) => {
            console.error("Error!", error.message);
            // Show error alert if something goes wrong
            Swal.fire({
                title: 'Error',
                text: 'There was a problem with your submission. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        });
});
