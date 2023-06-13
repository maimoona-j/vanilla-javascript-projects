const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
    header.style.backgroundColor = "lightblue";
    header.style.boxShadow = "2px 4px 5px rgba(0, 0, 0, 0.2)";
  } else {
    header.classList.remove("navbarDark");
    header.style.backgroundColor = "";
    header.style.boxShadow = "";
  }
};

// // Get the Form 1 and Form 2 elements
// const form1 = document.getElementById('form1');
// const form2 = document.getElementById('form2');

// // Get the Next and Back buttons of Form 1 and Form 2
// const nextBtn1 = form1.querySelector('.l-btn');
// const backBtn2 = form2.querySelector('.l-btn2');

// // Add a click event listener to the Next button of Form 1
// nextBtn1.addEventListener('click', function(e) {
//   e.preventDefault(); // Prevent form submission

//   // Check if all fields in Form 1 are filled
//   const name = form1.querySelector('input[type="text"]').value;
//   const checkinDate = form1.querySelector('#checkin-date').value;
//   const noOfDays = form1.querySelector('input[type="number"]').value;
//   const noOfPersons = form1.querySelector('#persons').value;
//   const roomType = form1.querySelector('#room-type').value;
//   const amenities = form1.querySelector('#amenities').value;

//   if (name && checkinDate && noOfDays && noOfPersons && roomType !== 'select' && amenities !== 'select') {
//     // Calculate room rate based on room type
//     let roomRate = 0;
//     if (roomType === 'deluxe') {
//       roomRate = 2500;
//     } else if (roomType === 'suite') {
//       roomRate = 4000;
//     }

//     // Calculate amenities cost based on selected amenities
//     let amenitiesCost = 0;
//     if (amenities === 'AC') {
//       amenitiesCost = 1000;
//     } else if (amenities === 'Locker') {
//       amenitiesCost = 300;
//     } else if (amenities === 'Both') {
//       amenitiesCost = 1300;
//     }

//     // Calculate total cost
//     const totalCost = roomRate * noOfDays + amenitiesCost;

//     // Update the values in Form 2
//     form2.querySelector('.f-name').textContent = name;
//     form2.querySelector('#person2 p').textContent = noOfPersons;
//     form2.querySelector('#d2 p').textContent = noOfDays;
//     form2.querySelector('#r-rate p').textContent = roomRate;
//     form2.querySelector('#a-rate p').textContent = amenitiesCost;
//     form2.querySelector('#t-cost p').textContent = totalCost;

//     // Hide Form 1
//     form1.style.display = 'none';

//     // Display Form 2
//     form2.style.display = 'block';
//   } else {
//     alert('Please fill in all fields before proceeding.'); // Display an error message if any field is empty
//   }
// });

// // Add a click event listener to the Back button of Form 2
// backBtn2.addEventListener('click', function(e) {
//   e.preventDefault(); // Prevent form submission

//   // Hide Form 2
//   form2.style.display = 'none';

//   // Display Form 1
//   form1.style.display = 'block';
// });

// Get the Form 1, Form 2, and Form 3 elements
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

// Get the Next and Back buttons of Form 1, Form 2, and Form 3
const nextBtn1 = form1.querySelector(".l-btn");
const backBtn2 = form2.querySelector(".l-btn2");
const nextBtn2 = form2.querySelector(".l-btn3");
const backBtn3 = form3.querySelector(".l-btn4");
const confirmBtn = form3.querySelector(".l-btn5");

// Add a click event listener to the Next button of Form 1
nextBtn1.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission

  // Check if all fields in Form 1 are filled
  const name = form1.querySelector('input[type="text"]').value;
  const checkinDate = form1.querySelector('#checkin-date').value;
  const noOfDays = form1.querySelector('input[type="number"]').value;
  const noOfPersons = form1.querySelector('#persons').value;
  const roomType = form1.querySelector('#room-type').value;
  const amenities = form1.querySelector('#amenities').value;

  if (name && checkinDate && noOfDays && noOfPersons && roomType !== 'select' && amenities !== 'select') {
    // Calculate room rate based on room type
    let roomRate = 0;
    if (roomType === 'deluxe') {
      roomRate = 2500;
    } else if (roomType === 'suite') {
      roomRate = 4000;
    }

    // Calculate amenities cost based on selected amenities
    let amenitiesCost = 0;
    if (amenities === 'AC') {
      amenitiesCost = 1000;
    } else if (amenities === 'Locker') {
      amenitiesCost = 300;
    } else if (amenities === 'Both') {
      amenitiesCost = 1300;
    }


 

    // Calculate additional charges based on the number of persons
    let additionalCharges = 0;
    if (noOfPersons > 2) {
      additionalCharges = (noOfPersons - 2) * 1000;
    }

    // Calculate total cost
    const totalCost = roomRate * noOfDays + amenitiesCost + additionalCharges;

    // Update the values in Form 2
    form2.querySelector('.f-name').textContent = name;
    form2.querySelector('#person2 p').textContent = noOfPersons;
    form2.querySelector('#d2 p').textContent = noOfDays;
    form2.querySelector('#r-rate p').textContent = roomRate;
    form2.querySelector('#a-rate p').textContent = amenitiesCost;
    form2.querySelector('#add-cost p').textContent = additionalCharges;
    form2.querySelector('#t-cost p').textContent = totalCost;

    // Hide Form 1
    form1.style.display = 'none';

    // Display Form 2
    form2.style.display = 'block';
  } else {
    alert('Please fill in all fields before proceeding.'); // Display an error message if any field is empty
  }
});


// Add a click event listener to the Back button of Form 2
backBtn2.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  // Hide Form 2
  form2.style.display = "none";

  // Display Form 1
  form1.style.display = "block";
});

// Add a click event listener to the Next button of Form 2
nextBtn2.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission

  // Check if the advance payment field is filled
  const advancePayment = form2.querySelector("#advance").value;

  if (advancePayment) {
    // Update the value in Form 3
    form3.querySelector(".f-name").textContent =
      form2.querySelector(".f-name").textContent;
    form3.querySelector("#d3 p").textContent =
      form2.querySelector("#d2 p").textContent;
    form3.querySelector("#t-cost p").textContent =
      form2.querySelector("#t-cost p").textContent;
    form3.querySelector("#balance").textContent =
      parseInt(form2.querySelector("#t-cost p").textContent) -
      parseInt(advancePayment);

    // Hide Form 2
    form2.style.display = "none";

    // Display Form 3
    form3.style.display = "block";
  } else {
    alert("Please provide the advance payment before proceeding."); // Display an error message if advance payment is not provided
  }
});

// Add a click event listener to the Back button of Form 3
backBtn3.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  // Hide Form 2
  form3.style.display = "none";

  // Display Form 1
  form2.style.display = "block";
});

// Add a click event listener to the Next button of Form 3
confirmBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  // Display the confirmation message
  const bookingData = {
    name: form3.querySelector(".f-name").textContent,
    balance: form3.querySelector("#balance").textContent
  };

  alert(
    `Your booking has been confirmed!\n\nName: ${bookingData.name}\nBalance: ${bookingData.balance}`
  );

  // Reset the form and go back to Form 1
  form3.reset();
  form3.style.display = "none";
  form1.style.display = "block";
});

