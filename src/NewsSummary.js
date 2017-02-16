function NewsSummary() {


}

NewsSummary.prototype.getSummary = function(articleURL) {
  this.xhr = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + articleURL
  this.xhr.open("GET", url , true)
  this.xhr.onreadystatechange = function() {
    this.displaySummary = new DisplaySummary();
    if(this.readyState == 4 && this.status == 200){
      this.mySummary = JSON.parse(this.responseText)
     this.displaySummary.showSummary(this.mySummary.sentences[0])
    }
  }
  this.xhr.send()
}
