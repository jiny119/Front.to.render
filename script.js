document.getElementById('generateButton').addEventListener('click', function () {
  let text = document.getElementById('textInput').value;

  if (text.trim() !== '') {
    // Backend API call
    fetch('/api/generate-apk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.apk_url) {
          document.getElementById('apkLinkSection').style.display = 'block';
          document.getElementById('apkLink').href = data.apk_url;
          document.getElementById('apkLink').textContent = 'Download APK';
        } else {
          alert('Backend ne koi APK link return nahi kiya.');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        alert('Server se connection nahi ho saka. Please try again later.');
      });

  } else {
    alert('Please enter some text to generate the APK.');
  }
});
