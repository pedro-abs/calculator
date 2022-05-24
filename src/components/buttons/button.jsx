import './button.css'

function Button(props) {
    return (
        <button onClick={() => props.onClick(props.symbol) || (() => null)} className={props.className}>{props.symbol}</button>)
}

export default Button