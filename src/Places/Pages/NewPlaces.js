import Input from '../../shared/Components/FormElements/Input';
import './NewPlaces.css';
const NewPlace = ()=>{

    return <form className='place-form'>
        <Input element='input' type='text' label='Title' placeholder='One-Piece' errorText='please enter correct Title' ></Input>
    </form>
}
export default NewPlace;