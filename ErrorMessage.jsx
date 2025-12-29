const ErrorMessage=({items})=>{
    return (
        <>
            {items.length==0 && <h2>I am Still Hungry</h2>}
        </>
    );
};

export default ErrorMessage;