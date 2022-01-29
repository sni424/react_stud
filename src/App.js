/*eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [posts, setPosts] = useState(["javascript", "Python", "Java"]);

  function changeTitle() {
    const newTitle = [...posts];
    newTitle[0] = "문법 공부하기"
    setPosts(newTitle);
  };

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <Write title={posts[0]} changeTitle={changeTitle}></Write>
      <Write title={posts[1]}></Write>
      <Write title={posts[2]}></Write>
    </div>
  );
}

function Write({ title, changeTitle }) {

  let [like, setLike] = useState(true);

  function plusLike() {
    setLike(!like);//true면 false로 false면 true로 바꿈
  };
  const toggleLike = like
    ? "0"
    : "1"

  return (
    <div className='list'>
      <button onClick={changeTitle}>제목 바꾸기</button>
      <h3>{title}<span><button className='button_like' onClick={plusLike}>💘</button></span>{toggleLike}</h3>
      <p>2022-01-29</p>
      <hr></hr>
    </div>
  );
};


export default App;
