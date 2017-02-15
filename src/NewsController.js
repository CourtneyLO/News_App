window.onload = function() {
    var newsApp = new NewsApp();
    var displayNews = new DisplayNews()
    newsApp.getNews(displayNews.newsHeadlines.bind(newsApp))
}
