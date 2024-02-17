---
title: "Implementando SSL em uma API Spring Boot com Docker e Nginx"
description: "Descubra como implementar SSL em uma API Spring Boot utilizando Docker e Nginx! Neste artigo, compartilho minha jornada ao enfrentar desafios ao adicionar certificados SSL a uma aplicação Dockerizada. Aprenda como criar um Dockerfile personalizado, instalar o Certbot e automatizar a atualização dos certificados SSL."
pubDate: "Feb 16 2024"
heroImage: "/post2.png"
badge: "New"
tags: ["Nginx","Docker", "SSL", "HTTPs", "SpringBoot"]
---
Recentemente, enquanto trabalhava em uma Web API construída com Spring Boot, deparei-me com um desafio intrigante durante o processo de deploy do projeto. Eu estava utilizando o Nginx como proxy reverso e queria adicionar certificados SSL para habilitar o HTTPS em minha API. O projeto estava dockerizado e o proxy reverso direcionava para os containers configurados no Docker Compose. Embora já tivesse experiência com o Certbot em ambientes convencionais, enfrentei dificuldades ao tentar integrá-lo ao ambiente Docker, usando a imagem do Nginx.

Ao buscar soluções na internet, deparei-me com várias abordagens possíveis, inclusive uma imagem Docker que prometia configurar automaticamente o Certbot. No entanto, esta solução não se mostrou tão eficaz para minha situação específica.

Decidi então buscar uma alternativa mais personalizada e, após algumas tentativas e erros, cheguei a uma solução que gostaria de compartilhar.

## Solução Encontrada

Criei um Dockerfile personalizado a partir da imagem oficial do Nginx e utilizei a cláusula `RUN` para instalar o Certbot:

```Dockerfile
# Dockerfile 
FROM nginx:1.17.6-alpine 
COPY ./nginx.conf /etc/nginx/nginx.conf 
RUN apk add --no-cache certbot certbot-nginx
```

Com o Certbot instalado, adicionei um script ao entrypoint do Dockerfile para atualizar os certificados automaticamente:

```Dockerfile
#Dockerfile 
CMD sh -c 'certbot --nginx --domains poupa.online,api.poupa.online --email leandrosantino2013@gmail.com --agree-tos --redirect --reinstall --non-interactive; \ nginx -s reload; \ while true; do \ echo "Atualizando certificados"; \ certbot renew --non-interactive; \ nginx -s reload; \ sleep 604810 & SLEEP_PID=$!; \ wait "$SLEEP_PID"; \ done'
```

Essa abordagem permitiu que eu adicionasse com sucesso os certificados SSL ao meu servidor e utilizasse o HTTPS em minha API de forma tranquila.

Espero que essa solução possa ajudar outros desenvolvedores que enfrentam desafios semelhantes ao implementar SSL em ambientes Dockerizados.

Se você tiver alguma dúvida ou sugestão sobre essa abordagem, sinta-se à vontade para compartilhar nos comentários!

Até a próxima!