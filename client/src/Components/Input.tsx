type InputProps = {
    name : string,
    type : string,
    cn : string,
    holder : string,
    ref : React.RefObject<HTMLInputElement>,
    onChange : (event : React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Input(props : InputProps){
    const {name, type, cn, ref, holder, onChange} = props;
    return <input name={name} ref={ref} className={cn} type={type} onChange={onChange} placeholder={holder}></input>
}