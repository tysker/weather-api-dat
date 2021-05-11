import React, { Component } from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from "../components/Footer";
import Search from "../components/SearchByCity";
import doFetch from "../components/FetchClass";

class Gls extends Component {
  state = {
    zipcode: "",
    pakkeShops: []
  };

  pakkeShopMap = () => {
    console.log("Hallo Pakke Shop");
    return this.state.pakkeShops.map(pakke => (
      <tr key={pakke.CompanyName}>
        <td>{`${pakke.CompanyName}`}</td>
        <td>{`${pakke.Streetname}`}</td>
        <td>{`${pakke.ZipCode}`}</td>
        <td>{`${pakke.CityName}`}</td>
      </tr>
    ));
  };
  changeHandlerZipcode = event => {
    this.setState({ zipcode: event.target.value });
  };

  onSubmitZipcode = async event => {
    event.preventDefault();
    let currentZipcode = this.state.zipcode;
    const GlsShops = await doFetch.fetchGlsPartnersForZipCode(currentZipcode);
    this.setState({
      pakkeShops: [...GlsShops]
    });
    console.log(this.state.pakkeShops);
    this.pakkeShopMap();
  };

  render() {
    return (
      <div>
        <div>
          <div className="row headers">
            <h1>GLS Partners!</h1>
            <h4>Put in a zipcode</h4>
            <div>
              <Search
                onChange={this.changeHandlerZipcode}
                onSubmit={this.onSubmitZipcode}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <table className='custom'>
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Street Name</th>
                <th>Zip Code</th>
                <th>City Name</th>
              </tr>
            </thead>
            <tbody>{this.pakkeShopMap()}</tbody>
          </table>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Gls;
