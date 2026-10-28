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
    let textIndex = 0; // Для смены текста

    // Массив с безумными фразами
    const messages = [
        "КРИТИЧЕСКАЯ ОШИБКА!",
        "ВИРУС УНИЧТОЖАЕТ ФАЙЛЫ!",
        "ПОПЫТКА ОБХОДА ЗАЩИТЫ...",
        "ДЛЯ ОСТАНОВКИ НАЖМИТЕ 'РАЗРЕШИТЬ'!",
        "ДОСТУП К ГАЛЕРЕЕ ПОЛУЧЕН!",
        "ЛАЗЕРЫ АКТИВИРОВАНЫ!",
        "СИСТЕМА БОЛЬШЕ НЕ ПРИНАДЛЕЖИТ ВАМ",
        "ПИНГВИН 67 НА СВЯЗИ..."
    ];

    // Функция для бегущего текста (теперь с меняющимися фразами)
    function typeText() {
        const line = document.createElement('div');
        // Берем случайную фразу из массива
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        
        line.innerText = `Directory of C:\\Windows\\System67\\...\n 67/67/2026  06:67 AM    <DIR>          .\n ${randomMsg}\n Скачано файлов: ${totalDownloads}`;
        
        terminal.appendChild(line);
        window.scrollTo(0, document.body.scrollHeight);
        if (terminal.children.length > 30) terminal.removeChild(terminal.firstChild);
        
        // Текст обновляется каждые 200 мс (очень быстро)
        setTimeout(typeText, 200); 
    }

    // Функция скачивания
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

    // Клик по ЛАЙКУ (запуск)
    likeBtn.addEventListener("click", () => {
        catScreen.style.display = "none";
        virusScreen.style.display = "flex";
        typeText();
        
        // Бесконечный цикл: качаем каждые 1.5 секунды
        autoClicker = setInterval(() => {
            downloadImage();
            
            // Кнопки тоже бесятся и меняют текст
            fakeStopBtn.innerText = "ОШИБКА " + Math.floor(Math.random() * 1000);
            fakeCloseBtn.innerText = ["ОТКАЗАНО", "НЕЛЬЗЯ", "БЕСПОЛЕЗНО", "ПОЗДНО"][Math.floor(Math.random() * 4)];
        }, 1500); 
    });

    // Злая кнопка "ВЫКЛЮЧИТЬ"
    fakeStopBtn.addEventListener("click", () => {
        downloadImage(); 
        fakeStopBtn.innerText = "ТЫ ДУМАЛ, ЭТО ПОМОЖЕТ?";
    });

    // Злая кнопка "ЗАКРЫТЬ"
    fakeCloseBtn.addEventListener("click", () => {
        downloadImage(); 
        fakeCloseBtn.innerText = "ПОПЫТКА НЕ ЗАСЧИТАНА";
    });
});
