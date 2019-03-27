import React from 'react';
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import actions from '../actions'
import { ImageRenderer, Loader } from '../components';

class Homepage extends React.Component {

  componentDidMount() {
    actions.getListing();
  }

  onRedirectDetail = (id) => {
    this.props.history.push(`/detail/${id}`)
  }

  renderItem = ({ attributes: { title, price }, id }, key) => {
    return <div key={id} className="card" onClick={() => this.onRedirectDetail(id)}>
      <div>
        {ImageRenderer(key+ 1)}
        <div className="card-info">
          <p>{title.length > 20 ? title.substr(0, 35) : title}</p>
          <h6>{price}</h6>
        </div>
      </div>
    </div>
  }

  render() {
    const { data = [], fetching = false } = this.props.getListing;
    
    if (fetching) {
      return <Loader />
    }
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Homepage)