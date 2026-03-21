import './ItemList.css';
import Item from '../Item';

export default function ItemList() {
    return (
        <div className="item-list">
            <ul>
                <li >
                    <Item title="HTML" experience="4 Years Experience" />
                </li>
                <li>
                    <Item title="CSS" experience="3 Years Experience" />
                </li>
                <li>
                    <Item title="JavaScript" experience="2 Years Experience" />
                </li>
                <li>
                    <Item title="Accessibility" experience="2 Years Experience" />
                </li>
                <li>
                    <Item title="React" experience="3Years Experience" />
                </li>
                <li>
                    <Item title="Sass" experience="2 Years Experience" />
                </li>
            </ul>
        </div>
    );
}