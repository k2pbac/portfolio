import "./ItemList.css";
import Item from "../Item";

export default function ItemList() {
  const items = [
    { title: "Ruby", experience: "1 Years Experience" },
    { title: "JavaScript", experience: "5 Years Experience" },
    { title: "HTML", experience: "5 Years Experience" },
    { title: "CSS", experience: "5 Years Experience" },
    { title: "Sass", experience: "2 Years Experience" },
    { title: "Figma", experience: "1 Years Experience" },
    { title: "Java", experience: "1 Years Experience" },
    { title: "Docker", experience: "1 Years Experience" },
    { title: "PostgreSQL", experience: "1 Years Experience" },
    { title: "C", experience: "1 Years Experience" },
  ];

  return (
    <div className="item-list">
      <ul>
        {items.map((item, index) => (
          <Item key={index} title={item.title} experience={item.experience} />
        ))}
      </ul>
    </div>
  );
}
