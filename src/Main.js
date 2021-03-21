import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <div className="beastContainer">
        <HornedBeasts title="Beast Name 1" description="Lorem Ipsum Placeholder Description!!!"/>
        <HornedBeasts title="Beast Name 2" description="Lorem Ipsum Placeholder Description!!!"/>
        <HornedBeasts title="Beast Name 3" description="Lorem Ipsum Placeholder Description!!!"/>
      </div>
    );
  }
}

export default Main;
