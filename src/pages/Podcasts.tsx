import React from 'react';

function Podcasts() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4 mb-4">Bacon Sale Podcast</h1>
          <p className="lead">
            If you love all things pop culture, movies, TV shows, music, and
            more, then you'll love Bacon Sale! Hosts Kent, Joel, and Jacob bring
            their unique brand of humor and insights to all your favorite
            topics.
          </p>
          <a
            href="https://baconsale.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-primary mt-3"
          >
            Listen Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
