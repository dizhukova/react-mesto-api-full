import React from 'react';

function InfoTooltip(props) {
    return (
      <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container popup__container_reg-status">
        <button className="popup__close-button" type="button" title="Закрыть" aria-label="Закрыть" onClick={props.onClose}></button>
          <img className="popup__status-icon" src={props.icon} alt="Статус регистрации"/>
          <p className="popup__status-message">{props.message}</p>
        </div>
      </div>
    )
  }
  
  export default InfoTooltip;

