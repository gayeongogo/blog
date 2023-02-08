import { useState } from 'react';
import './App.css';

function App() {

    let [name, setName] = useState(['남자코트 추천', '수원 우동맛집', '리액트 독학'])
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);

    [1,2,3].map(function(a) {
       return '2445346'
    })

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            {/* <div className="list">
                <h4>{name[0]}<span onClick={() => setLike(like+1)}>💗</span> {like}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{name[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4 onClick={() => {setModal(!modal)}}>{name[2]}</h4>
                <p>2월 17일 발행</p>
            </div> */}

            {
                name.map(function(a, i) { 
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => {setModal(true)}}>{name[i]}
                                <span onClick={() => {}}>💗</span> {like[i]}
                            </h4>
                            <p>2월 17일 발행</p>
                        </div>
                    )
                })
            }

            {
                modal === true ? <Modal />:null
            }

        </div> 
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
