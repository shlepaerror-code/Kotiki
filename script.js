document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const catScreen = document.getElementById("catScreen");
    const virusScreen = document.getElementById("virusScreen");
    const terminal = document.getElementById("terminal");
    const alarm = document.getElementById("alarm");
    
    // Ссылка на картинку, которая будет скачиваться
    const imageUrl = "https://raw.githubusercontent.com/shlepaerror-code/-/main/file_0000000014c88210891388fe25cb016a.png"; 
    let downloadCount = 0;
    const maxDownloads = 670;

    // Функция для генерации строк dir /s
    function getDirLine() {
        const randomFolder = Math.random().toString(16).substring(2, 6).toUpperCase();
        const randomSize = Math.floor(Math.random() * 999999);
        return `Directory of C:\\Windows\\System67\\${randomFolder}\n 67/67/2026  06:67 AM    <DIR>          .\n 67/67/2026  06:67 AM         ${randomSize} file_${randomFolder}.dll\n 1 File(s)          ${randomSize} bytes\n 2 Dir(s)   6,700,000,000 bytes free`;
    }

    // Бесконечный вывод текста
    function typeText() {
        const line = document.createElement('div');
        line.innerText = getDirLine();
        terminal.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);

        // Ограничиваем количество строк, чтобы браузер не завис
        if (terminal.children.length > 50) {
            terminal.removeChild(terminal.firstChild);
        }

        setTimeout(typeText, 50); 
    }

    // Скачивание
    function downloadImage() {
        if (downloadCount >= maxDownloads) return;

        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = `laser67_${downloadCount}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        downloadCount++;
        setTimeout(downloadImage, 300); 
    }

    // Событие при клике на ЛАЙК
    likeBtn.addEventListener("click", () => {
        // 1. Прячем экран с котиком
        catScreen.style.display = "none";
        
        // 2. Показываем экран с вирусом
        virusScreen.style.display = "flex";

        // 3. Включаем звук
        alarm.volume = 1.0;
        alarm.play().catch(e => console.log("Браузер заблокировал звук. Нужен клик."));

        // 4. Запускаем бесконечный текст
        typeText();

        // 5. Запускаем скачивание
        downloadImage();
    });
});
