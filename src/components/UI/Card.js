import "./Card.css";

export function Card({ children, className }) {
  return <div className={`card ${className}`}>{children}</div>;
}
