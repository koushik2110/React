import UserItems from "./UserItems";
import './UserList.css'
import Card from '../../shared/Components/UIElements/Card'

const UserList = (props) => {
    if (props.items.lenght === 0) {
        return (
            <div>
                <Card>
                    <h1>No Users Found</h1>
                </Card>
            </div>
        )
    }

    return (
        <ul className="users-list">
          {
            props.items.map(user => <UserItems 
                      key={user.id} 
                      id={user.id} 
                      image={user.image} 
                      name={user.name} 
                      placeCount={user.places} />)
          }
        </ul>
    )
}
export default UserList;