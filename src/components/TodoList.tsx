import React, { useState } from "react";
import { Item } from "../model"; // we need to import the type
import TodoItem from "./TodoItem";

export default function TodoList() {
  // note the <Item[]> syntax!
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      tags: ["react", "typescript"],
      isDone: false,
      priority: 5,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      tags: ["romantic", "typescript"],
      isDone: false,
      priority: 3,
    },
  ]);

  const toggle = (id: number) => {
    // TODO implement. Tip: use map
    const updatedList: Item[] = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }
    });
    setList(updatedList);
  };
  // console.log("newList", list);
  return (
    <p>
      {list.map((item) => {
        return <TodoItem key={item.id} item={item} toggleDone={toggle} />;
      })}
    </p>
  );
}
