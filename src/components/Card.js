import React from 'react'

export default function Card({data}) {
    return (
      <div className='cardContainer'>
          {
            // Check if data exists and is an array before calling .map
            data && Array.isArray(data) ? (
              data.map((currentItem, index) => {
                return(
                  <div key={index} className='card'>
                    <img src={currentItem.urlToImage} alt={currentItem.title} />
                    <div className='cardContent'>
                      <a className='title' href={currentItem.url} target="_blank" rel="noopener noreferrer">{currentItem.title}</a>
                      <p className='description'>{currentItem.description}</p>
                      <button>Read More</button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No news available. Please search again.</p>
            )
          }
      </div>
    )
}
