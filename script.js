function downloadVideo() {
  const link = document.getElementById("fbLink").value;

  if (link === "") {
    alert("Please paste Facebook video link");
    return;
  }

  alert("Link received:\n" + link);
}
