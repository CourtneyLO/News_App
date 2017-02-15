function NewsApp() {

}

  NewsApp.prototype.getNews = function() {
    console.log("Get News")
    this.xhr = new XMLHttpRequest()
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&from-date=2017-02-15"
    this.xhr.open("GET", url , true);
    this.xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        this.myText = JSON.parse(this.responseText);
      }
    }
    this.xhr.send()
  }
