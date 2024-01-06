import UserList from "../Components/UserList";
const Users = ()=>{

    const user = [
        {
            id: 'u1',
            image: 'https://1.bp.blogspot.com/-abEy-yoYoCk/Ts23Jrir8oI/AAAAAAAAAT4/JUccl3eWafk/s1600/Luffy.png',
            name: 'luffy',
            places: 4
        },
        {
            id: 'u2',
            image: 'https://th.bing.com/th/id/OIP.suSYk0QlkES1LYWIqyQV1AHaHz?w=174&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            name: 'zoro',
            places: 1
        },
        {
            id: 'u3',
            image: 'https://th.bing.com/th/id/OIP.97Y8vRuSItaNP3wGoVXZ7QHaId?w=175&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            name: 'sanji',
            places: 8
        }
    ]

    return <UserList items = {user}></UserList>
}
export default Users;