---
title: "Poupa.online"
description: "A ideia por trás do \"Poupa.online\" é criar um site semelhante a uma vaquinha online, porém restrito a um grupo específico de amigos ou familiares. O objetivo é permitir a definição de uma meta na qual cada membro do grupo contribuirá com uma quantidade predeterminada de pagamentos, colaborando para o alcance dessa meta coletiva."
pubDate: "Feb 13 2024"
heroImage: "/poupaonline.png"
tags: ["Java","SpringBoot", "Angular", "Docker", "PostgreSQL"]
---
A ideia por trás do "Poupa.online" é criar um site semelhante a uma vaquinha online, porém restrito a um grupo específico de amigos ou familiares. O objetivo é permitir a definição de uma meta na qual cada membro do grupo contribuirá com uma quantidade predeterminada de pagamentos, colaborando para o alcance dessa meta coletiva.

A plataforma facilita a gestão dos pagamentos e gera o QR code para pagamento via Pix. Para implementar essa funcionalidade, utilizei a API de pagamentos do MercadoPago. No momento, o site está vinculado apenas à minha conta do MercadoPago. Seria desejável criar um sistema de autenticação para que cada usuário recebesse os pagamentos em sua própria conta. No entanto, por se tratar de um projeto de estudo, optei por não desenvolver essa parte agora.

O back-end da aplicação foi desenvolvido utilizando Java com Spring Boot, enquanto o front-end foi construído com Angular.js. O banco de dados escolhido foi o PostgreSQL. Para o deployment, utilizei a AWS e criei contêineres Docker para rodar a aplicação. Ela foi dividida em quatro contêineres: Database, API (back-end), APP (front-end) e Proxy. No contêiner do Proxy, configurei o Nginx como proxy reverso para gerenciar as requisições e definir um subdomínio para o contêiner do back-end.

Desenvolver o "Poupa.online" foi uma experiência valiosa para mim, proporcionando aprendizado em todas as tecnologias utilizadas no desenvolvimento. Exceto pelo Docker e pelo PostgreSQL, nunca havia trabalhado de forma prática com essas tecnologias antes.

Você pode acessar o projeto através do seguinte link: http://poupa.online. Para visualizar os pagamentos, utilize o CPF: 123.456.789-09.

O código fonte está disponível nos seguintes repositórios:

Back-end: https://github.com/leandrosantino/poupa.online.api
Front-end: https://github.com/leandrosantino/poupa.online.app