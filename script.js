document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const catScreen = document.getElementById("catScreen");
    const virusScreen = document.getElementById("virusScreen");
    const terminal = document.getElementById("terminal");
    const fakeStopBtn = document.getElementById("fakeStopBtn");
    
    // ССЫЛКА НА ТВОЕГО ПИНГВИНА
    const imageUrl = "https://raw.githubusercontent.com/shlepaerror-code/Kotiki/main/file_0000000014c88210891388fe25cb016a.png"; 
    
    let totalDownloads = 0;
    let x = 100, y = 100; 
    let vx = 6, vy = 6; // Скорость полета кнопки

    // Текст с ловушкой для пользователя
    function typeText() {
        const line = document.createElement('div');
        line.innerText = "Directory of C:\\Windows\\System67\\...\n КРИТИЧЕСКАЯ ОШИБКА!\n ВИРУС УНИЧТОЖАЕТ ФАЙЛЫ!\n ДЛЯ ОСТАНОВКИ НАЖМИТЕ 'РАЗРЕШИТЬ' В ОКНЕ БРАУЗЕРА!";
        terminal.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
        if (terminal.children.length > 30) terminal.removeChild(terminal.firstChild);
        setTimeout(typeText, 100); 
    }

    // Скачивание картинки
    async function downloadImage() {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `laser67_${totalDownloads}.jpg`;
            
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            totalDownloads++;
            fakeStopBtn.innerText = `ОТКЛЮЧИТЬ (${totalDownloads})`;
        } catch (e) {
            console.log("Ошибка", e);
        }
    }

    // Логика полета кнопки (DVD-эффект)
    function moveButton() {
        const maxX = window.innerWidth - fakeStopBtn.clientWidth;
        const maxY = window.innerHeight - fakeStopBtn.clientHeight;

        x += vx;
        y += vy;

        // Отскок от стен
        if (x <= 0 || x >= maxX) vx *= -1;
        if (y <= 0 || y >= maxY) vy *= -1;

        fakeStopBtn.style.left = x + 'px';
        fakeStopBtn.style.top = y + 'px';

        requestAnimationFrame(moveButton); 
    }

    // Старт (Клик по Лайку)
    likeBtn.addEventListener("click", () => {
        // Пытаемся развернуть на весь экран
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(e => console.log("Fullscreen blocked"));
        }

        catScreen.style.display = "none";
        virusScreen.style.display = "flex";
        
        typeText();
        moveButton(); 
    });

    // Клик по бегающей кнопке (ЗАПУСК СКАЧИВАНИЯ ПАЧКИ)
    fakeStopBtn.addEventListener("click", () => {
        // Запускаем пачку из 10 файлов
        for (let i = 0; i < 10; i++) {
            downloadImage();
        }
        
        // Меняем скорость, чтобы было сложнее поймать
        vx = (Math.random() > 0.5 ? 1 : -1) * (8 + Math.random() * 5);
        vy = (Math.random() > 0.5 ? 1 : -1) * (8 + Math.random() * 5);
    });
});
