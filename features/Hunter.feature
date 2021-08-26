#language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar
    Para que eu possa seguir a viagem saudável
    E ajudar os outros viajantes a seguirem saudáveis

    Contexto:
        Dado um Hunter de nome "John"
        E sabendo que ele sempre começa a viagem com 2 refeições
        E sempre começa a viagem saudável.

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeição deverá ser igual a 0
        E o Hunter não ficará doente

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeição deverá ser igual a 7
    
    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeição deverá ser igual a 0
        E o Hunter ficará doente

    Cenário: Caçou, comeu e seguiu saudável
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter parar para comer 2 vezes
        Entao a quantidade de refeição deverá ser igual a 3
        E o Hunter não ficará doente

    Cenário: Deu comida para um Traveler
        Quando o Hunter sair para caçar 1 vezes
        E o Hunter der comida para 1 Traveler
        Entao a quantidade de refeição deverá ser igual a 7
        E o Hunter não ficará doente



    

    