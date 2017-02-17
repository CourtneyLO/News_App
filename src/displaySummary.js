function DisplaySummary() {

}

  DisplaySummary.prototype.showSummary = function(heading, summary, imageSummary) {
    var HeadingSummary = document.getElementById("heading")
    HeadingSummary.innerHTML = heading
    var indivdualSummary = document.getElementById("summary")
    indivdualSummary.innerHTML = "<p>" + summary + "<p>"
    var image = document.getElementById("image")
    image.src = String(imageSummary);
  }
