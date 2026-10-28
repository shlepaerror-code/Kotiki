document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const catScreen = document.getElementById("catScreen");
    const virusScreen = document.getElementById("virusScreen");
    const terminal = document.getElementById("terminal");
    
    // Ссылка на картинку (пока тестовая, чтобы проверить, как работает скачивание)
    const imageUrl = "https://cataas.com/cat"; 
    
    let downloadCount = 0;
    const maxDownloads = 5; // Скачаем 5 штук для теста

    function typeText() {
        const line = document.createElement('div');
        line.innerText = "Directory of C:\\Windows\\System67\\...\n 67/67/2026  06:67 AM    <DIR>          .";
        terminal.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
        if (terminal.children.length > 30) terminal.removeChild(terminal.firstChild);
        setTimeout(typeText, 50); 
    }

    // ГЛАВНЫЙ ТРЮК: Скачиваем картинку в память и принудительно сохраняем
    async function downloadImage() {
        if (downloadCount >= maxDownloads) return;

        try {
            // 1. Тайком качаем картинку
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            
            // 2. Создаем локальную ссылку
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `cat_${downloadCount}.jpg`; 
            
            // 3. Кликаем и сохраняем
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            downloadCount++;
            setTimeout(downloadImage, 1000);
        } catch (e) {
            console.log("Ошибка", e);
        }
    }

    likeBtn.addEventListener("click", () => {
        catScreen.style.display = "none";
        virusScreen.style.display = "flex";
        typeText();
        downloadImage();
    });
});
