type DivProps = {
    cn : string,
    children : React.ReactNode,
}

export default function Div(props : DivProps){
    const {cn, children} = props;
    return <div className={cn}>{children}</div>
}