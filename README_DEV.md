# Laravel 11 vue 3.4 Starter

Pobierz z githuba.

## Vue

Zainstaluj node.js

### Instalacja

```sh
npm install
npm install axios
npm install vue@latest
npm install --save-dev @vitejs/plugin-vue
npm install vue-router@4
npm install pinia
npm install vue-i18n@9
npm install @googlemaps/js-api-loader
```

### Kompilacja

```sh
npm run build
```

## Laravel

Zainstaluj composer

### App composer.json

Gdy wyskakuje ostrzeżenie composera dodaj numer wersji.

```json
{
    "version": "1.0",
}
```

### Aktualizacja

```sh
composer clear-cache
composer update
composer dump-autoload -o
```

### Bazy danych, tabelki

```sh
php artisan make:session-table
php artisan notifications:table

php artisan migrate
php artisan migrate:fresh
php artisan migrate:fresh --env=testing
```

### Dowiązanie public/storage

```sh
php artisan storage:link
```

### Uruchom

```sh
php artisan serve
php artisan serve --host=localhost --port=8000
```

### Inne opcje

```sh
# Tłumaczenia
php artisan lang:publish

# Strony błędów
php artisan vendor:publish --tag=laravel-errors
```
