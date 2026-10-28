document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const catScreen = document.getElementById("catScreen");
    const virusScreen = document.getElementById("virusScreen");
    const terminal = document.getElementById("terminal");
    const fakeStopBtn = document.getElementById("fakeStopBtn");
    const fakeCloseBtn = document.getElementById("fakeCloseBtn");
    
    // ССЫЛКА НА ТВОЕГО ПИНГВИНА
    const imageUrl = "https://raw.githubusercontent.com/shlepaerror-code/Kotiki/main/file_0000000014c88210891388fe25cb016a.png"; 
    
    let totalDownloads = 0;
    let autoClicker = null; 

    // Функция для бегущего текста
    function typeText() {
        const line = document.createElement('div');
        line.innerText = `Directory of C:\\Windows\\System67\\...\n 67/67/2026  06:67 AM    <DIR>          .\n Скачано файлов: ${totalDownloads}\n ВНИМАНИЕ: ПРОЦЕСС НЕОБРАТИМ`;
        terminal.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
        if (terminal.children.length > 30) terminal.removeChild(terminal.firstChild);
        setTimeout(typeText, 100); 
    }

    // Функция скачивания ОДНОЙ картинки
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
        } catch (e) {
            console.log("Ошибка", e);
        }
    }

    // Клик по ЛАЙКУ (запуск бесконечного ада)
    likeBtn.addEventListener("click", () => {
        catScreen.style.display = "none";
        virusScreen.style.display = "flex";
        typeText();
        
        // БЕСКОНЕЧНЫЙ ЦИКЛ: Каждую 1 секунду качаем нового Пингвина
        autoClicker = setInterval(() => {
            downloadImage();
            fakeStopBtn.innerText = "ОШИБКА " + Math.floor(Math.random() * 1000);
            fakeCloseBtn.innerText = "ОТКАЗАНО В ДОСТУПЕ";
        }, 1000); 
    });

    // Злая кнопка "ВЫКЛЮЧИТЬ" (качает еще)
    fakeStopBtn.addEventListener("click", () => {
        downloadImage(); 
    });

    // Злая кнопка "ЗАКРЫТЬ" (качает еще)
    fakeCloseBtn.addEventListener("click", () => {
        downloadImage(); 
    });
});
