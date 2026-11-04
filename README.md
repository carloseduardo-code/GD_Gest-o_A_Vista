# Projetos 3D · Gonçalves & Dias

Plataforma para visualizar as fundações das obras da Gonçalves & Dias Engenharia: visão geral com os números de todos os
projetos, galeria com busca, modelo 3D de cada obra (sapatas, pedestais, radiers, chumbadores e chapas gabarito), modo
apresentação para TV e foto em JPG para apresentações.

## Como abrir

- **Online:** pelo GitHub Pages do repositório (`https://carloseduardo-code.github.io/GD_Gest-o_A_Vista/`), com o que está no `main`.
- **No computador:** abra o `index.html` no navegador (Chrome ou Edge). Não precisa instalar nada; o 3D (Three.js) vem da internet.

## O que a plataforma mostra

| Tela | Endereço | O que tem |
|---|---|---|
| Início | `#/` | Projeto em destaque, **visão geral** (concreto total, peças, chumbadores, chapas e o concreto de cada projeto) e a **galeria** com busca e ordem (recentes, concreto, código) |
| Projeto | `#/p/<id>` | Modelo 3D com vistas, rótulos, cotas, pintura, transparência, editor de chumbadores, foto em JPG e o painel com volumes por grupo e as **notas do modelo** (de onde vêm as medidas e o que foi estimado) |
| Apresentação | `#/tv` | Tela cheia, um projeto por vez, girando, com os números grandes; troca sozinho a cada 20 s. Setas trocam, espaço pausa, Esc sai |

A busca acha o projeto pelo código, título, descrição ou pelo nome de uma peça ou grupo (S10, RD1, Fila A…).

Para deixar numa TV ou monitor: abra o endereço terminado em `#/tv` (ou clique em **Apresentação** no topo da página).

## O que tem aqui

- `index.html`: a plataforma inteira (galeria, visão geral, visualizador 3D e apresentação)
- `marca.js` e `Logo/`: logos da empresa
- `projetos/<obra>/projeto.js`: o modelo de cada obra, gerado a partir dos desenhos de forma e de locação

Os desenhos originais (DWG e PDF) não estão neste repositório. Por isso o botão **Desenhos** só aparece no computador que tem
as imagens em `projetos/<obra>/desenhos/`.

## Como incluir um projeto

1. Crie `projetos/<id>/projeto.js` no mesmo formato dos outros (medidas em cm; `pieces`, `notes`, `views`, `hero`…).
2. Adicione a linha `<script src="projetos/<id>/projeto.js"></script>` na lista de projetos do `index.html`.

Ele entra sozinho na galeria, na visão geral e na apresentação.

## O que fica salvo onde

Pintura, transparência, chumbadores ajustados e títulos editados ficam salvos **no navegador de quem editou**. Eles não vão para
o GitHub nem aparecem para outras pessoas. Os totais da visão geral usam os chumbadores desse mesmo navegador.
