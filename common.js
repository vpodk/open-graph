(function() {
  let url = encodeURIComponent(location.href);
  let link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://twitter.com/intent/tweet' +
              '?text=' + encodeURIComponent(document.title) +
              '&url=' + url +
              '&hashtags=og,opengraph';
  link.textContent = 'Tweet';

  link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://www.facebook.com/dialog/share' +
              '?display=popup&app_id=490025408049997' +
              '&quote=' + encodeURIComponent(document.title) +
              '&href=' + url +
              // '&redirect_uri=' + url +
              '&hashtag=' + encodeURIComponent('#opengraph');
  link.textContent = 'Share on Facebook';

  link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://www.linkedin.com/shareArticle' +
              '?mini=true' +
              '&title=' + encodeURIComponent(document.title) +
              '&url=' + url +
              '&summary=' + encodeURIComponent('URL friendly text') +
              '&source=WebSite';
  link.textContent = 'Share on LinkedIn';

  link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://cards-dev.twitter.com/validator?url=' + url;
  link.textContent = 'Tweet Card Validator';

  link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://developers.facebook.com/tools/debug/?q=' + url;
  link.textContent = 'Facebook Debugger';

  link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://www.linkedin.com/post-inspector/inspect/' + url;
  link.textContent = 'LinkedIn Post Inspector';
})();
