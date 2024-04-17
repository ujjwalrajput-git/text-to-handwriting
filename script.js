// Function to load fonts from the "fonts" folder
function loadFonts() {
    var fontSelect = document.getElementById('fontSelect');
    var fontsFolder = 'fonts/';

    // Array of font filenames (with file extensions)
    var fontFilenames = ['font1.ttf', 'font2.otf', 'font3.ttf'];

    fontFilenames.forEach(function (filename) {
        var option = document.createElement('option');
        option.textContent = filename.split('.')[0]; // Display font name without extension
        option.value = filename;
        fontSelect.appendChild(option);
    });
}

// Call the function to load fonts when the page loads
window.addEventListener('load', function () {
    loadFonts();

    // Set default font selection and trigger change event
    var defaultFont = 'font1.ttf';
    document.getElementById('fontSelect').value = defaultFont;
    document.getElementById('fontSelect').dispatchEvent(new Event('change'));
});

// Function to handle font selection
document.getElementById('fontSelect').addEventListener('change', function() {
    var selectedFont = this.value;
    var outputTextHandwritten = document.getElementById('outputTextHandwritten');
    var outputHeading = document.querySelector('.output-area h2');
  
    // Dynamically load the selected font using @font-face
    var fontFace = new FontFace('selectedFont', 'url(fonts/' + selectedFont + ')');
    fontFace.load().then(function(loadedFont) {
      // Add the loaded font to the document
      document.fonts.add(loadedFont);
  
      // Set the font family for both output areas
      outputTextHandwritten.style.fontFamily = 'selectedFont';
      outputHeading.style.fontFamily = 'selectedFont'; // Update font of the <h2> element
  
      console.log('Font loaded and applied:', selectedFont);
    }).catch(function(error) {
      console.error('Font loading failed:', error);
    });
  });
  

// Function to handle text conversion
document.getElementById('convertBtn').addEventListener('click', function () {
    var inputText = document.getElementById('inputText').value;
    var outputTextHandwritten = document.getElementById('outputTextHandwritten');
    outputTextHandwritten.textContent = inputText;
});
