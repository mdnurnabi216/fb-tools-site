function downloadVideo() {
  const link = document.getElementById("fbLink").value;

  if (link === "") {
    alert("Please paste Facebook video link");
    return;
  }

  window.location.href =
    "/download.html?url=" + encodeURIComponent(link);
}
