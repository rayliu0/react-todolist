import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
let data = [
    {id: 0, text: '天气不错哦!!!', complete: false},
    {id: 1, text: '天气不错哦!!!', complete: false},
    {id: 2, text: '出去玩啊!!!', complete: true},
   ]
   
const rootElement = document.getElementById("root");
ReactDOM.render(<App data={data}/>, rootElement);

