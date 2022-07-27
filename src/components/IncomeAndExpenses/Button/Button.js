export default function Button({ children, type, onClick, className }) {
  console.log(type);
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
