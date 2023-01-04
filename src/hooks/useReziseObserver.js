import {useState} from "react";
export function useReziseObserver() {
    const element = document.getElementById('root')
    const [clientWidth, setClientWidth] = useState(0);

    const ReziseObserver =  new ResizeObserver((entries) => {
        setClientWidth(entries[0]?.contentRect.width);
    });

    ReziseObserver.observe(element);

    return clientWidth;
}

