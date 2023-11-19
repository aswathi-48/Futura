document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = this.dataset.value;
  
        if (value === 'AC') {           
          display.value = ''; // Clear the display
        } else if (value ==='DEL') {
          display.value = display.value.slice(0,-1) ;// Delete the last character
        } else if (value === '=') {
          try {
            display.value = eval(display.value); // Evaluate and display the result
          } catch (error) {
            display.value = 'Error';
          }
        } else {
          display.value += value; // Append the clicked button value to the display
        }
      });
    });
  });