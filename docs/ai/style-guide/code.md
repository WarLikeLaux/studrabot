# Code Styleguide

## Именование

| Тип                | Стиль           | Пример                                    |
| ------------------ | --------------- | ----------------------------------------- |
| CSS-классы         | kebab-case      | `hero-section`, `cta-button`              |
| Alpine.js данные   | camelCase       | `isMenuOpen`, `formData`                  |
| ID элементов       | kebab-case      | `contact-form`, `hero-cta`                |
| Константы в JS     | SCREAMING_SNAKE | `PHONE_NUMBER`, `TELEGRAM_LINK`           |
| Функции в JS       | camelCase       | `submitForm`, `scrollToSection`           |
| Файлы              | kebab-case      | `index.html`, `thank-you.html`            |
| Изображения        | kebab-case      | `hero-photo.webp`, `service-icon.svg`     |
| Булевы в Alpine.js | is/has/can      | `isOpen`, `hasError`, `canSubmit`          |

## Структура файлов

- 150 строк - мягкий лимит
- 200 строк - рефакторинг обязателен (выноси в модули)

## Структура HTML-секций

```html
<section id="unique-section-id" class="...">
  <div class="container mx-auto px-4">
    <h2>...</h2>
    ...
  </div>
</section>
```

## Структура JS-модуля

1. Импорты
2. Константы
3. Логика
4. Экспорт

## Tailwind CSS v4

- Mobile-first: базовые стили → `sm:` → `md:` → `lg:` → `xl:`
- Spacing: используй шкалу Tailwind (`p-4`, `mt-8`, `gap-6`)
- Цвета: только из кастомной палитры через `@theme`
- Не выдумывай произвольные значения (`w-[347px]`) без крайней необходимости
- Группируй повторяющиеся паттерны через `@apply`

## Стек

- Vite - сборка и HMR
- Tailwind CSS v4 (через `@tailwindcss/vite`)
- Alpine.js (через pnpm, импорт в `main.js`)
- Vanilla JS (минимально, где Alpine не подходит)
- pnpm - пакетный менеджер
- gh-pages - деплой на GitHub Pages
