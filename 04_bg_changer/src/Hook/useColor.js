import { useEffect, useState } from "react";

export const useColor = () =>{

    const generateColor = () =>{
        // Random hex code banane ka normal JS logic custom hook ke andar rakha hai.
        const hex = "0123456789abcdef";
        let color = "#";

        for(let i= 0; i<6; i++){
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const [bgColor, setBgColor] = useState(() => {
        // Lazy initial state: first render par localStorage check hota hai.
        return localStorage.getItem("color") || generateColor();
    });

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // bgColor badalte hi latest color browser storage me save ho jata hai.
        localStorage.setItem("color", bgColor);
    }, [bgColor]);

    const changeColor = () =>{
        setBgColor(generateColor());
    };

    const copyColor = async () =>{
        try {
            // Clipboard API async hoti hai, isliye await use kiya hai.
            await navigator.clipboard.writeText(bgColor);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err){
            console.error("Failed to copy: ", err);
        }
    };

    return {bgColor, changeColor, copyColor, copied};
};
