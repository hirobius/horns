import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <div className="beastContainer">
        <HornedBeasts title="Beast Name 1" description="Lorem Ipsum Placeholder Description 1" url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>
        <HornedBeasts title="Beast Name 2" description="Lorem Ipsum Placeholder Description 2"/>
        <HornedBeasts title="Beast Name 3" description="Lorem Ipsum Placeholder Description 3"/>
      </div>
    );
  }
}

export default Main;
