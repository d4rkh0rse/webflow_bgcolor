<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the custom attribute 'data-color'
    var elements = document.querySelectorAll('[data-color]');
    
    // Loop through each element and set its background color
    elements.forEach(function(element) {
      // Get the color value from the custom attribute
      var color = element.getAttribute('data-color');
      // Set the background color of the element
      element.style.backgroundColor = color;
    });
  });
</script>
