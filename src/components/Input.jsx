import { useId } from "react";
import React  from "react";

const Input= React.forwardRef(function Input({
    label,
    type,
    className,
    ...props
},ref){
    const Id = useId()
    return(
        <div className="w-full">
            {label&& <label
            className="inline-block mb-1 pl-1"
            htmlFor="{id}">
                {label}
                </label>
                }
                <input type={type}
                className={`px-3 py-2 rounded-lg bg-white 
                text-blackoutline-none focus:bg-gray-50 
                duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={Id}
             />

        </div>
    )
})

export default Input