// * #1
// *
// * Функціональні Вимоги:
//     * 1. Вхідні параметри:
//     *  - `segment`: Рядок, який представляє сегмент шляху URL до ресурсу на API. Наприклад: `/posts` для отримання списку постів, `/posts/1` для отримання посту з ідентифікатором 1.
// *
// * 2. Запити до API:
//     *  - Виконати асинхронний HTTP GET запит до `https://jsonplaceholder.typicode.com`, додавши сегмент шляху `segment` до базового URL.
// *  - Використати `fetch` для надсилання запиту.
// *
// * 3. Обробка відповідей:
//     *  - У разі успішної відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
// *  - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299), повернути HTTP статус як індикатор помилки.
// *  - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка), логувати помилку у консоль і повертати текст помилки.
// *
// * 4. Логування:
//     *  - Вивести у консоль отримані дані при успішному запиті.
// *  - Логувати помилку у консоль при її виникненні.
// *
// * Технічні вимоги:
//     * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
// * - Належне управління помилками та виключеннями.
// * - Код має бути чистим, добре структурованим, зі зрозумілими назвами змінних та функцій.
// *
// */

async function getData(segment) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com` + segment)
        if (response.status === 200) {
            const data = await response.json()

            console.log(data)
            return data;
        } else {
            throw new Error(response.status)
        }
    } catch (error) {

        console.log(error)
    }
}

export { getData };