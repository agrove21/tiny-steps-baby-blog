// // Get the input and display elements for smile dates
// const smileDateInput = document.getElementById('DateInput');
// const smileDateContainer = document.getElementById('DateContainer');
// const smileDateDisplay = document.getElementById('DateDisplay');
// const resetDateBtn = document.getElementById('resetDateBtn');


//   window.addEventListener('DOMContentLoaded', () => {
//     let savedDate = localStorage.getItem('smileDate');
//     if (savedDate) {
//       const formattedDate = dayjs(savedDate).format('MM-DD-YYYY'); // Format date
//       smileDateContainer.style.display = 'none';
//       smileDateDisplay.textContent = `On ${formattedDate}`;
//       smileDateDisplay.classList.remove('hidden');
//       resetDateBtn.classList.remove('hidden'); // Show the reset button

//     }
//   });

//   // Save the selected date to local storage
//   smileDateInput.addEventListener('input', (event) => {
//     const selectedDate = event.target.value;
//     localStorage.setItem('smileDate', selectedDate);

//   let formattedDate = dayjs(selectedDate).format('MM-DD-YYYY'); // Format date
//     smileDateContainer.style.display = 'none';
//     smileDateDisplay.textContent = `On ${formattedDate}`;
//     smileDateDisplay.classList.remove('hidden');
//     resetDateBtn.classList.remove('hidden'); // Show the reset button
//   });
//     resetDateBtn.addEventListener('click', () => {
//         localStorage.removeItem('smileDate'); // Remove from localStorage
//         smileDateDisplay.classList.add('hidden'); // Hide the date display
//         resetDateBtn.classList.add('hidden'); // Hide the reset button
//         smileDateContainer.style.display = 'block'; // Show the input again
//         smileDateInput.value = ''; // Clear the input field
//       });

// // saving sleep dates
// const sleepDateInput = document.getElementById('sleepDateInput');
// const sleepDateContainer = document.getElementById('sleepDateContainer');
// const sleepDateDisplay = document.getElementById('sleepDateDisplay');
// const resetDateBtn2 = document.getElementById('resetDateBtn2');


//   window.addEventListener('DOMContentLoaded', () => {
//     let savedDate = localStorage.getItem('sleepDate');
//     if (savedDate) {
//       const formattedDate = dayjs(savedDate).format('MM-DD-YYYY'); // Format date
//       sleepDateContainer.style.display = 'none';
//       sleepDateDisplay.textContent = `On ${formattedDate}`;
//       sleepDateDisplay.classList.remove('hidden');
//       resetDateBtn2.classList.remove('hidden'); // Show the reset button

//     }
//   });

//   // Save the selected date to local storage
//   sleepDateInput.addEventListener('input', (event) => {
//     const selectedDate = event.target.value;
//     localStorage.setItem('sleepDate', selectedDate);

//   const formattedDate = dayjs(selectedDate).format('MM-DD-YYYY'); // Format date
//     sleepDateContainer.style.display = 'none';
//     sleepDateDisplay.textContent = `On ${formattedDate}`;
//     sleepDateDisplay.classList.remove('hidden');
//     resetDateBtn2.classList.remove('hidden'); // Show the reset button

// });

// resetDateBtn2.addEventListener('click', () => {
//     localStorage.removeItem('sleepDate'); // Remove from localStorage
//     sleepDateDisplay.classList.add('hidden'); // Hide the date display
//     resetDateBtn2.classList.add('hidden'); // Hide the reset button
//     sleepDateContainer.style.display = 'block'; // Show the input again
//     sleepDateInput.value = ''; // Clear the input field
//   });

// // saving date for first word

// const wordDateInput = document.getElementById('wordDateInput');
// const wordDateContainer = document.getElementById('wordDateContainer');
// const wordDateDisplay = document.getElementById('wordDateDisplay');
// const resetDateBtn3 = document.getElementById('resetDateBtn3');


//   window.addEventListener('DOMContentLoaded', () => {
//     const savedDate = localStorage.getItem('wordDate');
//     if (savedDate) {
//       const formattedDate = dayjs(savedDate).format('MM-DD-YYYY'); 
//       wordDateContainer.style.display = 'none';
//       wordDateDisplay.textContent = `On ${formattedDate}`;
//       wordDateDisplay.classList.remove('hidden');
//       resetDateBtn3.classList.remove('hidden'); // Show the reset button

//     }
//   });

//   // Save the selected date to local storage
//   wordDateInput.addEventListener('input', (event) => {
//     const selectedDate = event.target.value;
//     localStorage.setItem('wordDate', selectedDate);

//   const formattedDate = dayjs(selectedDate).format('MM-DD-YYYY'); 
//     wordDateContainer.style.display = 'none';
//     wordDateDisplay.textContent = `On ${formattedDate}`;
//     wordDateDisplay.classList.remove('hidden');
//     resetDateBtn3.classList.remove('hidden'); // Show the reset button

