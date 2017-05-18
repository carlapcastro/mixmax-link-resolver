var request = require('nodeunit-express');
var app = require('../../app');


exports.testUriSuccess = {
  function(test){
    var express = request(app);
    var expected = '<iframe src="https://open.spotify.com/embed?uri=spotify:track:6hhq4YSYbt8ajR3j3mVcHv" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
    express.get('/resolver?url=spotify:track:6hhq4YSYbt8ajR3j3mVcHv').expect(function(response) {
      var res_body = JSON.parse(response.body);
      test.equal(res_body.body, expected);
      test.equal(response.statusCode, 200);
      test.done();
      express.close();
    });
  }
}

exports.testUrlSuccess = {
  function(test){
    var express = request(app);
    var expected = '<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DWXLeA8Omikj7" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';
    express.get('/resolver?url=https://open.spotify.com/user/spotify/playlist/37i9dQZF1DWXLeA8Omikj7').expect(function(response) {
      var res_body = JSON.parse(response.body);
      test.equal(res_body.body, expected);
      test.equal(response.statusCode, 200);
      test.done();
      express.close();
    });
  }
}

exports.testNoUrlParameter = {
  function(test){
    var express = request(app);
    var expected = 'No URL parameter in the request';
    express.get('/resolver').expect(function(response) {
      test.equal(response.body, expected);
      test.equal(response.statusCode, 400);
      test.done();
      express.close();
    });
  }
}

exports.testUriFailure = {
  function(test){
    var express = request(app);
    var expected = 'Invalid URL format';
    express.get('/resolver?url=spotify:track:TooLittleChars').expect(function(response) {
      test.equal(response.body, expected);
      test.equal(response.statusCode, 400);
      test.done();
      express.close();
    });
  }
}

exports.testUrlFailure = {
  function(test){
    var express = request(app);
    var expected = 'Invalid URL format';
    express.get('/resolver?url=https://open.spotify.com/37i9dQZF1DWXLeA8Omikj7TooManyChars').expect(function(response) {
      test.equal(response.body, expected);
      test.equal(response.statusCode, 400);
      test.done();
      express.close();
    });
  }
}
