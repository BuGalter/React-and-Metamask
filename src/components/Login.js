import React from 'react';

const BUTTON_TEXT = 'Login';
const INPUT_TEXT = 'Input password metamask';

const styles = {
  div: {
    marginTop: '2rem',
  },
};

function Login() {
  return (
    <div style={styles.div}>
      <p>MetaMask is locked - please login</p>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">{ INPUT_TEXT }</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        <button type="button" className="btn btn-info">{ BUTTON_TEXT }</button>
      </div>
    </div>
  );
}

export default Login;
