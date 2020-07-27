import React from 'react';
import RippleButton from './ripplebutton.component';

function App() {
  return (
    <React.Fragment>
     <RippleButton buttonText="RippleButton" className="buttonStyle" textStyle="textStyle" onClick={(e) => console.log(e) } />
    </React.Fragment>
  );
}

export default App;
