const DropDown =({options,handleDropValue,className})=>{

    const handleChangeValue=(e)=>{
        handleDropValue(e.target.value)
    }

    return(
        <select onChange={handleChangeValue} className={className}>
            {options.map((option,id)=>(
              
               <option key={id} value={option.value} >{option.label}</option> 
            ))}
        </select>
    )
}

export default DropDown;