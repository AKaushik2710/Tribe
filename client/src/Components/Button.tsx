type ButtonProps = {
    cn : string,
    children : React.ReactNode,
    onClk : (event : React.MouseEvent<HTMLButtonElement>)=> void
}

export default function Button(props : ButtonProps){
    const {cn, children, onClk} = props;
    return <button className={cn} onClick={onClk}>{children}</button>
}