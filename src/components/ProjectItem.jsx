
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}



export default function ProjectItem({ title, technologies, link, imageSrc, imageAlt }) {
    return (
        <div className="project-item">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imageSrc} alt={imageAlt} />

            </a>
            <p className='text-md'>{toTitleCase(title)}</p>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}><img className="icon" src={`./icons/${tech}.svg`} alt={`../icons/${tech}.svg`} /></li>
                ))}
            </ul>
        </div>
    );
}   