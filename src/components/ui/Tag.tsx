const Tag = (props: { text: string }) => {
    return (
        <span className="border border-border-light text-primary-300 text-xs uppercase font-medium tracking-widest px-3 py-1 rounded-full">
            {props.text}
        </span>
    )
}

export default Tag;
