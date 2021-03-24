import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <div className="beastContainer">
        <HornedBeasts name="Uno" title="Beast Name 1" alt="pic of a horned beast" description="Placeholder Description 1" src="https://via.placeholder.com/150x150"/>
        <HornedBeasts name="Dos" title="Beast Name 2" alt="pic of a horned beast" description="Placeholder Description 2" src="https://via.placeholder.com/150x150"/>
        <HornedBeasts name="Tres" title="Beast Name 3" alt="pic of a horned beast" description="Placeholder Description 3" src="https://via.placeholder.com/150x150"/>
      </div>
    );
  }
}

export default Main;
