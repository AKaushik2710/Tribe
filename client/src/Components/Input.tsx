type InputProps = {
    name : string,
    type : string,
    cn : string,
    holder : string,
    onChange : (event : React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Input(props : InputProps){
    const {name, type, cn, holder, onChange} = props;
    return <input name={name} className={cn} type={type} onChange={onChange} placeholder={holder}></input>
}