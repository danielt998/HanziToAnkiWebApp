import React, { useState } from 'react';
import BpkTextarea from 'bpk-component-textarea';
import BpkButton from 'bpk-component-button';
import BpkSelect from 'bpk-component-select';
import BpkLabel from 'bpk-component-label';

import './App.scss';

function App() {
  const [flashcardType, setFlashcardType] = useState('Anki');
    return (
    <div className="App">
      <header className="App-header">
        <BpkTextarea rows="10" />
        <div>
        <div class ="leftDiv">
        <BpkLabel>Flashcard type</BpkLabel>
        <BpkSelect onChange={(e) => setFlashcardType(e.target.value)}>
          <option value="pleco">Pleco</option>
          <option value="anki">Anki</option>
        </BpkSelect>
        </div>
        <div class ="rightDiv">
          </div>
          </div>
        {/*<BpkButton onClick={this.getFlashcardFile}>Generate Flashcards</BpkButton>*/}
        <BpkButton>Generate Flashcards</BpkButton>


      </header>

    </div>
    );

  // logState() {
  //   console.log(this.state);
  // }

  // getFlashcardFile(){
  //   const text = fetch('http://localhost:5002/generate');
  //   const data = new Blob([text], {type: 'text/plain'});
  //   console.log(this.state)
  //   return window.URL.createObjectURL(data);

  //  // document.getElementById('download_link').href = url;
  // }
}

export default App;
