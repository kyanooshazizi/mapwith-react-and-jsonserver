import React, { useEffect, useState } from 'react';

const App = (props) => {
  const [data,setData]=useState([]);
  useEffect(()=>{fetch("http://localhost:3000/postsee").then(res=>res.json()).then(res1=>{
    setData(...res1);
  console.log(data);
  })},[])
    



  return (
    
    <div>{data.length==0?<p>salam</p>:data.title}</div>
  );
};

export default App;
