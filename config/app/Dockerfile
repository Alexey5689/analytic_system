FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
      apt-utils \
      libpq-dev \
      libpng-dev \
      libzip-dev \
      zip unzip \
      git bash && \
      docker-php-ext-install pdo_mysql && \
      docker-php-ext-install bcmath && \
      docker-php-ext-install gd && \
      docker-php-ext-install zip && \
      apt-get clean && \
      rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


COPY ./config/app/php.ini /usr/local/etc/php/conf.d/php.ini


COPY app            /var/www/app
COPY bootstrap      /var/www/bootstrap
COPY config         /var/www/config
COPY database       /var/www/database
COPY public         /var/www/public
COPY resources      /var/www/resources
COPY routes         /var/www/routes
COPY storage        /var/www/storage
COPY tests          /var/www/tests
COPY vue            /var/www/vue
COPY artisan        /var/www/artisan

COPY package.json   /var/www/package.json
COPY docker-compose.yml  /var/www/docker-compose.yml
COPY vite.config.js /var/www/vite.config.js

COPY composer.*  ./

# Install composer
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- \
    --filename=composer \
    --install-dir=/usr/local/bin
# alias
RUN echo "alias a='artisan'" >> /root/.bashrc

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | sh
RUN apt-get install -y nodejs

RUN composer install \
      --no-interaction \
      --no-plugins \
      --no-suggest \
      --no-scripts \
      --no-autoloader \
      --prefer-dist


RUN composer dump-autoload  --no-scripts --optimize && \
    chown -R root:www-data /var/www && \
    chmod 755 -R /var/www && \
    chmod -R 775 /var/www/storage && \
    chmod -R 775 /var/www/bootstrap/cache

WORKDIR /var/www
