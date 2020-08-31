import React, { useState } from 'react';
import BpkTextarea from 'bpk-component-textarea';
import BpkButton from 'bpk-component-button';
import BpkCheckbox from 'bpk-component-checkbox';
import BpkSelect from 'bpk-component-select';
import BpkLabel from 'bpk-component-label';
import BpkInput from 'bpk-component-input';

import './App.scss';

function App() {

  const logStuff = function() {
    console.log(flashcardType + ", " + singleCharacters + ", " + hskLevel);
  }

  const [flashcardType, setFlashcardType] = useState('Anki');
  const [hskLevel, setHskLevel] = useState(0);
  const [singleCharacters, setSingleCharacters] = useState(false);
    return (
    <div className="App">
      <header className="App-header">
        <BpkTextarea rows="10" />
        <div>
        <div class ="leftDiv">
        <BpkLabel>Flashcard type</BpkLabel>
        <BpkSelect onChange={(e) => setFlashcardType(e.target.value)}>
          <option value="Anki">Anki</option>
          <option value="Pleco">Pleco</option>
        </BpkSelect>
        <br />
        <br />
        <BpkCheckbox
          name="single-char"
          onChange={() => setSingleCharacters(!singleCharacters)}
          label="Generate flashcards for single characters"
          checked={singleCharacters}
        />
        <br />
        <br />
        <BpkLabel>HSK Level</BpkLabel>
        <BpkInput onChange={(e) => {setHskLevel(e.target.value)}}/>
        </div>
        <div class ="rightDiv">
          </div>
          </div>
        {<BpkButton onClick={getFlashcardFile}>Generate Flashcards</BpkButton>}
      </header>

    </div>
    );

  function getFlashcardFile() {
    const url = `http://localhost:5002/generate?hskLevel=${hskLevel}&singleCharacters=${singleCharacters}&flashcardType=${flashcardType}`;
     const text = fetch(url);
     const data = new Blob([text], {type: 'text/plain'});
     console.log(url);
  //   return window.URL.createObjectURL(data);

  //  // document.getElementById('download_link').href = url;
  // }
   }
}

export default App;
