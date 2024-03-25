const InputField = ({ type, placeholder, autoFocus, pattern, maxLength, minLength, handleVlaue, required, className, name, label, id }) => {
    const handleChange = (e) => {
        if (type === 'file') {
            handleVlaue(e.target.files[0], name, type,)
        } else if (type === 'checkbox') {
            handleVlaue(e.target.checked, name, type)
        } else {
            handleVlaue(e.target.value, name, type)

        }
    }
    return (
        < >
            <div>
                <label htmlFor={id}>{label}</label>
            </div>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                required={required}
                className={className}
                name={name}
                id={id}
                autoFocus={autoFocus}
                maxLength={maxLength}
                minLength={minLength}
                pattern={pattern}
            />
        </>
    )
}

export default InputField;