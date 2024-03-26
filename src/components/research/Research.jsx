


import { useContext } from 'react';
import ResearchData from '../../data/research.json';
import Publication from './Publication';
import PositionContext from '../../store/RouteContextProvider';

export default function Research() {
  const { current } = useContext(PositionContext);
  const { publications, news, links, projects,books } = ResearchData[current - 1];

  return (
    <div>
      <h4>Research Publications</h4>
      <ul>
        {publications.map((publication, index) => (
          <Publication key={index} year={publication.year} data={publication.data} />
        ))}
      </ul>

      {news.length > 0 && (
        <div>
          <h2>News</h2>
          <ul>
            {news.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {links.length > 0 && (
        <div>
          <h2>Links</h2>
          <ul>
            {links.map((link, index) => (
              <div key={index}>
                <li>{link.title}</li>
                <a href={link.path} target="_blank" rel="noopener noreferrer">{link.path}</a>
              </div>
            ))}
          </ul>
        </div>
      )}

      {projects && projects.length > 0 && ( // Add null check for 'projects'
        <div>
          <h2>Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        
      )}



{books && books.length > 0 && ( // Add null check for 'projects'
        <div>
          <h2>Books</h2>
          <ul>
            {books.map((books, index) => (
              <li key={index}>{books}</li>
            ))}
          </ul>
        </div>
        
      )}
      
    </div>
  );
}
