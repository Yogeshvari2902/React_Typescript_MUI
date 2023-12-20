import React from 'react'

function ListandKeys(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // <li>{number}</li>
        <li key={number.toString()}>{number}</li>
    );
  return (
    <div>
        <h5>List and Keys</h5>
        <ul>{listItems}</ul>
    </div>
    
  );
}

export default ListandKeys