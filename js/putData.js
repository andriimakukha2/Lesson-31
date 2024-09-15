// * #3
// *
// * Функціональні вимоги:
//     *
// * 1. Вхідні параметри:
//     *  - `id`: Ідентифікатор об'єкта, який потрібно оновити.
// *  - `data`: Об'єкт з даними для оновлення.
// *
// * 2. Виконання запиту:
//     *  - Виконати асинхронний HTTP PUT запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
// *  - Встановити заголовок `Content-Type: application/json`.
// * 3. Обробка відповідей:
//     *  - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
// *  - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.
// *
// * 4. Логування:
//     *  - Логувати у консоль результат або повідомлення про помилку.
// *
// * Технічні Вимоги:
//     * - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
// * - Належне управління помилками та відповідями від API.
// *
// */

async function putData(id, data) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Could not find post with id ${id}`);
        }

        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export { putData };