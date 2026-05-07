import { REGEX } from "../constants/regex";
import {useEffect, useState} from 'react';

export function useInput(initValue){
    // custom hooks
    const [ inputValues, setInputValues ] = useState(initValue);
    const [ isValid, setValid ] = useState(false);

    useEffect(() => {
        const entries = Object.entries(inputValues);
        const validList = entries.filter(([key, value]) => {
            const regex = REGEX[key];
            if(!regex) return true;
            return regex.test(value);
        setValid(validList.length === entries.length);
    },[inputValues]);
    
    // useEffect(() => {
    //     const entries = Object.entries(inputValues);
    //     const validList = entries.filter(([key, value]) => {
    //     const regex = REGEX[key];
    //     if(!regex) return true;
    //     return regex.test(value);
    //     }) 

    // }, [inputValues]);

    const handleInputOnChange = (e) => {
        const {name, value} = e.target;
        
        // setValid(REGEX.)
    
        setInputValues({
        ...inputValues,
        [name]: value,
        });
    }

    setValid(validList.length === entries.length);
    }, [inputValues]);

    const handleInputOnChange = (e) => {
        const {name, value} = e.target;
            
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    }

    return {
        inputValues,
        setInputValues,
        isValid,
        handleInputOnChange,
    }
}