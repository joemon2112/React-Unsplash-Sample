import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import unsplash from './api/unsplash';
import ImgList from './components/ImgList';

function App(){
  const [images, setImages] = React.useState([]);
  const onSearchSubmit = async(term) => {
    
    const response = await unsplash.get('search/photos', {
      params: { query: term}
    });
    setImages(response.data.results);
  };

  return (
    <div className="App">
      <Header>
        <Search onSearchSubmit={onSearchSubmit}/>
      </Header>
      <div>
        <ImgList images={images}/>
      </div>
    </div>
  );
}


export default App;
