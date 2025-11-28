function Products(props) {
  return (
    <div
      className="product-card"
      style={{
        display: "flex",
        gap: "15px",
        padding: "15px",
        margin:"2px",
        border: "1px solid #4e4f4fff",
        borderRadius: "10px",
        width: "500px",
        background: "#f9fcff",
      }}
    >

      {/* IMAGE SECTION */}
      <img
        src={props.image}
        alt={props.children}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />

      {/* TEXT SECTION */}
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: "0 0 8px 0" }}>{props.children}</h4>
        <p><b>Price:</b> {props.price}</p>
        <p style={{ fontSize: "14px" }}>
          <b>Description:</b> {props.description}
        </p>
      </div>

    </div>
  );
}

export default Products;

// ---Background Image----
/*
function Products(props) {
  return (
    <div
      className="product-card"
      style={{
        width: "250px",
        height: "300px",
        margin:"2px",
        padding: "15px",
        border: "1px solid #898b8cff",
        borderRadius: "12px",
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "black",
        textShadow: "0 0 5px rgba(0,0,0,0.8)"
      }}
    >
      <h4>{props.children}</h4>
      <p><b>Price:</b> {props.price}</p>
      <p style={{ fontSize: "14px" }}>
        <b>Description:</b> {props.description}
      </p>
    </div>
  );
}

export default Products;*/
