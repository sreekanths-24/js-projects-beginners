import React, { useRef } from 'react'
import './TicTacToe.css'    // Path: src/components/TicTacToe/TicTacToe.css
import circle_icon from '../Assets/circle.png'    // Path: src/components/TicTacToe/circle_icon.png
import cross_icon from '../Assets/cross.png'    // Path: src/components/TicTacToe/cross_icon.png

let data = ["", "", "", "", "", "", "", "", ""]    // Array to store the data of the boxes

export const TicTacToe = () => {

    let [count, setCount] = React.useState(0);    // To keep track of the number of turns
    let [lock, setLock] = React.useState(false);    // To lock the board after the game is over
    let titleRef = React.useRef(null);    // To access the title element
    let box1 = useRef(null);    // To access the box1 element
    let box2 = useRef(null);    // To access the box2 element
    let box3 = useRef(null);    // To access the box3 element
    let box4 = useRef(null);    // To access the box4 element
    let box5 = useRef(null);    // To access the box5 element
    let box6 = useRef(null);    // To access the box6 element
    let box7 = useRef(null);    // To access the box7 element
    let box8 = useRef(null);    // To access the box8 element
    let box9 = useRef(null);    // To access the box9 element

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];    // Array to store the references of the boxes

    // Function to toggle between X and O
    const toggle = (e,num) => {
        if (lock) {
            return 0;
        }
        if (count%2 === 0) {
            e.target.innerHTML = `<img src="${cross_icon}" />`;
            data[num] = 'X';
            setCount(++count);
        }
        else {
            e.target.innerHTML =`<img src="${circle_icon}" />`;
            data[num] = 'O';
            setCount(++count);
        }
        checkWin();
    }

    // Function to check if the game is over
    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {// 0 1 2
            won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {// 3 4 5
            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {// 6 7 8
            won(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {// 0 3 6
            won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {// 1 4 7
            won(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {// 2 5 8
            won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {// 0 4 8
            won(data[8]);
        }
        else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {// 2 4 6
            won(data[2]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {// 2 4 6
            won(data[6]);
        }
    }

    // Function to lock the board after the game is over
    const won = (winner) => {
        setLock(true);
        if (winner === 'X') {
            titleRef.current.innerHTML = `Congratulations! : <img src="${cross_icon}" /> won the game!`;
        }
        else {  
            titleRef.current.innerHTML = `Congratulations! : <img src="${circle_icon}" /> won the game!`;
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = `Tic Tac Toe game using <span>React</span>`;
        box_array.map((e) => {
            e.current.innerHTML = "";
        })
    }
    
    return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe game using <span>React</span></h1>
        <div className='board'>
            <div className="row1">
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}
