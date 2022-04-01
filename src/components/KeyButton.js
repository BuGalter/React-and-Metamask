import React from "react";

const BUTTON_TEXT = 'Get public key';

const styles = {
  div: {
    marginTop: '2rem',
  },
};

function KeyButton() {
  return (
    <div style={ styles.div }>
      <button type="button" className="btn btn-primary">{ BUTTON_TEXT }</button>
    </div>
  );
};

export default KeyButton;