const home_cover_links = {
  news: 'html-pages/news.html',
  about: 'html-pages/about.html'
};

document.querySelector("#home-cover-buttons").innerHTML = `
  <a href="${home_cover_links.news}" class="buttonlink">News</a>
  <a href="${home_cover_links.about}" class="buttonlink">About us</a>
`;