// =====================================================================
// Projeto TR-2012KS-13 — Chapéu chinês do TR-2011KS-13: só as sapatas TR13-SD5-1 e TR13-SD5-2
// Locação 2011KS-C-500209 Rev. 5 (planta 2ª parte e corte D-D) e armação 2011KS-C-500661 Rev. 1.
// As sapatas estão giradas −15,1° na planta; o modelo usa eixos alinhados com elas:
// X = atravessando as linhas de pedestais (SD5-1 → SD5-2), Y = ao longo delas (fila C em cima, fila A embaixo).
// H = 0 no fundo da SD5-2 (EL. 358,995). Gerado a partir das coordenadas do DWG por gen-tr13.js.
// =====================================================================
(function () {
  const pasta = 'projetos/tr-2012ks-13/';

  (window.PROJETOS = window.PROJETOS || []).push({
    id: 'tr-2012ks-13',
    code: 'TR-2012KS-13',
    title: 'Chapéu chinês · sapatas SD5-1 e SD5-2',
    summary: 'Sapatas TR13-SD5-1 (500 × 850 × 50) e TR13-SD5-2 (360 × 1060 × 50) do transportador TR-2011KS-13, cada uma com três pedestais de 105 × 105 nos eixos D5-1 e D5-2.',
    date: '2026-10-24',
    center: [590,530],
    datum: 358.995,
    notes: [
      'Só estas duas sapatas da obra entram no modelo. Medidas e posições da locação 2011KS-C-500209 Rev. 5; tamanhos confirmados na armação 2011KS-C-500661 Rev. 1.',
      'Os eixos D5-1 e D5-2 estão a 8,20 m um do outro; os pedestais de cada sapata estão a 3,50 m. Na SD5-1 a linha de pedestais fica a 180 cm de um lado e 320 cm do outro; na SD5-2 fica no meio.',
      'T.C.B. dos seis pedestais em EL. 361,345. SD5-1: pedestais de 80,4 cm e fundo em EL. 360,041. SD5-2: pedestais de 185 cm e fundo em EL. 358,995 (corte D-D).',
      'Nota 16 do desenho: o assentamento da SD5-1 não pode ficar abaixo do da fundação existente do TR-2011KS-09 (eixo 10), por causa da proximidade.',
      'Pedestais com nicho 40 × 40 × 30 e graute de 5 cm. Os chumbadores ficam no detalhe de forma 2011KS-C-500659, que não está na pasta, então não estão no modelo.',
      'Concreto magro (5 cm) e fundações existentes vizinhas não estão no modelo.',
    ],
    references: [
      [pasta + 'desenhos/locacao-sd5-500209.png', 'Locação das SD5-1 e SD5-2 · trecho da 2011KS-C-500209'],
      [pasta + 'desenhos/corte-dd-500209.png', 'Corte D-D · trecho da 2011KS-C-500209'],
      [pasta + 'desenhos/armacao-500661.png', 'Armação das sapatas (inclui SD5-1 e SD5-2) · 2011KS-C-500661'],
    ],
    pieces: [
      { id: "SD5-1", group: "SD5-1", kind: "Sapata", type: 'sapata',
        box: [0,500,105,955,104.6,154.6],
        rows: [["Dimensões","500 × 850 × 50 cm"],["Assentamento","não abaixo da fundação existente do TR-2011KS-09, eixo 10 (nota 16)"]] },
      { id: "PE.D5-1A", group: "SD5-1", kind: "Pedestal", type: 'pedestal',
        box: [127.5,232.5,827.5,932.5,154.6,235], niches: [[32.5,72.5,32.5,72.5,30]],
        rows: [["Seção","105 × 105 cm"],["Altura","80,4 cm"],["Nicho","40 × 40 × 30 cm"],["Graute","5 cm"]] },
      { id: "PE.D5-1B", group: "SD5-1", kind: "Pedestal", type: 'pedestal',
        box: [127.5,232.5,477.4,582.4,154.6,235], niches: [[32.5,72.5,32.5,72.5,30]],
        rows: [["Seção","105 × 105 cm"],["Altura","80,4 cm"],["Nicho","40 × 40 × 30 cm"],["Graute","5 cm"]] },
      { id: "PE.D5-1C", group: "SD5-1", kind: "Pedestal", type: 'pedestal',
        box: [127.4,232.4,127.5,232.5,154.6,235], niches: [[32.5,72.5,32.5,72.5,30]],
        rows: [["Seção","105 × 105 cm"],["Altura","80,4 cm"],["Nicho","40 × 40 × 30 cm"],["Graute","5 cm"]] },
      { id: "SD5-2", group: "SD5-2", kind: "Sapata", type: 'sapata',
        box: [820,1180,0,1060,0,50],
        rows: [["Dimensões","360 × 1060 × 50 cm"],["Assentamento","sobre concreto magro de 5 cm"]] },
      { id: "PE.D5-2A", group: "SD5-2", kind: "Pedestal", type: 'pedestal',
        box: [947.5,1052.5,827.4,932.4,50,235], niches: [[32.5,72.5,32.5,72.5,30]],
        rows: [["Seção","105 × 105 cm"],["Altura","185 cm"],["Nicho","40 × 40 × 30 cm"],["Graute","5 cm"]] },
      { id: "PE.D5-2B", group: "SD5-2", kind: "Pedestal", type: 'pedestal',
        box: [947.5,1052.5,477.5,582.5,50,235], niches: [[32.5,72.5,32.5,72.5,30]],
        rows: [["Seção","105 × 105 cm"],["Altura","185 cm"],["Nicho","40 × 40 × 30 cm"],["Graute","5 cm"]] },
      { id: "PE.D5-2C", group: "SD5-2", kind: "Pedestal", type: 'pedestal',
        box: [947.4,1052.4,127.5,232.5,50,235], niches: [[32.5,72.5,32.5,72.5,30]],
        rows: [["Seção","105 × 105 cm"],["Altura","185 cm"],["Nicho","40 × 40 × 30 cm"],["Graute","5 cm"]] },
    ],
    tags: [
      { text: 'SD5-1', at: [250,75,260], view: [[-8.4, 6, 9], [-3.4, 1.2, 0]] },
      { text: 'SD5-2', at: [1000,-30,260], view: [[-0.9, 6, 9], [4.1, 1.2, 0]] },
    ],
    // vistas da câmera: [posição, alvo] em metros
    views: {
      '3D':     [[-9.5, 8.5, 12], [0, 1, 0]],
      'Planta': [[0, 19, 0.01], [0, 0, 0]],
      'Frente': [[0, 2, 17],    [0, 1.2, 0]],
    },
    hero: [[-10.5, 9, 13], [0.6, 1, 0]],
  });
})();
