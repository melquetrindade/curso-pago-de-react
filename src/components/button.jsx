function Button({children, onClick}){
    return (
        <button onClick={onClick} className="bg-slate-400 text-white p-2 rounded-md">
            {children}
        </button>
    )
}

export default Button