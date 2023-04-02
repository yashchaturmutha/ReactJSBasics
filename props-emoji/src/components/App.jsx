import React from "react";
import '../index.css'
import emojipedia from '../emojipedia'
import Card from './Card'

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {
      emojipedia.map((emojiitem)=>
      {
      <Card 
      key={emojiitem.id} 
      emoji={emojiitem.emoji} 
      name={emojiitem.name} 
      meaning={emojiitem.meaning}/>
      })
      }
     </dl>
    </div>
  );
}

export default App;
