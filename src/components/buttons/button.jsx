import './button.css'

function Button(props) {
    return (
        <button className={props.className}>{props.symbol}</button>
        )
}

export default Button