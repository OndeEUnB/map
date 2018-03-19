import React from 'react';
// import {  Link } from 'react-router-dom';
// import Routes from '../routes';
import Map from './Map';
// import Sidebar from 'react-sidebar';
//
// const App = () => (
//   <div>
//     {/* <div>
//       <Link to="/map">Home</Link>
//       <Link to="/map/about">About</Link>
//     </div> */}
//
//     <Routes />
//     <Map />
//   </div>
// );
//
// export default App;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open
    });
  }

  render() {
    // var sidebarContent = <b>Sidebar content</b>;

    // return (
    //   <Sidebar sidebar={sidebarContent}
    //            open={this.state.sidebarOpen}
    //            onSetOpen={this.onSetSidebarOpen}>
    //     <Map />
    //   </Sidebar>
    // );
    return <Map />;
  }
};

export default App;