// });
// resetDateBtn3.addEventListener('click', () => {
//     localStorage.removeItem('wordDate'); // Remove from localStorage
//     wordDateDisplay.classList.add('hidden'); // Hide the date display
//     resetDateBtn3.classList.add('hidden'); // Hide the reset button
//     wordDateContainer.style.display = 'block'; // Show the input again
//     wordDateInput.value = ''; // Clear the input field
//   });

// // dates for solid food

// const foodDateInput = document.getElementById('foodDateInput');
// const foodDateContainer = document.getElementById('foodDateContainer');
// const foodDateDisplay = document.getElementById('foodDateDisplay');
// const resetDateBtn4 = document.getElementById('resetDateBtn4');


//   window.addEventListener('DOMContentLoaded', () => {
//     const savedDate = localStorage.getItem('foodDate');
//     if (savedDate) {
//       const formattedDate = dayjs(savedDate).format('MM-DD-YYYY'); // Format date
//       foodDateContainer.style.display = 'none';
//       foodDateDisplay.textContent = `On ${formattedDate}`;
//       foodDateDisplay.classList.remove('hidden');
//       resetDateBtn4.classList.remove('hidden'); // Show the reset button

//     }
//   });

//   // Save the selected date to local storage
//   foodDateInput.addEventListener('input', (event) => {
//     const selectedDate = event.target.value;
//     localStorage.setItem('foodDate', selectedDate);

//   const formattedDate = dayjs(selectedDate).format('MM-DD-YYYY'); // Format date
//     foodDateContainer.style.display = 'none';
//     foodDateDisplay.textContent = `On ${formattedDate}`;
//     foodDateDisplay.classList.remove('hidden');
//     resetDateBtn4.classList.remove('hidden'); // Show the reset button

// });
// resetDateBtn4.addEventListener('click', () => {
//     localStorage.removeItem('foodDate'); // Remove from localStorage
//     foodDateDisplay.classList.add('hidden'); // Hide the date display
//     resetDateBtn4.classList.add('hidden'); // Hide the reset button
//     foodDateContainer.style.display = 'block'; // Show the input again
//     foodDateInput.value = ''; // Clear the input field
//   });

// Utility function to handle date storage and display
function handleDate(type, inputElement, containerElement, displayElement, resetButton) {
    // Load saved date from localStorage
    window.addEventListener('DOMContentLoaded', () => {
        const savedDate = localStorage.getItem(type);
        if (savedDate) {
            const formattedDate = dayjs(savedDate).format('MM-DD-YYYY');
            containerElement.style.display = 'none';
            displayElement.textContent = `On ${formattedDate}`;
            displayElement.classList.remove('hidden');
            resetButton.classList.remove('hidden');
        }
    });

    // Save the selected date to local storage
    inputElement.addEventListener('change', (event) => { // Change 'input' to 'change'
        const selectedDate = event.target.value;
        localStorage.setItem(type, selectedDate);
        const formattedDate = dayjs(selectedDate).format('MM-DD-YYYY');
        containerElement.style.display = 'none';
        displayElement.textContent = `On ${formattedDate}`;
        displayElement.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    });

    // Reset the date storage and UI
    resetButton.addEventListener('click', () => {
        localStorage.removeItem(type);
        displayElement.classList.add('hidden');
        resetButton.classList.add('hidden');
        containerElement.style.display = 'block';
        inputElement.value = '';
    });
}

// Get elements for smile dates
const smileDateInput = document.getElementById('DateInput');
const smileDateContainer = document.getElementById('DateContainer');
const smileDateDisplay = document.getElementById('DateDisplay');
const resetDateBtn = document.getElementById('resetDateBtn');
handleDate('smileDate', smileDateInput, smileDateContainer, smileDateDisplay, resetDateBtn);

// Get elements for sleep dates
const sleepDateInput = document.getElementById('sleepDateInput');
const sleepDateContainer = document.getElementById('sleepDateContainer');
const sleepDateDisplay = document.getElementById('sleepDateDisplay');
const resetDateBtn2 = document.getElementById('resetDateBtn2');
handleDate('sleepDate', sleepDateInput, sleepDateContainer, sleepDateDisplay, resetDateBtn2);

// Get elements for first word dates
const wordDateInput = document.getElementById('wordDateInput');
const wordDateContainer = document.getElementById('wordDateContainer');
const wordDateDisplay = document.getElementById('wordDateDisplay');
const resetDateBtn3 = document.getElementById('resetDateBtn3');
handleDate('wordDate', wordDateInput, wordDateContainer, wordDateDisplay, resetDateBtn3);

// Get elements for solid food dates
const foodDateInput = document.getElementById('foodDateInput');
const foodDateContainer = document.getElementById('foodDateContainer');
const foodDateDisplay = document.getElementById('foodDateDisplay');
const resetDateBtn4 = document.getElementById('resetDateBtn4');
handleDate('foodDate', foodDateInput, foodDateContainer, foodDateDisplay, resetDateBtn4);
