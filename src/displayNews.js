function DisplayNews() {

}

  DisplayNews.prototype.newsHeadlines = function () {
    var headline = document.getElementById("headline")
      for (var i = 0; i < this.xhr.myText.response.results.length; i += 1) {
        var number = i + 1
      headline.innerHTML += '<li> <a id="headline" href="#article' + number + '">' + this.xhr.myText.response.results[i].webTitle + '</a></li>'
  }
  }
