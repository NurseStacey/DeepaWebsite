import { useRef } from 'react';

export default function MyInput({
    labelText,
    labelStyle,
    handleChange,
    inputValue,
    inputName,
    inputType,
    inputStyle,
    inputFieldStyle,
    inputKey,
    disable
})
{
    const fileInputRef = useRef(null);

    return (
        <div
            className={(inputStyle===undefined) ? 'my_input' : ''}
            style={{
                ...inputStyle
            }}
            >
                
            {(labelText==='')?<></>:
                <label style={labelStyle}>{labelText}</label>            
            }

            <input
                key={inputKey}
                style={(inputFieldStyle===undefined)?{width:'30%'}:inputFieldStyle}
                disabled={disable}
                ref={fileInputRef}
                name={inputName}
                onChange={handleChange}  
                type={inputType}
                value={inputValue}>                
            </input>
        </div>
    )
}