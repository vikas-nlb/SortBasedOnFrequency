import React, { useState } from 'react';

function Main() {
    const [inputValue, setInputValue] = useState('');
    const [arrayValue, setArrayValue] = useState([]);
    const [sortedArray, setSortedArray] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        if (isNaN(inputValue)) {
            alert('Not an number');
            setInputValue('')
        } else if (!inputValue) {
            alert('Empty input cant be processed')
        } else {
            arrayValue.push(inputValue);
            arrayValue.sort();
            setArrayValue(arrayValue);
            setInputValue('')
        }
    }
    function handleInputChange(e) {

        let v = e.target.value;
        setInputValue(v)
    }
    function handleSort() {
        var arr = arrayValue;
        var newArr = [];
        var finalArr=[];
        let i = 0;
        while (i < arr.length) {
            let v = arr[i];
            let temp = [];
            temp.push(v);
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] == v) {
                    temp.push(arr[j]);
                }
            }
            newArr.push(temp)
            i = i + temp.length;

        }
        let sortedArr = newArr.sort(compareArrayLenghtAndSort);
        for(let i =0; i<sortedArr.length;i++){
            finalArr = finalArr.concat(sortedArr[i]);
        }
        setSortedArray(finalArr)
    }
    function compareArrayLenghtAndSort(a,b) {
        if(a.length > b.length) return -1;
    if(a.length < b.length) return 1;
    return 0;
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='form-container'>
                <input value={inputValue} type="number" onChange={handleInputChange} placeholder="Enter a number" />
                <button className='form-button'>Sumbit</button>
            </form>
            <ul className='list-container'>
                {arrayValue.map((item, index) => (
                    <li key={index+item}>[{item}]</li>
                ))}
            </ul>
            <div className="sort-container">
                <button onClick={handleSort} className='sort-button'> Sort based on frequency </button>
            </div>
            <ul className='list-container'>
                {sortedArray.map((item, index) => (
                    <li key={item * index}>[{item}]</li>
                ))}
            </ul>
        </div>
    )
}

export default Main;