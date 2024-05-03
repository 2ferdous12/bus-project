
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const detailsService = () => {
    const [loaddata, setLoaddata] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setLoaddata(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures useEffect runs only once

    // Find the item with the matching id
    const singleItem = loaddata.find(item => item.id === id);
    console.log(singleItem);
    
    return (
        <div>

        </div>
    );
};

export default detailsService;