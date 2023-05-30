import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log("Props = ", props)
    console.log("Props.itens = ", props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
            {props.itens.map(item => {
                return <option key={item}>{item}</option>
            })}
            </select>
        </div>
    )
}

export default ListaSuspensa