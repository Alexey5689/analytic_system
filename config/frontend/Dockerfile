FROM node:lts-alpine

# устанавливаем простой HTTP-сервер для статики
#RUN npm install -g http-server
VOLUME ./vue/node_modules /var/www/node_modules
# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /var/www
# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY ./vue/package*.json ./

# устанавливаем зависимости проекта
RUN npm install

# копируем  файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
# COPY ./vue .

# собираем приложение для production с минификацией
#RUN npm run build

EXPOSE 5173
#CMD [ "http-server", "dist" ]
CMD ["npm", "run", "dev"]
