export default function Item({ title, experience }) {
    return (
        <>
            <p className='heading-lg nunita-bold '>{title}</p>
            <span className='text-md'>{experience}</span>
        </>
    );
}