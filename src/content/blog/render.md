---
title: "Renderização condicional (ReactJs)"
description: "Compartilhando uma solução eficiente para renderização condicional de botões de páginas no ReactJS! 💻 Controle o acesso com facilidade, exibindo botões apenas para usuários com permissões adequadas. 🚀"
pubDate: "Feb 14 2024"
heroImage: "/render4.png"
tags: ["react.js", "Lógica de programação"]
---

Fala galera, hoje eu queria mostrar uma solução que criei para a renderização condicional de botões de páginas utilizando ReactJs. O contexto é o seguinte: Na aplicação que estou desenvolvendo os usuários tem permissões limitadas e por isso nem todos os botões de páginas podem aparecer quando ele estiver logado, para isso precisei criar o componente do botão de forma que o mesmo verificasse se o usuário que está logado tem permissão para acessá-lo.

Não foi fornecido texto alternativo para esta imagem
No código acima, podemos ver que o componente “PageButton” recebe a propriedade “permission” a qual é passada para uma função que faz a verificação se o usuário possui esta permissão, caso ele tenha, o componente “CustonToggleButton” é renderizado, caso não, o componente retorna apenas um “react fragment”.

[![tamb](/render2.png)](https://youtu.be/t-G0onpEY_E)

Com isso basta usar o PageButon dentro da Sidebar passando a permissão necessária para ele, e a rota que o mesmo acessa.
Não foi fornecido texto alternativo para esta imagem
Pronto! Agora o usuário logado só poderá ver os botões das páginas que ele tem acesso.

Se alguém tiver interesse em ver o código completo pode acessar o github do projeto e acessar a pasta src/components. O link do repositório está abaixo.

[![tamb](/render3.png)](https://youtu.be/gkSDM9NmYUE)

GitHub: [leandrosantino/prodnote (github.com)](https://www.github.com/leandrosantino/prodnote)