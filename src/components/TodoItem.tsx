// src/components/TodoItem.tsx
import React from "react";
import { Item } from "../model";

type Props = {
  // we should receive a todo item object
  item: Item;

  // and a function that we don't have to give
  //  anything, and doesn't return anything either
  //  (it "just does" something)
  toggleDone: (id: number) => void;

  // ..and maybe we'll add some more stuff later,
  //  this will be enough for now
};

export default function TodoItem(props: Props) {
  return (
    <p>
      <button onClick={props.toggleDone.bind(null, props.item.id)}>
        {/* {console.log(props.item.isDone, props.toggleDone)} */}
        {props.item.isDone ? "[ ]" : "[X]"}
      </button>
      <span>{props.item.text}</span>
    </p>
  );
}
