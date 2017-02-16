window.onload = function() {
    var newsApp = new NewsApp();
    var displayNews = new DisplayNews()
    window.addEventListener("hashchange", displayNews.myNewsSummary.bind(newsApp))
    newsApp.getNews(displayNews.newsHeadlines.bind(newsApp))
}
