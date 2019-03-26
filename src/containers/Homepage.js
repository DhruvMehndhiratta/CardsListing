import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../actions'

const imageRenderer = (key) => {
  if (key ==1 || key%3 === 1) {
    return <img src={require('../assets/1.png')} />
  } else if (key ==2  || key % 3 == 2) {
    return <img src={require('../assets/2.png')} />
  } else {
    return <img src={require('../assets/3.png')} />
  }
}

class Homepage extends React.Component {

  componentDidMount() {
    actions.getListing();
  }

  onRedirectDetail = (id) => {
    console.log("dsakfksdfa", id)
    this.props.history.push(`/detail/${id}`)
  }

  renderItem = ({ attributes: { title, price, links }, id }, key) => {
    
    return <div key={id} className="card" onClick={(text) => this.onRedirectDetail(id)}>
      <div>
        {imageRenderer(key+ 1)}
        <div className="card-info">
          <p>{title.length > 20 ? title.substr(0, 35) : title}</p>
          <h6>{price}</h6>
        </div>
      </div>
    </div>
  }

  render() {
    const { data = [], fetching = false } = this.props.getListing;
    console.log(data, "data");

    return (
      <div className="page-container">
        <Container>
          <h5>Listing</h5>
          <div className="items-container">
            {data && data.length ? data.map(this.renderItem) : null}
          </div>
        </Container>
      </div>

    )
  }
}

export default connect(state => state)(Homepage)