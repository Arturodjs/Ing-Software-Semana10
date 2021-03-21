import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';
import React from 'react'
import { useState, useEffect } from 'react'
import PokemonCard from './Components/PokemonCard'
import PokemonInfo from './Components/PokemonInfo'


function App() {
  const [pokemon, setPokemon] = useState();
  const [allPokemon, setAllPokemon] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImg, setPokemonImg] = useState('');
  const [pokemonPopUp, setPokemonPopUp] = useState(false);
  useEffect(() => {
    getPokemon();

  }, [])

  const getPokemon = () => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`;

    fetch(pokemonUrl)
      .then(resp => resp.json())
      .then(json => {
        setPokemon(json.results)
        setAllPokemon(json.results)
      })
      .catch(err => console.error(err))
  }

  const filterPokemon = (value) => {
    if (value === '') {
      setPokemon(allPokemon)
    }
    else {
      setPokemon(allPokemon.filter(el => el.name.includes(value.toLowerCase())))
    }
  }

  const getPokemonData = (url, name, img) => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        setPokemonData(json)
        setPokemonName(name)
        setPokemonImg(img)
        setPokemonPopUp(true)
      })
      .catch(err => console.error(err))


  }

  return (
    <>
      {
        pokemonPopUp
          ? <PokemonInfo
            closePopUp={setPokemonPopUp}
            pokemonData={pokemonData}
            name={pokemonName}
            img={pokemonImg}
          /> : null
      }
      <div className="container-fluid">
        <div className="row search-row">
          <nav className="text-center border text-light col-12 d-flex flex-column align-items-center">
            <h1 className="text-center pokedex-text">Pokedex</h1>
            <input type="text" onChange={e => filterPokemon(e.target.value)} className="form-control mb-2 search-bar" id="search" placeholder="Buscar pokemon por Nombre." />
          </nav>
        </div>


        <div className="d-flex flex-wrap justify-content-around text-center" id="pokedex-container">
          {
            pokemon ? pokemon.map((el, key) => {
              const id = el.url.split('/');
              const name = el.name.charAt(0).toUpperCase() + el.name.slice(1)

              return (<PokemonCard key={key} id={id[6]} name={name} url={el.url} getPokemonData={getPokemonData} tabIndex={pokemonPopUp ? -1 : 0} />)
            }) : null}
        </div>
      </div>
    </>
  );
}

export default App;
