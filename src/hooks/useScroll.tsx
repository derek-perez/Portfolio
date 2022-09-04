import { useEffect } from "react";


export const useScroll = () => {

    const lng = window.location.pathname

    useEffect(() => {
        const section = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;
        const hash = window.location.hash;

        if (hash === '') {
            window.history.pushState({}, "", `${lng.includes('es') ? '#Introducci%C3%B3n' : '#Introduction'}`);

            setTimeout(() => {
                document.getElementById(`${lng.includes('es') ? 'Introducción' : 'Introduction'}`)?.classList.add('sectionActive');
            }, 500);
        }

        if (hash === '#Introducci%C3%B3n' || hash === '#Introduction') {
            document.getElementById(`${lng.includes('/es/') ? 'Introducción' : 'Introduction'}`)?.classList.add('sectionActive');

            document.querySelector(`#navbarColumn > div > div[title*=${lng.includes('es') ? 'Introducción' : 'Introduction'}]`)?.classList.remove('inactiveNavColumn');
            document.querySelector(`#navbarColumn > div > div[title*=${lng.includes('es') ? 'Introducción' : 'Introduction'}]`)?.classList.add('activeNavColumn');
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
                let top = window.scrollY;
                let offset = sec.offsetTop - 350;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                let ids = id?.split(' ')
                let id_to_url = '';

                if (top >= offset && top < offset + height) {
                    if (ids?.length === 2) {
                        id = ids[0]
                        id_to_url = ids[1]
                    } else {
                        id_to_url = id!
                    }

                    window.history.pushState({}, "", `#${id_to_url}`)
                    sec.classList.add('sectionActive')

                    navLinks.forEach(links => {
                        links.classList.remove('activeNavColumn');

                        document.querySelector(`#navbarColumn > div > div[title*=${id}]`)?.classList.remove('inactiveNavColumn');
                        document.querySelector(`#navbarColumn > div > div[title*=${id}]`)?.classList.add('activeNavColumn');
                    })
                }

            })
        })
    }, []);
}
