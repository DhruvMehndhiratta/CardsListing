import React from 'react';
import { Row, Col, Container, Image, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import actions from '../actions';
import { SimpleSlider, ImageRenderer } from '../components';

const renderImage = (image) => {
  let index = image.match(/\d+/)[0];
  return ImageRenderer(index);
}

class ListingDetail extends React.Component {

  componentDidMount() {
    this.init();
    actions.getListing();
  }

  init = (itemId = '') => {
    let id = itemId ? itemId : this.props.match.params.id
    actions.getDetail(id);
  }

  descriptionRenderer = (desc) => {
    let data = desc.split('\\n');
    return data && data.map(item => {
      return item ? <p>{item}</p> : <br />;
    })
  }

  goto = (id) => {
    this.props.history.replace(`/detail/${id}`)
    this.init(id);
  }

  render() {
    const { detailObject = {}, data = [], fetching = false } = this.props.getListing;
    const {
      title = '',
      description = '',
      price = '',
      phone = '',
      location = '',
      condition = '',
      seller_name = '',
      seller_type = ''
    } = detailObject && detailObject.data && detailObject.data.attributes || {};
    const { links = {} } = detailObject;

    return (
      <div className="page-container">
        <Container className="container1">
          <Col>
            <Row>
              <Col xs={12} sm={12} md={8} className="detail-top">
                <p>{`Home >  Electronics > Games & Console > ${title}`}</p>
                <h2>{fetching ? '-' : title}</h2>
              </Col>
              <Col xs={12} sm={12} md={4} ></Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={8} className="detail-dp">
                <div className="dp-img">
                  {links && links.image ? renderImage(links && links.image) : null }
                </div>
              </Col>
              <Col md={4} className="no-padding right-stickey-panel">
                <div className="stickey-item">
                  <div className="stickey-upper">
                    <Row>
                      <Col xs={6} sm={6} md={6}><i class="far fa-heart"></i> Wishlist</Col>
                      <Col xs={6} sm={6} md={6}><i class="fas fa-share-alt"></i> Share</Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p>Price</p>
                        <h2>{price}</h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p>Item Condition</p>
                        <h3>{condition}</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p>Item Location</p>
                        <h3>{location}</h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p>Seller Info</p>
                        <div>
                          <Row>
                            <Col xs={2} sm={2} md={2}>
                              <Image src="https://www.rushhhentertainment.com/event_user_profile/images/con1.jpg" rounded />
                            </Col>
                            <Col xs={10} sm={10} md={10}>
                              <h3>{seller_name}</h3>
                              <p>{seller_type}</p>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="stickey-upper top-border-light">
                    <Row>
                      <Col sm={12} md={12}>
                        <p>Intrested with the ad? Contact the seller</p>
                        <Button variant="outline-danger" size="sm" block><i class="fas fa-phone"></i> {phone}</Button>
                        <Button variant="outline-danger" size="sm" block><i class="far fa-envelope"></i> Email</Button>
                        <Button variant="outline-danger" size="sm" block><i class="far fa-comment-alt"></i> Chat</Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={8}>
                <div className="desc-head">
                  <div><h2>DESCRIPTION</h2></div>
                  <div><p><i class="fas fa-flag"></i> Report</p></div>
                </div>
                <div className="description-text">{this.descriptionRenderer(description)}</div>
              </Col>
              <Col xs={12} sm={12} md={4}></Col>
            </Row>
          </Col>
          <Col className="s-items">
            <h3>SIMILAR ITEMS</h3>
          </Col>
          <Col className="slider-container">
            <SimpleSlider
              data={data}
              goto={this.goto}
            />
          </Col>
          <div className="fixed-bottom">
            <Button variant="outline-danger" size="sm" inline><i class="fas fa-phone"></i> {phone}</Button>
            <Button variant="outline-danger" size="sm" inline><i class="far fa-envelope"></i> Email</Button>
            <Button variant="outline-danger" size="sm" inline><i class="far fa-comment-alt"></i> Chat</Button>
          </div>
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(ListingDetail);