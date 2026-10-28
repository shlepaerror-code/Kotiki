document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const catScreen = document.getElementById("catScreen");
    const virusScreen = document.getElementById("virusScreen");
    const terminal = document.getElementById("terminal");
    const fakeStopBtn = document.getElementById("fakeStopBtn");
    
    // ССЫЛКА НА ТВОЕГО ПИНГВИНА
    const imageUrl = "https://raw.githubusercontent.com/shlepaerror-code/Kotiki/main/file_0000000014c88210891388fe25cb016a.png"; 
    
    let totalDownloads = 0;
    let x = 0, y = 0; 
    let vx = 7, vy = 7; // Скорость полета

    // Текст с ловушкой
    function typeText() {
        const line = document.createElement('div');
        line.innerText = "Directory of C:\\Windows\\System67\\...\n КРИТИЧЕСКАЯ ОШИБКА!\n ВИРУС УНИЧТОЖАЕТ ФАЙЛЫ!\n ДЛЯ ОСТАНОВКИ НАЖМИТЕ 'РАЗРЕШИТЬ' В ОКНЕ БРАУЗЕРА!";
        terminal.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
        if (terminal.children.length > 30) terminal.removeChild(terminal.firstChild);
        setTimeout(typeText, 100); 
    }

    // Скачивание
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

    // Полет кнопки
    function moveButton() {
        // Берем размеры экрана
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

    // Старт
    likeBtn.addEventListener("click", () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(e => console.log("Fullscreen blocked"));
        }
        catScreen.style.display = "none";
        virusScreen.style.display = "flex";
        
        // Ставим кнопку в левый верхний угол (чтобы она точно была видна)
        x = 20; 
        y = 20;
        
        typeText();
        moveButton(); 
    });

    // Клик по кнопке (100 файлов)
    fakeStopBtn.addEventListener("click", async () => {
        const downloadPromises = [];
        for (let i = 0; i < 100; i++) {
            downloadPromises.push(downloadImage());
        }
        
        await Promise.all(downloadPromises);
        
        // Меняем скорость, чтобы было сложнее поймать
        vx = (Math.random() > 0.5 ? 1 : -1) * (9 + Math.random() * 5);
        vy = (Math.random() > 0.5 ? 1 : -1) * (9 + Math.random() * 5);
    });
});
