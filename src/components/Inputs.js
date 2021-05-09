import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import SubdirectoryArrowRightIcon from "@material-ui/icons/SubdirectoryArrowRight";

import Npri from "./NpriInputs";
import { useState } from "react";

const Inputs = ({ input, handleDelete }) => {
  const [mineral, setMineral] = useState(0);
  const [npri, setNpri] = useState(0);

  return (
    <div className="my-4">
      <Row>
        <Col xs={3}>
          {input.owner && (
            <InputGroup>
              {input.npri && <SubdirectoryArrowRightIcon />}

              <FormControl type="text" />
            </InputGroup>
          )}
        </Col>
        <Col xs={3}>
          {input.mineral && (
            <InputGroup>
              <FormControl
                type="number"
                value={mineral}
                onChange={(e) => setMineral(e.target.value)}
              />
              <InputGroup.Append>
                <InputGroup.Text>%</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          )}
        </Col>
        <Col xs={2}>
          <Npri input={input} npri={npri} setNpri={setNpri} />
        </Col>

        <Col xs={3}>
          {input.label && (
            <InputGroup>
              <FormControl type="text" />
            </InputGroup>
          )}
        </Col>
        <Col xs={1}>
          <Button
            variant="light"
            onClick={() => {
              handleDelete(input.id);
            }}
          >
            <RemoveCircleIcon />
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default Inputs;
