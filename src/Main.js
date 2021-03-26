import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {

    let beastArray = data.map(beast => {
      return <HornedBeasts
        name={beast.keyword}
        title={beast.title}
        src={beast.image_url}
        description={beast.description}
      />;
    });

    return (
      < main >
        <Container className="beastContainer">
          <CardColumns>
            {beastArray}
          </CardColumns>
        </Container>
      </main >
    );
  }
}

export default Main;
