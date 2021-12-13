import s from './ButtonAuth.module.css';

function ButtonAuth({ type, onClick, buttonName, disabled }) {
  return (
    <div>
      <button type={type} onClick={onClick} disabled={disabled}>
        {buttonName}
      </button>
    </div>
  );
}

export { ButtonAuth };
