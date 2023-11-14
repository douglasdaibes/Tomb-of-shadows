import random

class Jogador:
    def __init__(self, nome):
        self.nome = nome
        self.vidas = 3
        self.fase_atual = 1

    def perder_vida(self):
        self.vidas -= 1

    def avancar_fase(self):
        self.fase_atual += 1

class Labirinto:
    def __init__(self, fase):
        self.fase = fase
        self.porta_trancada = True
        self.teletransporte_ativo = False
        self.espinhos = random.randint(1, 3)  # Número de espinhos na fase

    def ativar_porta(self):
        self.porta_trancada = False

    def ativar_teletransporte(self):
        self.teletransporte_ativo = True

    def desativar_teletransporte(self):
        self.teletransporte_ativo = False

def jogar():
    nome_jogador = input("Digite o nome do jogador: ")
    jogador = Jogador(nome_jogador)

    while jogador.vidas > 0 and jogador.fase_atual <= 3:
        print(f"\n--- Fase {jogador.fase_atual} ---")
        labirinto = Labirinto(jogador.fase_atual)

        if labirinto.porta_trancada:
            print("Você vê uma porta trancada. Encontre um botão para destrancá-la.")
            botao = input("Pressione 'B' para pressionar o botão: ")

            if botao.upper() == 'B':
                labirinto.ativar_porta()
                print("A porta está destrancada! Você pode avançar.")

        if labirinto.teletransporte_ativo:
            print("Há um teletransporte ativo. Deseja usá-lo? (S/N)")
            usar_teletransporte = input().upper()

            if usar_teletransporte == 'S':
                labirinto.desativar_teletransporte()
                print("Você usou o teletransporte e chegou a uma parte diferente do labirinto.")

        print(f"Você encontra uma passagem cheia de espinhos. Cuidado!")

        for i in range(labirinto.espinhos):
            print(f"\nEscolha: {i+1}")
            escolha = input("Pressione 'A' para avançar ou 'E' para esperar: ")

            if escolha.upper() == 'A':
                print("Você avançou com sucesso.")
            else:
                print("Você foi atingido por espinhos!")
                jogador.perder_vida()

        jogador.avancar_fase()

    if jogador.vidas > 0:
        print(f"\nParabéns, {jogador.nome}! Você concluiu todas as fases!")
    else:
        print("\nGame Over. Você perdeu todas as vidas.")

if __name__ == "__main__":
    jogar()
Sir