import Input from "../../shared/Components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/Components/Utils/Validators";
import "./NewPlaces.css";
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        placeholder="One-Piece"
        errorText="please enter correct Title"
        validators={[VALIDATOR_REQUIRE()]}
      ></Input>
    </form>
  );
};
export default NewPlace;
