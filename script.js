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
    url = 'https://en.softonic.com/download-launch?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb3dubG9hZFR5cGUiOiJyaXNlSW5zdGFsbGVyIiwiZG93bmxvYWRVcmwiOiJodHRwczovL2QzbHYyaTc1YzN1amdxLmNsb3VkZnJvbnQubmV0L2N1cnJlbnQvaWQvdjguNDYwLjQ2OS42Ny4wIiwiYXBwSWQiOiJmOTZkZjg3ZC05MjZmLTQ5NTQtYmY1OC1mMzc3YTU3M2E2MzAiLCJwbGF0Zm9ybUlkIjoid2luZG93cyIsImlhdCI6MTcyMDc2NDQ4MSwiZXhwIjoxNzIwNzY4MDgxfQ.tI071twleG7qGGR2dpAFP_dRLCdr_DuwtCc-nas5Sq0';
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