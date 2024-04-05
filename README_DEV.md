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

### Tłumaczenia

```sh
php artisan lang:publish
```

### Uruchom

```sh
php artisan serve
php artisan serve --host=localhost --port=8000
```
