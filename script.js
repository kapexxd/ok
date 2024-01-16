function validateForm() {
  const upvote = document.getElementById("upvote").value;
  const downvote = document.getElementById("downvote").value;
  const additionalCar = document.getElementById("additional-car").value;

  if (!upvote && !downvote && additionalCar.trim() === "") {
    alert("Please fill in at least one field before submitting the data.");
    return false;
  }

  return true;
}

function showInfo(title, description) {
  document.getElementById(
    "enlargedInfo"
  ).innerHTML = `<h2>${title}</h2><p>${description}</p>`;
  document.getElementById("enlargedContainer").style.display = "block";
}

function hideInfo() {
  document.getElementById("enlargedContainer").style.display = "none";
}
$(document).ready(function () {
  var timeoutId;

  // Replace '#image-container' with the actual container ID for your images
  $(".carsListItem").on("mouseover", ".carSmall", function () {
    var imageUrl = $(this).attr("src");
    clearTimeout(timeoutId); // Cancel the removal timeout

    $("body")
      .css({
        position: "relative",
      })
      .prepend('<div class="background-layer"></div>');
    $(".background-layer").css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      "background-image": "url(" + imageUrl + ")",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      filter: "blur(20px)",
      opacity: "1",
      "z-index": "-1",
      transition: "opacity 0.5s ease, filter 0.5s ease",
    });
  });

  // Reset background to default when not hovering
  $(".carsListItem").on("mouseout", ".carSmall", function () {
    $(".background-layer").css({
      opacity: "0",
    });

    // Set a timeout to remove the background layer after the transition
    timeoutId = setTimeout(function () {
      $(".background-layer").remove();
    }, 500); // Adjust the timeout to match the transition duration
  });
});
