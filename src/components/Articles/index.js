import React, { Fragment, useContext } from "react";
import { ArticleContext } from "../contexts/ArticlesContext";
import Article from "../Article";

import './styles.scss';

const Articles = () => {
  
  const [articles,setArticles] = useContext(ArticleContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="articles">
            {articles?.map(({
              id,
              title,
              author,
              date,
              description,
              image,
            }) => (
              <Fragment key={id}>
                <Article 
                  id={id}
                  title={title}
                  author={author}
                  date={date}
                  description={description}
                  image={image}
                />
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Articles;