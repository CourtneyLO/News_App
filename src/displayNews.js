function DisplayNews() {

}

DisplayNews.prototype.newsHeadlines = function() {
  var headline = document.getElementById("headline")
  for (var i = 0; i < this.xhr.myText.response.results.length; i ++) {
    var number = i + 1
    headline.innerHTML += '<li> <a id="headline" href="#article/' + number + '">' + this.xhr.myText.response.results[i].webTitle + '</a></li>'
  }
}

DisplayNews.prototype.newsArticle = function() {
  var newsArticleId = window.location.hash.split("/")[1] - 1;
  var date = document.getElementById("date");
  var article = document.getElementById("summary");
  headline.innerHTML = this.xhr.myText.response.results[newsArticleId].webTitle
  date.innerHTML = this.xhr.myText.response.results[newsArticleId].fields.lastModified
  article.innerHTML = this.xhr.myText.response.results[newsArticleId].fields.bodyText
}

DisplayNews.prototype.getNewsSummary = function() {
  this.newsSummary = new NewsSummary()
  var newsArticleId = window.location.hash.split("/")[1] - 1;
  var articleURL = this.xhr.myText.response.results[newsArticleId].webUrl
  var articleHeading = this.xhr.myText.response.results[newsArticleId].webTitle
  return this.newsSummary.getSummary(articleHeading, articleURL)
}
