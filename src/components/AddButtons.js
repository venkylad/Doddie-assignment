import { Button } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";

const Add = ({ handleMineral, handleNpri }) => {
  return (
    <div className="d-flex justify-content-start">
      <Button variant="light" className="m-4 p-2" onClick={() => handleNpri()}>
        <AddIcon style={{ marginBottom: "-4px" }} />
        Add NPRI
      </Button>
      <Button
        variant="light"
        className="m-4 p-2"
        onClick={() => handleMineral()}
      >
        <AddIcon style={{ marginBottom: "-4px" }} />
        Add Mineral Interest
      </Button>
    </div>
  );
};
export default Add;
