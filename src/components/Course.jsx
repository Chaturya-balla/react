function Course(props){
    console.log(props);

    return(
        <div className="border border-2 border-info m-2 p-2 rounded shadow text-center"
        style={{width:"300px", height:"200px"}}
        >
            <h5>{props.children}</h5>
            <p>Price: {props.price}</p>
            <p>Trainer: {props.trainer}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Course