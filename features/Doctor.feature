# language: pt

    Funcionalidade: Doctor
        Como um Doctor
        Eu devo racionar meus mantimentos
        E curar os outros Travelers

    Contexto:
        Dado um Doctor de nome "Joseph"
    
        
    Cenario: Curou um Traveler
        Quando o Doctor curar um Traveler
        Entao o Traveler deve seguir saudável

    Cenario: Curou um Hunter
        Quando o Doctor curar um Hunter
        Entao o Hunter deve seguir saudável

    