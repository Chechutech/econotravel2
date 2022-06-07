import React, { useState } from "react";
import { Box } from "@mui/material";

  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
      <Box>
        {isReadMore ? text.slice(0, 180) : text}
        <Box component="div" display="inline" onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...Leer más" : " Leer menos"}
        </Box>
    </Box>
  );
};

export default ReadMore;


//style={{width:'28rem', height:'14rem',marginTop: '1rem', marginLeft:'2rem', textAlign:'justify', fontSize:'1.2rem', alignItems: 'center', display: 'flex'}}

