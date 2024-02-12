import { useState } from "react";

/* eslint-disable react/prop-types */
function Flex({ children, title, color }) {

  const [colorTitle , setColorTitle] = useState(color);

  const styleTitle = {
    color: colorTitle,
    marginLeft:"10px"
  }
    const flexStyle = {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    };
  
    return (
      <div>
        <h1 className="tituloQS">{title}</h1>
        <div style={flexStyle}>{children}</div>
      </div>
    );
  }
  
  export default Flex;