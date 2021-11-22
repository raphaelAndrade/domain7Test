import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ArticleContext } from "../../components/contexts/ArticlesContext";
import Article from '../../components/Article';

import './styles.scss';

const ArticleDetails = () => {
  const [articles,] = useContext(ArticleContext);
  const { id: idParams } = useParams();
  const navigate = useNavigate();


  const article = articles.filter(article => Number(article.id) === Number(idParams)); 
  const { id, title, author, date, description, image } = article[0];

  const handleClick = id => {
    navigate(`/`)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
         <button className="btn btn-dark" onClick={() => handleClick()}>Home</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ul className="articles">
            <Article 
              id={id}
              title={title}
              author={author}
              date={date}
              description={description}
              image={image}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;