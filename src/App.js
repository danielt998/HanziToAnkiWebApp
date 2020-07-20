import React from 'react';
import BpkTextarea from 'bpk-component-textarea';
import BpkButton from 'bpk-component-button';
import BpkSelect from 'bpk-component-select';
import BpkLabel from 'bpk-component-label';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {flashcardType:"pleco"}
  }
  render () {
    return (
    <div className="App">
      <header className="App-header">
        <BpkTextarea rows="10" />
        <BpkLabel>Flashcard type</BpkLabel>
        <BpkSelect onChange={(e) => this.state=e.target.value}>
          <option value="pleco">Pleco</option>
          <option value="anki">Anki</option>
        </BpkSelect>
        <BpkButton>Generate Flashcards</BpkButton>

      </header>

    </div>
    );
  }
}

export default App;
