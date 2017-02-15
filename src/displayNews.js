function DisplayNews() {

}

  DisplayNews.prototype.newsHeadlines = function () {
    var headline = document.getElementById("headline")
      for (var i = 0; i < this.xhr.myText.response.results.length; i += 1) {
      headline.innerHTML += '<li> <a id="headline" href="#articles' + i + '">' + this.xhr.myText.response.results[i].webTitle + '</a></li>'
  }
  }
