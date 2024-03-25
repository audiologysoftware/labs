import React from 'react'
import './Publication.css';

export default function Publication({ year, data }) {

  return (
    <div>
      <h2>{year}</h2>
      <div>
        {
          data.map((paper) => (<p>{paper}</p>))
        }
      </div>
    </div>
  )
}
