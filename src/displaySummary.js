function DisplaySummary() {

}

  DisplaySummary.prototype.showSummary = function(heading, summary) {
    var HeadingSummary = document.getElementById("heading")
    HeadingSummary.innerHTML = heading
    var indivdualSummary = document.getElementById("summary")
    indivdualSummary.innerHTML = "<p>" + summary + "<p>"
  }
