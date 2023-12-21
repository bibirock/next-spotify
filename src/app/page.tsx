/*
 * @Author: Joe.Chen
 * @Date: 2023-12-21 09:00:48
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-12-21 09:42:45
 * @Description: 
*/

"use client";

import { useState } from 'react';

interface ListItemProps {
  name: string;
}

interface ItemProps {
  items: string[]
}

function ListItem({ name }: Readonly<ListItemProps>) {
  return <li>item { name }</li>
}

function List({ items }: Readonly<ItemProps>) {
  return (
    <ul>
      {items.map((itemName, i) => (
        <ListItem name={itemName} key={i}/>
      ))}
    </ul>
  );
}

export default function Home() {
  const [names, setNames] = useState(['foo', 'bar', 'fizz']);

  const handleButtonClick = () => {
    setNames([...names, 'foo']);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <List items={names}/>
      <button onClick={handleButtonClick}>
        Add foo item
      </button>
    </main>
  )
}
