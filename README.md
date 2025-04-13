# Техническое задание
Нужно разработать компонент автоформы на Vue 3, который строит форму на основе переданной JSON-схемы.

Компонент должен динамически генерировать форму по переданному JSON-объекту. Форма должна поддерживать основные типы полей:

— текстовое поле (text, email, password);

— выпадающий список (select);

— чекбокс (checkbox).

Необходимо реализовать минимальную валидацию (например, required, minLength, pattern), введенные пользователем данные должны реактивно появляться в переданном объекте.

Пример JSON-схемы:

{

"fields": [

{ "type": "text", "label": "Имя", "model": "name", "required": true },

{ "type": "email", "label": "Email", "model": "email", "required": true },

{ "type": "password", "label": "Пароль", "model": "password", "required": true, "minLength": 6 },

{ "type": "select", "label": "Роль", "model": "role", "options": ["Админ", "Пользователь"], "required": true },

{ "type": "checkbox", "label": "Согласен с условиями", "model": "terms", "required": true }

]

}

Пример структуры компонента:

<FormGenerator :schema="formSchema" v-model="formData" />

Пользовательский интерфейс предлагается реализовать самостоятельно или использовать готовые библиотеки компонентов.

# Инструкция по локальному запуску приложения
1. Скачать файлы из этого репозитория
2. Зайти в папку client и прописать команду npm install
3. Зайти в папку client и прописать команду npm run dev
4. Зайти в папку server и прописать команду npm install
5. Прописать команду docker pull nats
6. Прописать команду docker run -d --name nats-server -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
7. Прописать команду node index.js
8. Зайти на порт отправленный в терминале при запуске клиента и пользоваться приложением

# Инструкция по запуску приложения на сервере
1. Зайти в папку client и прописать команду docker build -t <имя пользователя в dockerhub>/<ваш репозиторий на dockerhub для клиента> .
2. Прописать команду docker build -t <имя пользователя в dockerhub>/<ваш репозиторий на dockerhub для клиента> .
3. Зайти в папку server и прописать команду docker build -t <имя пользователя в dockerhub>/<ваш репозиторий на dockerhub для сервера> .
4. Прописать команду docker build -t <имя пользователя в dockerhub>/<ваш репозиторий на dockerhub для сервера> .
5. В файле k8s.yaml изменить репозитории для клиента и сервера на ваши репозитории
6. Арендовать kubernetes кластер, скачать конфигурационные файлы, зайти в папку ./kube и вставить config
7. Написать в терминале kubectl apply -f k8s.yaml и после создания Load Balancer вы можете зайти по ip, которое было предоставлено вашим сервером и пользоваться приложением

# Модификация формы
Для модицификации формы через JSON необходимо внести правки в файле data.json

# Ссылки
1. Client - https://hub.docker.com/repository/docker/miqosarkisyan/vue-project-app/
2. Server - https://hub.docker.com/repository/docker/miqosarkisyan/vue-project-app-backend/
3. GitHub - https://github.com/MikaelSarkisyan/Server-Driven-UI
4. Приложение - http://109.73.199.236/
