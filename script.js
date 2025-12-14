function downloadVideo() {
  const link = document.getElementById("fbLink").value;

  if (link === "") {
    alert("Please paste Facebook video link");
    return;
  }

  // Redirect to downloader page
  window.location.href = 
    "https://fdown.net/download.php?url=" + encodeURIComponent(link);
}
