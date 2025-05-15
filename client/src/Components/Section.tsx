type SectionProps = {
    cn : string,
    children : React.ReactNode,
}

export default function Section(props : SectionProps){
    const {cn, children} = props;
    return <section className={cn}>{children}</section>
}