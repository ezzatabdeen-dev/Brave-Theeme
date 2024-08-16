// MENUE SMALL SCREEN
let menueSM = document.getElementById('menueSM');
let openeMenueSm = document.getElementById('openeMenueSm');
let buttonCloseMenueSM = document.getElementById('closeMenueSm');
let closeMenueSm2 = document.getElementById('closeMenueSm2');

openeMenueSm.addEventListener('click', () => {
    menueSM.classList.add('active');
})
buttonCloseMenueSM.addEventListener('click', () => {
    menueSM.classList.remove('active');
})
closeMenueSm2.addEventListener('click', () => {
    menueSM.classList.remove('active');
})

let liItems = document.querySelectorAll('.barenList > li');

liItems.forEach((item) => {
    const title = item.querySelector('.title');
    const items = item.querySelector('.items');

    
    items.style.maxHeight = '0px';
    items.style.overflow = 'hidden';
    items.style.transition = 'max-height 0.5s ease-in-out';

    title.addEventListener('click', () => {
        const isActive = title.classList.contains('active');
        
        liItems.forEach((li) => {
            if (li !== item) {
                li.querySelector('.title').classList.remove('active');
                li.querySelector('.items').style.maxHeight = '0px';
            }
        });
        
        if (!isActive) {
            title.classList.add('active');
            items.style.maxHeight = items.scrollHeight + 'px';
        } else {
            title.classList.remove('active');
            items.style.maxHeight = '0px';
        }
    });
});

// START MENUE bar
let menuLinks = document.querySelectorAll('.nav-link > ul > li');
menuLinks.forEach((link) => {
    const popupMenu = link.querySelector('.popup-menu-bar, .fullContainer-popup-fixed');
    
    if (popupMenu) {
        link.addEventListener('click', () => {
            popupMenu.classList.toggle('active');
        });

        link.addEventListener('mouseenter', () => {
            popupMenu.classList.add('active');
        });

        link.addEventListener('mouseleave', () => {
            popupMenu.classList.remove('active');
        });
    }
});

// START SEARCH
let seachArea = document.getElementById('seachArea');
document.getElementById('openSearch').addEventListener('click', () => {
    seachArea.classList.add('active');
});
document.getElementById('closeSearch').addEventListener('click', () => {
    seachArea.classList.remove('active');
});

// START SCROLL FUNCTAION
let toUp = document.getElementById('toUp');
toUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

let changebackgroundHeader = document.getElementById('changebackgroundHeader');
window.addEventListener('scroll', function() {
    if (window.scrollY >= 420) {
        toUp.classList.add('active');
        changebackgroundHeader.style.background = '#6d0eb1';
    } else {
        toUp.classList.remove('active');
        changebackgroundHeader.style.background = 'transparent';
        changebackgroundHeader.classList.add('blur');
    }
});

// TEXT TYPE
const textElement = document.getElementById('typing');
const texts = ["auction", "taxi", "private airlines", "it", "maritime", "theatre", "movie", "trucking", "environmental", "SEO"];

let textIndex = 0;
let charIndex = 0;

function type() {
    if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            textElement.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }
}

function erase() {
    if (charIndex >= 0) {
        const currentText = texts[textIndex];
        textElement.innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 0);
    }
}
type();

// TYPE YEAR IN FOOTER
let currentYear = new Date().getFullYear();
document.querySelector('.copyright-year').textContent = currentYear;