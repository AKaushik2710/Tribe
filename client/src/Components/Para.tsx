type ParaProps = {
    cn : string,
    children : React.ReactNode
}

export default function Para(props : ParaProps){
    const {cn, children} = props;
    return <p className={cn}>{children}</p>
}