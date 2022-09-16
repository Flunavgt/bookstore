import React from 'react';
import './BookItem.css';
import PropTypes from 'prop-types';
import ProgressPie from '../ProgressPie/ProgressPie';

const BooksItem = (props) => {
  const { id, title, author } = props;
  return (
    <li id={id} className="bookContainer">
      <article className="BookBody">
        <section className="infoBook">
          <div className="genBook">
            <p className="category">category</p>
            <h3 className="title">{title}</h3>
            <p className="author">{author}</p>
          </div>
          <div className="buttonContainer">
            <button className="bookBtn1" type="button">comments</button>
            <button className="bookBtn2" type="button">remove</button>
            <button className="bookBtn3" type="button">Edit</button>
          </div>
        </section>
        <div className="progress">
          <div className="circle">
            <ProgressPie />
          </div>
          <div className="progText">
            <h2>64%</h2>
            <p>Completed</p>
          </div>
        </div>
      </article>
      <article className="BookFooter">
        <p className="bookFooter_title">Current Chapter</p>
        <p className="bookFooter_chapter">Chapter 10</p>
        <button className="bookFooter_button" type="button">Update Progress</button>
      </article>
    </li>
  );
};

export default BooksItem;

BooksItem.defaultProps = {
  id: '0',
  title: null,
  author: null,
};

BooksItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
