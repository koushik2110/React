import './UserItems.css';
import Avatar from '../../shared/Components/UIElements/Avatar';
import Card from '../../shared/Components/UIElements/Card'
import { Link } from 'react-router-dom/cjs/react-router-dom';
const UserItems = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item_image">
                        {/* <img src={props.image} alt={props.name}></img> */}
                        {<Avatar image={props.image} alt={props.name}></Avatar>}
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}
export default UserItems;