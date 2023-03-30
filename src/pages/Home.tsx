import React from 'react';
import JoelHiltonHeadshot from './JoelHiltonHeadshot.jpg';

function Home() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={JoelHiltonHeadshot}
            alt="Joel Hilton"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4 mb-4">
            Joel Hilton's Private Movie Collection
          </h1>
          <p className="lead">
            A great movie can be like poetry, a beautiful melody or a
            breathtaking painting.
          </p>
          <p>
            It can make you laugh, cry, ponder, and ultimately leave you feeling
            inspired and fulfilled. In this private movie collection, I share
            some of my all-time favorites, as well as new discoveries that have
            captivated my heart and soul.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
