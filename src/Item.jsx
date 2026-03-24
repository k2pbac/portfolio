export default function Item({ title, experience, index }) {
  return (
    <li key={index}>
      <p className="heading-lg nunita-bold ">{title}</p>
      <span className="text-md">{experience}</span>
    </li>
  );
}
