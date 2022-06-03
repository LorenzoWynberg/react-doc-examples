import React from "react";
import ListItem from "./ListItem";

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                    value={number} />
            )}
        </ul>
    );
}

export default NumberList;