function NewsApp() {

}

  NewsApp.prototype.getNews = function(displayNews) {
    console.log("Get News")
    this.xhr = new XMLHttpRequest()
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&from-date=2017-02-15"
    this.xhr.open("GET", url , true);
    this.xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        this.myText = JSON.parse(this.responseText);
        console.log(this.myText.response.results[0].webTitle)
        displayNews();
      }
    }
    this.xhr.send()
  }


  NewsApp.prototype.displayNews = function() {
    console.log("display News")
    var headline = document.getElementById("headline")
    console.log(this.xhr.myText.response.results.length)
  for (var i = 0; i < this.xhr.myText.response.results.length; i += 1) {
    headline.innerHTML += "<li id='headline'>" + this.xhr.myText.response.results[i].webTitle + "</li>"
  }
  }
