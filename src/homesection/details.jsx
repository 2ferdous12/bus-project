

const details = ({sitem}) => {
    const {name} = sitem;
    console.log(name)
    return (
        <div>
           <h1>{name}</h1> 
        </div>
    );
};

export default details;