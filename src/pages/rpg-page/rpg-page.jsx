import React, { useState, useEffect } from 'react';
import './rpg-page.scss';
import {items, heroes} from './mock-data/';
import { Hero } from './models/hero.class';

export default function RpgPage(props) {  
  const [state, setState] = useState(
    {      
      chest: {
        items 
      },
      heroList: [
        new Hero(heroes[0]),
        new Hero(heroes[1]),
      ]      
    }
  ); 
  
  const getItemFromChest = (chest, hero) => {    
    const totalChance = chest.items.reduce((total, item) => total + item.chance, 0);
    if (totalChance === 100) {
      const sortChestItems = chest.items.sort((item1, item2) => item1.chance - item2.chance);    
      const luckyNumber = Math.floor(Math.random() * 10000) / 100;
      let threshold = 0;
      let itemIndex = 0
      do {
        threshold = threshold + sortChestItems[itemIndex].chance;
        itemIndex++;
      } while (threshold < luckyNumber)    
      alert('You have got a ' + sortChestItems[itemIndex-1].name);
      addItem(sortChestItems[itemIndex-1].name, hero);  
      setState(state => {
        return {...state, heroList: state.heroList}
      })
      
    } else {
      alert('Total Chance error ' + totalChance);
    }    
  }

  const getHero = () => {
    console.log(state.heroList)
  }

  const addItem = (item, hero) => {
    hero.addItem(item)
  }

  const testOpenChest = () => {
    const itemGainMap = new Map();    
    for (let i = 0; i < 1000; i++) {
      const item = getItemFromChest(state.chest);
      let itemCount = 1;
      if (itemGainMap.has(item)) {
        itemCount = itemGainMap.get(item) + 1;        
      }
      itemGainMap.set(item, itemCount)
    }
    console.log(itemGainMap);    
  }
   
  return (
    <div className="component-wrapper">
      <h1>RpgPage</h1>
      <button onClick={() => getItemFromChest(state.chest, state.heroList[0])}>Open Treasure Chest</button>     
      <button onClick={() => getHero()}>get heroes</button> 
      {/* <button onClick={() => testOpenChest()}>Test Treasure Chest</button>      */}
      <table>
        <thead>
          <tr>
            <th>item</th>
          </tr>          
        </thead>
        <tbody>
          {state.heroList[0].getItems().map(item => (
            <tr key={state.heroList[0].getItems().indexOf(item)}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>        
      </table>
    </div>
  );
  
}

// export default function RpgPage() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }