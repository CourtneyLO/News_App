function DisplayNews() {

}

DisplayNews.prototype.newsHeadlines = function () {
  var headline = document.getElementById("headline")
  for (var i = 0; i < this.xhr.myText.response.results.length; i += 1) {
    headline.innerHTML += "<li id='headline'>" + this.xhr.myText.response.results[i].webTitle + "</li>"
  }
  }
