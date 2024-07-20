const InputText = ({ type = "text", onChange, disabled = false, className, value, placeholder }: any) => {
    return (
        <input
            type={type}
            onChange={onChange}
            className={className}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
        />
    )
}

export default InputText
