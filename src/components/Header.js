import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div className="my-4">
      <Row>
        <Col xs={3}>
          <h3>Owner</h3>
        </Col>
        <Col xs={3}>
          <h3>Mineral Interest</h3>
        </Col>
        <Col xs={3}>
          <h3>NPRI</h3>
        </Col>
        <Col xs={3}>
          <h3>Lease</h3>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
export default Header;
