// Splide of Quotes
function splideQuotes () {
    const quotes = [
        {
            text: '«Диво <span>Бгаґавад Ґіти</span> полягає в її здатності за допомогою практичних порад та життєвої мудрості обдарувати нас божественним одкровенням.В ній мудрість життя, філософія та одкровення, які формують релігію — те, чого ми шукаємо та чого потребуємо. \n\n Ця книга має своє місце в душі людини, незалежно від її релігійної приналежності.Вона розмовляє з усіма».',
            author: {
                name: 'Герман ГЕССЕ',
                text: 'німецький письменник, філософ, лауреат Нобелівської премії.',
            }
        },
        {
            text: '«<span>Бгаґавад Ґіти</span>  порівнює людину із перевернутим деревом, коріння якого росте згори, з неба.Ця ідея пройшла крізь віки.Ведичні уявлення про світ зустрічаємо у Платона в „Тимеї“, де він каже: „...бо ми, люди, по своїй сутності не земні, а небесні рослини“».',
            author: {
                name: 'Карл Ґустав ЮНҐ',
                text: 'швейцарський психоаналітик, психолог, філософ',
            }
        },
        {
            text: '«Коли я читаю Бгаґавад Ґіту, я запитую себе: то як Бог створив Всесвіт ? Всі інші питання видаються зайвими».',
            author: {
                name: 'Альберт ЕЙНШТЕЙН',
                text: 'американський, німецький та швейцарський фізик - теоретик',
            }
        },
        {
            text: '«Я був зобов\'язаний Бгаґавад Ґіті чудовим днем.Це книга книг.В ній наче ціла імперія говорить із нами: немає нічого дріб’язкового, незначного, все величне, послідовне, ґрунтовне.Це голос давнього розуму, який міркує категоріями іншої епохи та інших обставин, над тими ж питаннями, які турбують нас і тепер».',
            author: {
                name: 'Ральф Уолдо ЕМЕРСОН',
                text: 'американський філософ та письменник',
            }
        },
        {
            text: '«Щоранку я вмиваю свій розум у величній, космогонічній філософії Бгаґавад Ґіти.У порівнянні з нею весь наш сучасний світ та його література видаються блідими та дрібними».',
            author: {
                name: 'Генрі Девід ТОРО',
                text: 'мериканський письменник, мислитель, натураліст та суспільний діяч',
            }
        },
        {
            text: '«Бгаґавад Ґіта — це вичерпна енциклопедія духовного шляху та довершене вираження цінностей, без яких неможливо уявити сучасне суспільство.Вона відтворює одне з найосяйніших та багатогранних філософських вчень.Вона надає вражаючу панораму духовних та інтелектуальних пошуків.Тому Ґіта завжди буде однаково цінною не лише для Індії, але й для всього людства».',
            author: {
                name: 'Олдос ГАКСЛІ',
                text: 'англійський письменник',
            }
        },
        {
            text: '«Бгаґавад Ґіта залишила надзвичайний слід у житті всього людства, оскільки навчає як віддатися Богові та присвятити Йому своє життя».',
            author: {
                name: 'Альберт ШВЕЙЦЕР',
                text: 'німецький філософ, богослов, місіонер, лауреат Нобелівської премії',
            }
        },
        {
            text: '«У хвилини тривожних сумнівів та гірких розчарувань, коли на горизонті не видно і променю надії, я звертаюся до Бгаґавад Ґіти та неодмінно зустрічаю вірш, який приносить розраду.Посмішка одразу з’являється на моєму обличчі та я забуваю про смуток.Ті, хто роздумує над Ґітою, завжди знаходять у ній радість та  новий зміст.',
            author: {
                name: 'Махатма ҐАНДІ',
                text: 'ідеолог національно - визвольного руху Індії',
            }
        },
    ]

    // Generate Slide
    const generateQuote = (quote) => {
        const slide = document.createElement('li');
        const text = document.createElement('p');
        const author = document.createElement('div');
        const spanName = document.createElement('span');
        const spanText = document.createElement('span');
    
        slide.classList.add('splide__slide');
        text.classList.add('splide__slide-text');
        author.classList.add('splide__slide-author');
        
        text.innerHTML = quote.text;
        spanName.textContent = quote.author.name;
        spanText.textContent = quote.author.text;
        
        author.appendChild(spanName);
        author.appendChild(spanText);
    
        slide.appendChild(text);
        slide.appendChild(author);
        
        return slide
    };

    // Quotes splide
    // Add to HTML
    const quotesSplide = new Splide('.quotes', {
        // Loop
        type: 'loop',
        speed: 1500,

        // Autoplay
        autoplay: true,
        interval: 10000,
        pauseOnHover: true,

        pagination: false,
    });

    // Mount the Splide instance after adding slides
    quotesSplide.mount();

    // Add slides to the Splide instance
    quotes.forEach(quote => {
        quotesSplide.add(generateQuote(quote));
    });
}

// Splide of Videos
function splideVideo() {
    const videosID = [
        'JiKAJNaOyGE',
        '-vt5vViKbzw',
        'DXGd8uxenzM',
    ]

    // Generate Videos
    const generateVideo = (video) => {
        try {
            const slide = document.createElement('li');
            const iframe = document.createElement('iframe');

            iframe.src = `https://res.cloudinary.com/dy4mln81z/video/upload/v1692962982/videos/100275_srzps6.mp4`;
            // iframe.src = `https://www.youtube.com/embed/${video}`;
            iframe.allowFullscreen = true;

            slide.classList.add('splide__slide');

            slide.appendChild(iframe);
            return slide;
        } catch (error) {
            console.error('Error generating video slide:', error);
            return null;
        }

    }

    // Videos splide
    // Initialize Splide instance
    const videoSplide = new Splide('.videos', {
        // Loop
        type: 'loop',
        speed: 1500,
        pagination: false,
    });

    // Mount the Splide instance after adding slides
    videoSplide.mount();

    // Add slides to the Splide instance
    videosID.forEach(videoID => {
        videoSplide.add(generateVideo(videoID));
    });
}


// Splide of Donations
function splideDonations() {
    const splide = [
        {
            src: 'assets/img/book_1.webp',
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia consectetur earum dignissimos voluptate, velit eveniet! Asperiores ea odit earum eos minus, fuga laboriosam amet.'
        }
    ]

    const videoSplide = new Splide('.donate', {
        // Loop
        type: 'loop',
        speed: 1500,
        pagination: false,
    });

    // Mount the Splide instance after adding slides
    videoSplide.mount();

}

window.addEventListener('DOMContentLoaded', () => {
    // Initial quotes splides
    splideQuotes()
    
    // Initial videos splides
    splideVideo()

    // Initial videos splides
    splideDonations()
})
