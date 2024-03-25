// import {useContext} from 'react'
// import contact from "../../data/contact.json"
// import PositionContext from '../../store/RouteContextProvider';

// export default function Contact() {

//     // const Page = useContext(PositionContext);

  
//     // const name = contact[Page].name
//     // const designation = contact[Page].designation
//     // const address =contact[Page].address
//     // const email =contact[Page].email
//     // const email1 = "mailto:" + email;
//   return (
//     <div>
//         <h2>Contact</h2>
// {/*        
//         <h3>{name}</h3>
//         <div>{designation}</div>
//         <div>{address}</div>
//         <a href={email1}>{email}</a> */}


//      </div>
//   )
// }

import {useContext} from 'react'
import contact from "../../data/contact.json"
import PositionContext from '../../store/RouteContextProvider';

export default function Contact() {

  const {current} = useContext(PositionContext);



    const name = contact[current-1].name
    const designation = contact[current-1].designation
    const address =contact[current-1].address
    const email =contact[current-1].email
    const email1 = "mailto:" + email;
  return (
    <div>
        <h2>Contact</h2>
        <h3>{name}</h3>
        <div>{designation}</div>
        <div>{address}</div>
        <a href={email1}>{email}</a>
     </div>
  )
}

