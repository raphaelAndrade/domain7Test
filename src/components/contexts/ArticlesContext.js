import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ArticleContext = createContext();

const { Provider } = ArticleContext;

const defaultArticles = [
  {
    title: '',
    author: '',
    date: '',
    description: '',
    image: '',
  },
];

export const AppProvider = (props) => {

  const [articles, setArticles] = useState([defaultArticles]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:9000/articlesAPI/articles');
        const { result } = response.data;

        if (result) {
          setArticles(result);
        }

      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

return(
   <Provider value={[ articles, setArticles ]}>
      {props.children}
   </Provider>
  );
}