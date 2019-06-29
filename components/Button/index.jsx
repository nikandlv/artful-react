export default function Button(props) {
    return (
        <button className={props.color}>{props.children}</button>
    )
}