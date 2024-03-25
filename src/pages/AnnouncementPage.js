


// import React from 'react'


// import Layout from '../components/layout/Layout'
// import Announcement from '../components/announcement/Announcement'
// import AnnouncemetData from '../data/announcement.json'




// export default function AnnouncementPage() {
//   return (
//     <div>
//       <Layout>

//         <h2>news and Announcement</h2>

//         <ul>
//           {
//             AnnouncemetData[0].Announcement.map((heading, path) => {
//               return <Announcement heading={heading.path} path={path} />

//             })}
//         </ul>

//       </Layout>

//     </div>
//   )
// }

// AnnouncementPage.js

import {useContext} from 'react';
import Layout from '../components/layout/Layout';
import Announcement from '../components/announcement/Announcement';
import AnnouncementData from '../data/announcement.json';
import PositionContext from '../store/RouteContextProvider';


const AnnouncementPage = () => {

  const {current} = useContext(PositionContext);

  return (
    <div>
      <Layout>
        <h2>News and Announcements</h2>
        <ul>
          {AnnouncementData[current-1].Announcement.map((announcement) => (
           
            <Announcement heading={announcement.heading} path={announcement.path} />
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export default AnnouncementPage;
