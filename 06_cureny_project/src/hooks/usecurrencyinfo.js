import { useEffect, useState } from "react";

function useCurrenyInfo(currency){
    // API data async aata hai, isliye initial empty object rakha hai.
    const [data, setData] = useState({});

    useEffect(()=>{
        // Currency change hote hi naya endpoint hit hoga.
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            // fetch response ko pehle JSON me convert karna padta hai.
            .then((res)=> res.json())
            // API me main rates res[currency] ke andar milte hain.
            .then((res) => setData(res[currency] || {}))
            // Error aaye to app crash na ho, dropdown bas empty rahega.
            .catch(() => setData({}));
    }, [currency])

    // Hook sirf rates data return kar raha hai, setData bahar expose nahi karna.
    return data;
}

export default useCurrenyInfo;
