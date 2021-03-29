import React from 'react';
import HornedBeasts from './HornedBeasts';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

  render() {
    const beastArray = this.props.allBeasts.map((beast, index) => {
      return <HornedBeasts
        name={beast.keyword}
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key={index}
        index={index}
        alt={this.props.title}
        setBeast={this.props.setBeast}
      />;
    });

    return (
      <main>
        <Container className="beastContainer">
          <CardColumns>
            {beastArray}
          </CardColumns>
        </Container>
      </main>
    );
  }
}

export default Main;
