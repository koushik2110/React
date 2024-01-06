import { useParams } from "react-router-dom";
import PlaceList from './../Components/PlaceList';
const UserPlaces = ()=>{
    const placesArray = [
        {
            id: 'p1',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipP_Q7HOlhPHhkHXKVQLDoubJe0CBdnv5PTUyKq4=w408-h255-k-no',
            title: 'Mt Fuji',
            description: 'Beauty of Japan',
            address: 'Kitayama, Fujinomiya, Shizuoka 418-0112, Japan',
            creator: 'u1',
            location: {
                lat: 35.3606233,
                lon: 138.7067638
            }
        },
        {
            id: 'p2',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipP_Q7HOlhPHhkHXKVQLDoubJe0CBdnv5PTUyKq4=w408-h255-k-no',
            title: 'Mt Fuji',
            description: 'Beauty of Japan',
            address: 'Kitayama, Fujinomiya, Shizuoka 418-0112, Japan',
            creator: 'u2',
            location: {
                lat: 35.3606233,
                lon: 138.7067638
            }
        }
    ];

    const userID = useParams().userID;
    const filteredPlaces = placesArray.filter(place=> place.creator === userID);
    console.log('========',filteredPlaces);
    return (
        <PlaceList items={filteredPlaces}></PlaceList>
    )
}
export default UserPlaces;