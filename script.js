let downloadCounts = {};

// Retrieve download counts from localStorage
if (localStorage.getItem('downloadCounts')) {
  downloadCounts = JSON.parse(localStorage.getItem('downloadCounts'));
} else {
  downloadCounts = {
    android: 0,
    ios: 0
  };
  localStorage.setItem('downloadCounts', JSON.stringify(downloadCounts));
}

function downloadFile(os) {
  let url;
  if (os === 'android') {
    url = 'https://play.google.com/store/apps/details?id=com.linkedin.android&pcampaignid=web_share';
  } else if (os === 'ios') {
    url = 'path_to_ios_application';
  }

  // Create a new anchor element
  const a = document.createElement('a');
  a.href = url;
  a.download = 'filename'; // Set the filename you want to save as
  a.click();

  // Increment download count
  downloadCounts[os]++;

  // Update the download count in the table
  document.getElementById(`${os}-downloads`).textContent = downloadCounts[os];

  // Save the updated download counts to localStorage
  localStorage.setItem('downloadCounts', JSON.stringify(downloadCounts));
}

// Initialize the download counts in the table
document.getElementById('android-downloads').textContent = downloadCounts.android;
document.getElementById('ios-downloads').textContent = downloadCounts.ios;
