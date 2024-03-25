import react, { useContext } from 'react';


export default function Announcement({ heading, path }) {



  return (
    <div>
      <h3>{heading}</h3>
      
      <img src={path} alt="announcment" />
      
    </div>
  );
}



