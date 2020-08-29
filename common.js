(function() {
  const url = encodeURIComponent(location.href);
  const title = encodeURIComponent(document.title);

  let link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://twitter.com/intent/tweet' +
              '?text=' + title +
              '&url=' + url +
              '&hashtags=og,opengraph';
  link.textContent = 'Share on Twitter';

  link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://www.facebook.com/dialog/share' +
              '?display=popup&app_id=490025408049997' +
              '&quote=' + title +
              '&href=' + url +
              // '&redirect_uri=' + url +
              '&hashtag=' + encodeURIComponent('#opengraph');
  link.textContent = 'Share on Facebook';

  link = document.body.appendChild(document.createElement('a'));
  link.href = 'https://www.linkedin.com/shareArticle' +
              '?mini=true' +
              '&title=' + title +
              '&url=' + url +
              '&summary=' + encodeURIComponent('URL friendly text') +
              '&source=WebSite';
  link.textContent = 'Share on LinkedIn';

  document.body.appendChild(document.createElement('br'));

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
