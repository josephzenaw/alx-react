import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import CSS file

$(document).ready(function() {
  $('body').prepend('<div id="logo"></div>'); // Add logo div at the top
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Update counter function
  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind debounce function from Lodash
  const debouncedUpdateCounter = _.debounce(updateCounter, 300);
  $('button').on('click', debouncedUpdateCounter);
});

