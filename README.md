# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Описание классов

**EventEmitter** 

Центральная система событий. Позволяет компонентам подписываться на события и реагировать на них. Основные функции включают добавление и удаление слушателей, а также генерацию событий.

**View**

Базовый класс View предоставляет общую функциональность для всех компонентов, работающих с DOM. Он включает методы для управления текстом, изображениями, атрибутами элементов и их состояниями (например, блокировка кнопок). Служит основой для всех визуальных компонентов.

**Basket**

Реализует функциональность корзины товаров. Он отображает список добавленных товаров, общую стоимость заказа и кнопку оформления. При изменении списка товаров он автоматически обновляет интерфейс: если корзина пуста, отображается соответствующее сообщение, а кнопка оформления блокируется.

**Card**

Отвечает за отображение карточки товара. Поддерживает все основные свойства товара: название, цену, категорию, изображение и описание. В зависимости от контекста, карточка может менять текст кнопки. Клики по карточке или кнопке обрабатываются через переданные callback-функции.

**Modal**

Реализует модальное окно. Окно можно закрыть кликом на кнопку закрытия или вне области контента. При открытии и закрытии модального окна генерируются соответствующие события (modal:open и modal:close).

**ProductItem**

Класс-модель, хранящий данные о товаре: id, название, описание, изображение, цену и категорию. Принимает данные товара и экземпляр EventEmitter для возможной генерации событий.

**AppData**

Центральное хранилище состояния приложения. Управляет каталогом товаров, корзиной, данными заказа и ошибками валидации. Содержит методы для работы с корзиной (добавление/удаление), подсчёта суммы, валидации заказа и очистки данных.

**Form**

Класс для работы с формами (наследник View). Обрабатывает ввод данных, отправку формы, управляет кнопкой отправки и отображением ошибок. При изменениях генерирует события input:change, при отправке - событие с именем формы. Использует generic для типизации полей.

**Contacts**

Для работы с контактными данными. Добавляет сеттеры для полей email и phone, сохраняя всю основную логику работы с формами из родительского класса. Демонстрирует принцип композиции через наследование.

**Order**

Для работы с формой заказа. Управляет выбором способа оплаты через переключаемые кнопки (добавляет/удаляет класс активности). Содержит метод resetPayment для сброса выбора оплаты и сеттер для поля адреса. При рендере автоматически сбрасывает выбор оплаты.

**Page**

Управляет структурой интерфейса. Содержит элементы: каталог товаров, обертку страницы, корзину и счетчик товаров. Обрабатывает клик по корзине (генерирует событие basket:open). Имеет методы для обновления каталога, блокировки страницы (добавляет класс locked) и обновления счетчика товаров.

**Success** 

Для отображения сообщения об успешном заказе. Отображает итоговую сумму списания (форматированную) и кнопку закрытия. Принимает callback для обработки клика по кнопке закрытия. Использует утилиту formatNumber для красивого отображения суммы.

**WebLarekApi**

Класс для работы с API магазина. Наследует базовый Api и реализует методы:
- getProductList - получает список товаров, дополняя URL изображений CDN-префиксом
- getProductInfo - получает данные конкретного товара, аналогично обрабатывая изображение
- orderProducts - отправляет данные заказа на сервер
