window.onload = function() {
    console.log("viewController")
    var newsApp = new NewsApp();
    newsApp.getNews(newsApp.displayNews.bind(newsApp))
}
