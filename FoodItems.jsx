import Item from "./Item";
const FoodItems=(props)=>{
    return (
        <>
            <ul>{props.items.map((item) => (
                <Item key={props.items} foodItem={item}></Item>
            ))}
            </ul>
        </>
    );
};
// write a program

export default FoodItems;
