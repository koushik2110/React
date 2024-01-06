import './PlaceList.css';
import Card from '../../shared/Components/UIElements/Card';
import PlaceItem from './PlaceItem';

const PlaceList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className='place-list center'>
                <Card>
                    <h2>No Place's found. Maybr crreate One?</h2>
                    <button>Share PLace</button>
                </Card>
            </div>
        )
    }

    return <ul className='place-list'>
        {props.items.map(place => <PlaceItem
            id={place.id}
            key={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
        ></PlaceItem>)}
    </ul>
}

export default PlaceList;