import React from 'react';

import BpkRadio from 'bpk-component-radio';

const OutputSelector = ({
    isAnki, isPleco,
}) => (
<div>
  <BpkRadio label="Anki" />
  <br />
  <BpkRadio label="Pleco" />
</div>
)

export default OutputSelector;