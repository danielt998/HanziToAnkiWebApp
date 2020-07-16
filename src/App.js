import React from 'react';
//import BpkInput from 'bpk-component-input';
import BpkTextarea from 'bpk-component-textarea';
import BpkButton from 'bpk-component-button';
import BpkRadio from 'bpk-component-radio';
//import OutputSelector from './OutputSelector'
import BpkSelect from 'bpk-component-select';
import BpkLabel from 'bpk-component-label';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BpkTextarea rows="10" />
        <BpkLabel>Flashcard type</BpkLabel>
        <BpkSelect>
          <option value="pleco">Pleco</option>
          <option value="anki">Anki</option>
        </BpkSelect>
        {/* <OutputSelector/> */}
        <BpkButton>Generate Flashcards</BpkButton>
      </header>

    </div>
  );
}

export default App;
