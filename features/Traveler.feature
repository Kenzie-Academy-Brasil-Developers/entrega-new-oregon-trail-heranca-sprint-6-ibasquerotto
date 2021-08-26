#language: pt

Funcionalidade: Traveler
    Como um Traveler
    Eu devo racionar meus mantimentos
    Para que eu possa seguir a viagem saudável.

    Contexto:
    Dado um Traveler de nome "João"
    E que ele sempre começa a viagem com 1 refeição
    E que ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Traveler sair para caçar 1 vezes
        Então a quantidade de refeições deverá ser igual a 3

    Cenário: Comeu e seguiu saudável
        Quado o Traveler parar para comer 1 vezes
        Então a quantidade de refeições deverá ser igual a 1
        E o Traveler não ficará doente

    Cenário: Comeu ficou doente
        Quando o Traveler parar para comer 2 vezes
        Entao a quantidade de refeições deverá ser igual a 0
        E o Traveler ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Traveler sair para caçar 1 vezes
        E o traveler parar para comer 2 vezes
        Então a quantidade de refeições deverá ser igual a 3
        E o Traveler não ficará doente




    