import { useState } from 'react';
import './App.css';

function App() {

    let [name, setName] = useState(['남자코트 추천', '수원 우동맛집', '리액트 독학'])
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [input, setInput] = useState('');
    [1,2,3].map(function(a) {
       return '2445346'
    })

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            {
                name.map(function(a, i) { 
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => {setModal(true); setTitle(i);}}>{name[i]}
                                <span onClick={(e) => {e.stopPropagation()}}>💗</span> {like[i]}
                            </h4>
                            <p>2월 17일 발행</p>
                            {/* <button onClick={() => {
                                
                            }}>삭제</button> */}
                        </div>
                    )
                })
            }

            <input onChange={(e) => {setInput(e.target.value);console.log(input)}}></input>
            <button onClick={() => {
                let copy = [...name];
                copy.unshift(input);
                setName(copy);
            }}>글발행</button>

            {/* <button onClick={() => {setTitle(0)}}>글제목0</button>
            <button onClick={() => {setTitle(1)}}>글제목1</button>
            <button onClick={() => {setTitle(2)}}>글제목2</button> */}

            {
                modal === true ? <Modal title={title} name={name} setName={setName} color={'pink'}/>:null
            }

        </div> 
    );
}


function Modal(props) {
    return (
        <div className="modal" style={{background : props.color}}>
            <h4>{props.name[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    )
}

export default App;
