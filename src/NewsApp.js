function NewsApp() {

}

  NewsApp.prototype.getNews = function(displayNews) {
    this.xhr = new XMLHttpRequest()
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all&from-date=2016-02-15"
    this.xhr.open("GET", url , true);
    this.xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        this.myText = JSON.parse(this.responseText);
        // console.log(this.myText.response.results[0].fields.thumbnail)
        displayNews();
      }
    }
    this.xhr.send()
    // https://media.guim.co.uk/279c03843752f3ebdc0b6888bf90f26d58edc16b/0_199_4170_2502/500.jpg
  }

  // "https://media.guim.co.uk/ac5e71f86b4583776d7d84cf307f4e21d05379ae/0_913_3382_2027/500.jpg"
// "https://media.guim.co.uk/7fda27fbbda6a39dffe463b8ac08cb51c8009603/294_343_3178_1906/500.jpg"
