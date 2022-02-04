const services = document.querySelectorAll('.service')
const btns = document.querySelectorAll('.service-btn')

const bookServices = document.querySelectorAll('.book')
const bookBtns = document.querySelectorAll('.book-btn')

const journalServices = document.querySelectorAll('.journal')
const journalBtns = document.querySelectorAll('.journal-btn')

const books = document.querySelector('#books')
const journals = document.querySelector('#journals')

const booksBtn = document.querySelector('#books-btn')
const journalsBtn = document.querySelector('#journals-btn')

if (booksBtn) {
    booksBtn.addEventListener('click', () => {
        booksBtn.classList.add('text-black')
        booksBtn.classList.remove('text-gray-400')
        journalsBtn.classList.remove('text-black')
        journalsBtn.classList.add('text-gray-400')

        journals.classList.add('hidden')
        if (books.classList.contains('hidden')) {
            books.classList.remove('hidden')
        }
    })
}

if (journalsBtn) {
    journalsBtn.addEventListener('click', () => {
        journalsBtn.classList.add('text-black')
        journalsBtn.classList.remove('text-gray-400')
        booksBtn.classList.remove('text-black')
        booksBtn.classList.add('text-gray-400')

        books.classList.add('hidden')
        if (journals.classList.contains('hidden')) {
            journals.classList.remove('hidden')
        }

    })
}

if (services[0]) {
    services[0].classList.remove('hidden')
    btns[0].classList.remove('opacity-60')

    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        btn.addEventListener('click', () => {
            for (let i = 0; i < services.length; i++) {
                const serv = services[i];
                serv.classList.add('hidden')
            }
            for (let i = 0; i < btns.length; i++) {
                const btn = btns[i];
                btn.classList.add('opacity-60')
            }
            services[i].classList.remove('hidden')
            btn.classList.remove('opacity-60')
        })
    }
}

if (bookServices[0]) {
    bookServices[0].classList.remove('hidden')
    bookBtns[0].classList.remove('opacity-60')

    for (let i = 0; i < bookBtns.length; i++) {
        const btn = bookBtns[i];
        btn.addEventListener('click', () => {
            for (let i = 0; i < bookServices.length; i++) {
                const serv = bookServices[i];
                serv.classList.add('hidden')
            }
            for (let i = 0; i < bookBtns.length; i++) {
                const btn = bookBtns[i];
                btn.classList.add('opacity-60')
            }
            bookServices[i].classList.remove('hidden')
            btn.classList.remove('opacity-60')
        })
    }
}

if (journalServices[0]) {
    journalServices[0].classList.remove('hidden')
    journalBtns[0].classList.remove('opacity-60')

    for (let i = 0; i < journalBtns.length; i++) {
        const btn = journalBtns[i];
        btn.addEventListener('click', () => {
            for (let i = 0; i < journalServices.length; i++) {
                const serv = journalServices[i];
                serv.classList.add('hidden')
            }
            for (let i = 0; i < journalBtns.length; i++) {
                const btn = journalBtns[i];
                btn.classList.add('opacity-60')
            }
            journalServices[i].classList.remove('hidden')
            btn.classList.remove('opacity-60')
        })
    }
}