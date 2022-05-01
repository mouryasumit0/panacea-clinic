FROM debian

RUN apt-get update \
    && apt-get -y install apache2 \
    && mkdir -p /usr/src/app/

#Create app directory
WORKDIR /usr/src/app/

COPY . .

RUN cp -r /usr/src/app/* /var/www/html
RUN ls -al /var/www/html

RUN cat apache.conf > /etc/apache2/sites-available/000-default.conf \
    && a2enmod rewrite \
    && service apache2 restart

CMD ["apachectl", "-D", "FOREGROUND"]
