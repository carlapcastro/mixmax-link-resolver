# Spotify Link Resolver

This repo holds the Mixmax link resolver integration for Spotify links (e.g. https://open.spotify.com/track/2igGHzJ3ZVZdCXjNNYlVSo) and URIs (e.g. spotify:track:2igGHzJ3ZVZdCXjNNYlVSo).

## Example usage
If running locally, the url should look like the following:

For URL:
```
https://localhost:9146/resolver?url=https://open.spotify.com/user/spotify/playlist/37i9dQZF1DWXLeA8Omikj7
```
For URI:
```
https://localhost:9146/resolver?url=spotify:user:spotify:playlist:37i9dQZF1DWXLeA8Omikj7
```
where the url parameter is set to the Spotify URL or URI.

## Running locally

1. Install using `npm install`
2. Run using `npm start`

## Running The Tests

Make sure you have nodeunit and nodeunit-express installed by running:
```
npm install
```
To run the test:
```
nodeunit tests/unit/resolver_test.js
```
