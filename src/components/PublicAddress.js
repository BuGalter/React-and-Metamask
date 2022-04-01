import React from "react";

const styles = {
  div: {
    marginTop: '2rem',
  },
};

function PublicAddress() {
  return (
    <div style={ styles.div }>
      <div class="card">
        <div class="card-body">
          После логина в MetaMask показывает публичный eth адрес 
          из него или ошибка при не правильном вводе
        </div>
      </div>
    </div>
  );
};

export default PublicAddress;