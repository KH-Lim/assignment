FROM alpine:edge

RUN apk add --no-cache \
      nodejs \
      yarn \
      nginx

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

# packaging
RUN rm -r /var/www \
  && mkdir -p /var/www/mobile-web-react-ts \
  && cp -r /usr/src/app/build/* /var/www/mobile-web-react-ts \
  && rm -r /usr/src/app

WORKDIR /etc/nginx

ENTRYPOINT ["nginx"]

CMD ["-g", "daemon off;"]
