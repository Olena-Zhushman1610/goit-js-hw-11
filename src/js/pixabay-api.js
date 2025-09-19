// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';
// Ключ API
const API_KEY = '52348625-41a9db4c50e5799aece4dcd77';
// Базовий URL для запитів до Pixabay API
const BASE_URL = 'https://pixabay.com/api/';
export async function getImagesByQuery(query) {
  // Параметри запиту
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  // Формуємо повний URL з параметрами
  const url = `${BASE_URL}?${searchParams}`;

  try {
    // Виконуємо HTTP-запит
    const response = await axios.get(url);

    // Повертаємо властивість data з отриманої відповіді
    return response.data;
  } catch (error) {
    // Обробляємо помилки запиту
    throw new Error(`Не вдалося отримати зображення: ${error.message}`);
  }
}
