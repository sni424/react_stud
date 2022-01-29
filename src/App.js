/*eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [posts, setPosts] = useState(["javascript", "Python", "Java"]);
  let [firsttitle, setFirst] = useState(true);

  function changeFirst() {
    setFirst(!firsttitle);
  };

  function changeTitle() {
    changeFirst()
    const newTitle = [...posts];
    const toggleTitle = firsttitle
      ? "javascript"
      : "문법 공부하기"
    newTitle[0] = toggleTitle
    setPosts(newTitle);
  };
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>제목 바꾸기</button>
      <Write title={posts[0]}></Write>
      <Write title={posts[1]}></Write>
      <Write title={posts[2]}></Write>
      <div className=''>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  );
}

function Write({ title }) {

  let [like, setLike] = useState(true);

  function plusLike() {
    setLike(!like);//true면 false로 false면 true로 바꿈
  };
  const toggleLike = like
    ? "0"
    : "1"

  return (
    <div className='list'>
      <h3>{title}<span><button className='button_like' onClick={plusLike}>💘</button></span>{toggleLike}</h3>
      <p>2022-01-29</p>
      <hr></hr>
    </div>
  );
};


export default App;
