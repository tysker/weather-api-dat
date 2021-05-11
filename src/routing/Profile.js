import React, { Component } from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from "../components/Footer";

function ProfilAttributes() {
  return (
    <div className="profile" id="info">
      <h2>Profile</h2>
      <p>First name</p>
      <p>Last name</p>
      <p>Country</p>
      <p>City</p>
      <p>Email</p>
      <p>Weather metrics:</p>
      <p>Celsius</p>
    </div>
  );
}

function Favourites() {
  return (
    <div id="favourites">
      <h2>Favourite cities</h2>
      <ul className="fav-cities li-white">
        <li>Copenhagen</li>
        <li>Berlin</li>
        <li>Stuttgart</li>
        <li>London</li>
      </ul>
    </div>
  );
}

function AddCity() {
  return (
  <section className="section-addCity">
    <div className="row">
      <form>
        <label htmlFor="addCity">
          <input type="text" name="addCity" className="input-text-add-city" />
        </label>
        <input type="submit" value="Add city" className="btn-add-city btn" />
      </form>
    </div>
  </section>
  );
}

class Profile extends Component {
  render() {
    return (
      <div>
        <section className="section-profile">
          <div className="row">
            <div>
              <ProfilAttributes />
              <Favourites />
              <ul>
                <li><AddCity /></li>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Profile;
