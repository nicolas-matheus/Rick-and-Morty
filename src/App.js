import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setData(response.data.results))
      .catch(error => console.error('Erro:', error));
  }, [])

  return (
    <div className="App">
      <button>Buscar Personagens</button>
      <div class="columns is-multiline">
      {data.map(item => (
        <div className='column is-one-third'>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
               <img src={item.image} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={item.image} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{item.name}</p>
                  <p className="subtitle is-6">{item.species}</p>
                </div>
              </div>

              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
              </div>
            </div>
          </div>
        </div> 
      ))}
      </div>
    </div>
  );
}

export default App;
