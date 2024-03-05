import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '/public/images/image-1.png';
import herrengasseImage from '/public/images/Herrengasse-1.png';
import ringstrasseImage from '/public/images/Ringstrasse.png';
import tuchlaubenImage from '/public/images/Tuchlauben.png';
import fleischmarktImage from '/public/images/Fleischmarkt.png';

const HomePage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src={logoImage} alt="Logo" className="logo" />
        {/* Add navigation links here if needed */}
      </div>

      <div className="row">
        <div className="col">
          <h1>Vienna</h1>
          <p>
            Vienna’s most popular streets are home to fantastic architecture, famous landmarks, and plenty of shopping
            and dining. Certainly, Austria's capital is a great city to walk around. Admire grand palaces down wide
            boulevards, dine at quaint restaurants down cobbled streets, or go shopping for some of Europe’s most
            luxurious brands.
          </p>
          <p>
            Everywhere in Vienna is steeped in art and culture, with the city’s history going back to Roman times. The
            parks, museums, and galleries seem never-ending, and you can follow in the footsteps of figures like Mozart
            and Beethoven. The public transport system is easy to navigate, so you should be able to find these streets
            without a problem.
          </p>

          <Link to="/vienna-streets" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button type="button">Explore</button>
          </Link>
        </div>

        <div className="col">

          <div className="card card1" style={{ backgroundImage: `url(${herrengasseImage})` }}>
            <h5>Herrengasse</h5>
          </div>

          <div className="card card2" style={{ backgroundImage: `url(${ringstrasseImage})` }}>
            <h5>Ringstrasse</h5>
          </div>

          <div className="card card3" style={{ backgroundImage: `url(${tuchlaubenImage})` }}>
            <h5>Tuchlauben</h5>
          </div>

          <div className="card card4" style={{ backgroundImage: `url(${fleischmarktImage})` }}>
            <h5>Fleischmarkt</h5>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
