import React from 'react';
import HornedBeasts from './HornedBeasts';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  
  render() {
    let beastArray = this.props.data.map(beast => {
      return <HornedBeasts
        name={beast.keyword}
        title={beast.title}
        src={beast.image_url}
        description={beast.description}
        key={beast.title}
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
