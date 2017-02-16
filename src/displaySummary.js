function DisplaySummary() {

}

  DisplaySummary.prototype.showSummary = function(summary) {
    var indivdualSummary = document.getElementById("summary")
    indivdualSummary.innerHTML = "<p>" + summary + "<p>"
  }
