import './Input.css';
import { useReducer } from 'react';

const inputReducer = (state, action)=>{
    console.log('11111',action.type);
    switch(action.type){
        case 'CHANGE':
            console.log('22222',state);
            return{
                ...state,
                value: action.val,
                isValid: true
            };
        default:
            return state;
    }
}

const Input = props =>{
    const [inputstate, dispatch]=useReducer(inputReducer,{value: '', isValid: false});
    const changeHandler = (event)=>{
        dispatch({type: 'CHANGE', val: event.target.value});
    }
    const element = props.element === 'input' ?
        <input type={props.type} id={props.id} placeholder={props.placeholder} onChange={changeHandler} value={inputstate.value}></input> :
        <textarea id={props.id} rows={props.rows || 3}></textarea>
    return (
        <div className={`form-control ${!inputstate.isValid && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputstate.isValid && <p>{props.errorText}</p>}
        </div>
    );
}
export default Input;