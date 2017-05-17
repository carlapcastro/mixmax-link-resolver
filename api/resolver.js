
// The API that returns the in-email representation.
module.exports = function(req, res) {
  if (!Object.keys(req.query).includes('url')) {
    res.status(400).send('No URL parameter in the request');
    return;
  }
  var url = req.query.url.trim();
  var uri;

  // Spotify formats for urls and uris:
  var isUri = url.match(/spotify:.*:([a-zA-Z0-9]{22})$/);
  var isUrl = url.match(/spotify\.com\/.*\/([a-zA-Z0-9]{22})/);

  if (isUri) {
    uri = url;
  } else if (isUrl) {
    uri = 'spotify' + url.substring(url.indexOf('.com') + 4).split('/').join(':');
  } else {
    res.status(400).send('Invalid URL format');
    return;
  }

  var html = '<iframe src="https://open.spotify.com/embed?uri=' + uri
    + '" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
  res.json({
    body: html
  });
};
