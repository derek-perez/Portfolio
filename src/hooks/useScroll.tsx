import { useEffect } from "react";


export const useScroll = () => {
    useEffect(() => {
        const section = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;
        const hash = window.location.hash;

        if (hash === '') {
            window.history.pushState({}, "", "#intro");

            setTimeout(() => {
                document.getElementById('intro')!.classList.add('sectionActive');
            }, 500);
            
        } else if (hash === '#intro') {
            document.getElementById('intro')!.classList.add('sectionActive');

        } else {
            section.forEach(sec => {
                if (`#${sec.id}` === hash) {
                    sec.scrollIntoView();
                }
            })
        }


        const navLinks = document.querySelectorAll('.columnNavLinks');

        document.addEventListener('scroll', () => {

            section.forEach(sec => {
                sec.classList.remove('sectionActive');
                let top = window.scrollY;
                let offset = sec.offsetTop - 350;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');


                if (top >= offset && top < offset + height) {
                    window.history.pushState({}, "", `#${id}`)
                    sec.classList.add('sectionActive')

                    navLinks.forEach(links => {
                        links.classList.remove('activeNavColumn');

                        document.querySelector(`#navbarColumn > div > a[href*=${id}]`)?.classList.remove('inactiveNavColumn');
                        document.querySelector(`#navbarColumn > div > a[href*=${id}]`)?.classList.add('activeNavColumn');
                    })

                } else if (top! >= offset && top > offset + height) {
                    sec.classList.remove('sectionActive');

                    navLinks.forEach(links => {
                        links.classList.add('inactiveNavColumn');
                    })
                }

            })
        })

    }, []);
}
