import React from 'react';
import parse from 'html-react-parser';

const Episodes = (props) => {
    return (
      <div className="episodes" data-testid="episodes-container">
        {props.episodes.map(e => (
          <div className="episode" key={e.id} data-testid="episode">
            {e.image && (
              <img className="episode-image" src={e.image.medium} alt={e.name} data-testid="episode-image"/>
            )}
            <div className="episode-info" data-testid="episode-info">
              <p className="episode-number" data-testid="episode-number">
                Season {e.season}, Episode {e.number}
              </p>
              <h3 data-testid="episode-name">{e.name}</h3>
              {e.summary && parse(e.summary)}
              <div className="flex-spacer" />
              <p className="episode-runtime" data-testid="episode-runtime">{e.runtime} minutes</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Episodes


