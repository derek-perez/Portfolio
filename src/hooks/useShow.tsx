import { useEffect, useRef } from "react"


interface Props {
    p: string,
    button: string,
    width: number
}

export const useShow = ({ p, button, width }: Props) => {

    const clicked = useRef(false);

    useEffect(() => {
        const pInfo = document.getElementById(p);
        const pButton = document.getElementById(button);
        
        return () => {
            if (window.innerWidth <= width) {
                pButton!.style.display = 'block';
            }

            window.addEventListener('resize', () => {
                if (window.innerWidth <= width) {
                    pButton!.style.display = 'block';
                } else if (window.innerWidth > width) {
                    pButton!.style.display = 'none';
                }
            })
    
            pButton!.addEventListener('click', () => {
                pInfo!.classList.toggle('textHidden');
    
                if (clicked.current) {
                    pButton!.innerHTML = 'Ver más +'
                    clicked.current = false
                } else {
                    pButton!.innerHTML = 'Ver menos -'
                    clicked.current = true
                }
            })
        }
    }, [])
}