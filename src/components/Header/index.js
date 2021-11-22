import React, { useState, useContext, useCallback } from "react";
import _ from 'lodash';
import axios from 'axios';
import { ArticleContext } from "../contexts/ArticlesContext";

import './styles.scss';


const Header = () => {
  const [articles, setArticles] = useContext(ArticleContext);
  const [search, setSearch] = useState('');

  const onSearchArticle = useCallback(async query => {
    try {
      const response = 
        await axios.get(`http://localhost:9000/articlesAPI/articles/${encodeURIComponent(query)}`);
      const { data }  = response.data;
      
      if (data) {
        setArticles([data]);
      }

    } catch (error) {
      console.log(error);
    }
  }, [setArticles]);

  const handleSearch = event => {
    if (event.key === 'Enter') {
     onSearchArticle(search);
    }
  };

  const handleInputChange = value => {
    setSearch(value)
  }

  const handleOrderBy = value => {
    switch(value) {
      case "lastest":
        const orderByLastest = _.orderBy(articles, [(obj) => new Date(obj.date)], ['desc'])
        return setArticles(orderByLastest);
      case "oldest":
        const orderByOldest = _.orderBy(articles, [(obj) => new Date(obj.date)], ['asc'])
        return setArticles(orderByOldest);
      default:
    }
  }

  return (
    <div className="container">
      <header>
        <div className="row">
          <div className="col-md-7">
            <input 
              placeholder="Search by title"
              type="text" 
              aria-label="First name" 
              className="form-control" 
              onKeyUp={e => handleSearch(e)}
              onChange={e => handleInputChange(e.target.value)}
            />
          </div>
          <div className="col-md-5">
          <select
            className="form-select" 
            aria-label="Default select example" 
            onChange={ e=> handleOrderBy(e.target.value)}
          >
            <option value="sort" selected>Sort by</option>
            <option value="lastest">Lastest</option>
            <option value="oldest">Oldest</option>
          </select>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;


