import React, { Component } from 'react';
import './css/App.css';

import Header from './comp/Header';
// import QuickBanner from './comp/QuickBanner';
// import ActiveBanners from './comp/ActiveBanners';

class App extends Component {

  // componentDidMount() {
  //   fetch("http://127.0.0.1:3123/advertisers/")
  //     .then(response => response.json())
  //     .then(data =>  {
  //       this.setState({
  //         loading: false,
  //         advertisers: data
  //       })
  //   });
  //   fetch("http://127.0.0.1:3123/zones/")
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         loading: false,
  //         zones: data
  //       })
  //     });
  //   this.setState({loading: true});
  // }

  // renderActiveBanners() {
  //   if(this.state.zones.results) {
  //     return(<ActiveBanners zones={this.state.zones}/>);
  //   }
  // }
  
  render() {
    return (
      <div className="App">
      <Header/>
      </div>
    );
  }
}



export default App;
