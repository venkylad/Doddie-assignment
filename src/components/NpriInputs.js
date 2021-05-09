import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";

const Npri = ({ input, npri, setNpri }) => {
  return (
    <div>
      {input.npri && (
        <InputGroup>
          <FormControl
            type="number"
            value={npri}
            onChange={(e) => setNpri(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      )}
    </div>
  );
};
export default Npri;
