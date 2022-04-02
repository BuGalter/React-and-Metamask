import React, { useState } from 'react';
import Web3 from 'web3/dist/web3.min';

const BUTTON_TEXT = 'Get public key';

const styles = {
  div: {
    marginTop: '2rem',
  },
};

function KeyButton() {
  const [isShow, setShow] = useState(false);
  const [text, setText] = useState('');

  const getProvider = () => Web3.givenProvider;

  const clickHandler = async () => {
    const provider = getProvider();
    setShow(true);
    if (!provider || !provider.isMetaMask) {
      setText('Install metamask plugin in browser!');
      return
    }
    setText('MetaMask is locked - please login!');
    await provider.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(provider);
    const userAccount = await web3.eth.getAccounts();
    const account = userAccount[0];
    setText(account);
  }
  return (
    <div style={styles.div}>
      <button type="button" className="btn btn-primary" onClick={clickHandler}>{ BUTTON_TEXT }</button>
      { isShow && (
        <div style={styles.div}>
          <div className="card">
            <div className="card-body">{ text }</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KeyButton;
