import React from 'react';
import './App.css';
import Header from './components/Header';
import unsplash from './api/unsplash';
import ImgList from './components/ImgList';
import './components/Search.css';

function App(){
  const [images, setImages] = React.useState([]);
  const [term, setTerm] = React.useState('');
  const [page, setPage] = React.useState(1);

  const onSearchSubmit = async(term, page) => {    
    const response = await unsplash.get('search/photos', {
      params: { query: term, per_page: 21, page: page}
    });
     // pageが1だったらresponse.data.resultsを返す。1以外だったら、imagesに新しく取得したdataを結合する。
    setImages( page === 1 ? response.data.results : images.concat(response.data.results));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    onSearchSubmit(term, 1);
  }

  return (
    <div className="App">
      <Header>
        <form onSubmit={onFormSubmit}>
          <input
          type="text"
          className="Search"
          value={term}
          placeholder="検索"
          onChange={e => setTerm(e.target.value)}
          />
        </form>
      </Header>
      <div>
        <ImgList images={images} onSearchSubmit={onSearchSubmit} term={term} pagge={page} setPage={setPage}/>
      </div>
    </div>
  );
}


export default App;
