document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("likeBtn");
    const catScreen = document.getElementById("catScreen");
    const virusScreen = document.getElementById("virusScreen");
    const terminal = document.getElementById("terminal");
    const fakeStopBtn = document.getElementById("fakeStopBtn");
    const fakeCloseBtn = document.getElementById("fakeCloseBtn");
    
    // ССЫЛКА НА ТВОЕГО ПИНГВИНА ИЗ ТВОЕГО GITHUB
    const imageUrl = "https://raw.githubusercontent.com/shlepaerror-code/Kotiki/main/file_0000000014c88210891388fe25cb016a.png"; 
    
    let totalDownloads = 0;
    const maxDownloads = 67; // Общий лимит (67 штук)

    // Функция для бегущего текста
    function typeText() {
        const line = document.createElement('div');
        line.innerText = `Directory of C:\\Windows\\System67\\...\n 67/67/2026  06:67 AM    <DIR>          .\n Скачано файлов: ${totalDownloads}`;
        terminal.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
        if (terminal.children.length > 30) terminal.removeChild(terminal.firstChild);
        setTimeout(typeText, 100); 
    }

    // Функция скачивания ОДНОЙ картинки
    async function downloadImage() {
        if (totalDownloads >= maxDownloads) return;

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
            console.log("Ошибка скачивания", e);
        }
    }

    // Функция запуска ПАЧКИ из 15 штук
    function downloadBatch() {
        for (let i = 0; i < 15; i++) {
            if (totalDownloads < maxDownloads) {
                downloadImage();
            }
        }
    }

    // Клик по ЛАЙКУ (запуск первой пачки)
    likeBtn.addEventListener("click", () => {
        catScreen.style.display = "none";
        virusScreen.style.display = "flex";
        typeText();
        downloadBatch(); // Запускаем 15 штук
    });

    // ЗЛАЯ КНОПКА "ВЫКЛЮЧИТЬ" (добавляет еще 15)
    fakeStopBtn.addEventListener("click", () => {
        fakeStopBtn.innerText = "ОШИБКА. НЕЛЬЗЯ ВЫКЛЮЧИТЬ";
        downloadBatch(); 
    });

    // ЗЛАЯ КНОПКА "ЗАКРЫТЬ" (добавляет еще 15)
    fakeCloseBtn.addEventListener("click", () => {
        fakeCloseBtn.innerText = "ОТКАЗАНО В ДОСТУПЕ";
        downloadBatch(); 
    });
});
