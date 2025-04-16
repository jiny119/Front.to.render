document.getElementById('generateButton').addEventListener('click', function() {
  let text = document.getElementById('textInput').value;

  if (text.trim() !== '') {
    // Actual backend call
    fetch('https://text-to-apk-backend.onrender.com/generate-apk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.apk_url) {
        document.getElementById('apkLinkSection').style.display = 'block';
        document.getElementById('apkLink').href = data.apk_url;
      } else {
        alert('APK generate nahi ho saka.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Server se connect nahi ho saka.');
    });

  } else {
    alert('Please enter some text to generate the APK.');
  }
});
