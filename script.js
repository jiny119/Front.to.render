// Wait until the window is fully loaded
window.onload = function() {
  // Add event listener to the button
  document.getElementById('generateButton').addEventListener('click', function() {
    let text = document.getElementById('textInput').value;  // Get the value from the text input field

    if (text.trim() !== '') {  // Check if the text input is not empty
      // Make the fetch call to the backend
      fetch('/api/generate-apk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',  // Sending JSON content
        },
        body: JSON.stringify({ text: text })  // Sending the input text to the backend
      })
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        if (data && data.apk_url) {
          // If response contains APK URL, show the download section
          document.getElementById('apkLinkSection').style.display = 'block';
          document.getElementById('apkLink').href = data.apk_url;  // Set the APK URL in the link
        } else {
          alert('APK generate nahi ho saka.');  // Error message if APK URL is not returned
        }
      })
      .catch(error => {
        console.error('Error:', error);  // Log any errors that occur
        alert('Server se connect nahi ho saka.');  // Error message if request fails
      });
    } else {
      alert('Please enter some text to generate the APK.');  // Alert if no text is entered
    }
  });
};
