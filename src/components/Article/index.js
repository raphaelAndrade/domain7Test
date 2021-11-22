import React from "react";
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import './styles.scss';

const Article = ({ id, title, author, date, description, image }) => {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/article/${id}`)
  };

  const formatDate = date => {
    try {
      return format(new Date(date), 'PPPp');
    } catch {
      return '';
    }
  };

  return (
    <li key={id}>
      <div className="row">
        <div className="col-md-12">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <smal>{`Author: ${author} | Date: ${formatDate(date)}`}</smal>
        </div>
      </div>
      <div className="image" style={{ backgroundImage: `url(${image})`}}>
        <div className="row">
          <div className="col-md-12">
            <div className="description">
              <p>{description}</p>
              <button className="btn" onClick={() => handleClick(id)}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Article;