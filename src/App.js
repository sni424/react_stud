/*eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [posts, setPosts] = useState(["javascript", "Python", "Java"]);
  let [firsttitle, setFirst] = useState(true);
  let [modal, setModal] = useState(false);
  let [sTitle, setsTitle] = useState(0);

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

  function changeModal() {
    setModal(!modal);
  }

  const newModal = modal
    ? <Modal posts={posts} sTitle={sTitle} ></Modal>
    : null

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>제목 바꾸기</button>
      {
        posts.map((a, i) => {
          return <Write setsTitle={setsTitle} title={a} i={i}></Write>
        })
      }
      <button onClick={changeModal}>Modal toggle</button>
      {newModal}
    </div>
  );
}

function Write(props) {
  let [like, setLike] = useState(true);

  function plusLike() {
    setLike(!like);//true면 false로 false면 true로 바꿈
  };
  const toggleLike = like
    ? "0"
    : "1"

  return (
    <div className='list'>
      <h3 onClick={() => { props.setsTitle(props.i) }}>{props.title}<span><button className='button_like' onClick={plusLike}>💘</button></span>{toggleLike}</h3>
      <p>2022-01-29</p>
      <hr></hr>
    </div>
  );
};

function Modal(props,) {
  return (
    <div className="modal">
      <h2>{props.posts[props.sTitle]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};



export default App;
