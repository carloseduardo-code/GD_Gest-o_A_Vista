// =====================================================================
// Projeto TR-2012KS-15 — Radier RD1 da troca de correia do TR-2011KS-15, na casa de transferência CT-2011KS-11
// Locação 2011KS-C-501216 Rev. 0, forma 2011KS-C-501217 Rev. 1, cavaletes 2011KS-M-500065 Rev. 1 e 500066 Rev. 0.
// Medidas em cm. X = a partir do eixo 4 (para o eixo 5), Y = a partir da fila C (para a fila D), H = 0 no fundo do radier (EL. 293,090).
// Gerado a partir das coordenadas do DWG por gen-tr15.js.
// =====================================================================
(function () {
  const pasta = 'projetos/tr-2012ks-15/';
  // chumbador 217A: barra roscada Ø3/4" UNC × 49,5 cm, 35 embutidos e 14,5 acima do graute (19,5 acima do concreto)
  const CHUMB = { dia: 19.1, out: 14.5, plate: { on: false, t: 9.5, h: 5, margin: 5 } };

  (window.PROJETOS = window.PROJETOS || []).push({
    id: 'tr-2012ks-15',
    code: 'TR-2012KS-15',
    title: 'Radier RD1 · troca de correia',
    summary: 'Radier RD1 da troca de correia do TR-2011KS-15, dentro da casa de transferência CT-2011KS-11: 470 × 650 × 100 cm com 8 nichos e 48 chumbadores, e a faixa de piso de 1 m em volta dele.',
    date: '2026-11-18',
    center: [595,295],
    datum: 293.09,
    notes: [
      'Radier, nichos e chumbadores da forma 2011KS-C-501217 Rev. 1; posição e níveis da locação 2011KS-C-501216 (595 cm do eixo 4 e 295 cm da fila C ao centro).',
      'Concreto da nota: 30,55 m³ (470 × 650 × 100); o modelo dá 30,55 m³. Concreto magro 1,58 m³ e demolição do piso 6,12 m³ não estão no modelo.',
      'Chumbadores 217A: 48 barras roscadas Ø3/4" (8 em cada base externa, 4 em cada interna), 35 cm embutidos e 14,5 cm acima do graute (T.C.A. EL. 294,140).',
      'Bases de graute de 5 cm sobre os nichos: 55 × 80 cm nas de 8 chumbadores e 55 × 65 cm nas de 4. Elas não entram no volume de concreto.',
      'Os chumbadores são os dos dois cavaletes de aço da troca de correia (2011KS-M-500065 e 500066); os cavaletes não estão no modelo.',
      'Faixa de piso em volta do radier: 1 m de largura em cada lado, a partir da borda do radier, e 20 cm de altura, com o topo no nível do topo do radier (EL. 293,890 a 294,090). Contorno de 670 × 850 cm: 26,40 m² e 5,28 m³. As cotas aparecem em Rótulos → Cotas.',
      'Piso e pilares existentes da CT-2011KS-11 não estão no modelo (o piso existente fica em EL. 293,899 a 293,787 no desenho).',
    ],
    references: [
      [pasta + 'desenhos/locacao-501216.png', 'Locação do radier · 2011KS-C-501216'],
      [pasta + 'desenhos/forma-501217.png', 'Forma e detalhes do radier RD1 · 2011KS-C-501217'],

    ],
    pieces: [
      { id: "RD1", group: "RD1", kind: "Radier", type: 'sapata', name: "RADIER RD.1",
        box: [360,830,-30,620,0,100],
        pads: [[42.5,97.5,39,119,5],[362.5,417.5,39,119,5],[42.5,97.5,215.5,280.5,5],[362.5,417.5,215.5,280.5,5],[66.5,121.5,369.5,434.5,5],[386.5,441.5,369.5,434.5,5],[66.5,121.5,531,611,5],[386.5,441.5,531,611,5]],
        anchors: [
          { id: 'Base 1', box: [402.5,457.5,9,89,100,105], bolts: { ...CHUMB, points: [[20.5,19],[34.5,19],[20.5,33],[34.5,33],[20.5,47],[34.5,47],[20.5,61],[34.5,61]] } },
          { id: 'Base 2', box: [722.5,777.5,9,89,100,105], bolts: { ...CHUMB, points: [[20.5,19],[34.5,19],[20.5,33],[34.5,33],[20.5,47],[34.5,47],[20.5,61],[34.5,61]] } },
          { id: 'Base 3', box: [402.5,457.5,185.5,250.5,100,105], bolts: { ...CHUMB, points: [[20.5,17.5],[34.5,17.5],[20.5,47.5],[34.5,47.5]] } },
          { id: 'Base 4', box: [722.5,777.5,185.5,250.5,100,105], bolts: { ...CHUMB, points: [[20.5,17.5],[34.5,17.5],[20.5,47.5],[34.5,47.5]] } },
          { id: 'Base 5', box: [426.5,481.5,339.5,404.5,100,105], bolts: { ...CHUMB, points: [[20.5,17.5],[34.5,17.5],[20.5,47.5],[34.5,47.5]] } },
          { id: 'Base 6', box: [746.5,801.5,339.5,404.5,100,105], bolts: { ...CHUMB, points: [[20.5,17.5],[34.5,17.5],[20.5,47.5],[34.5,47.5]] } },
          { id: 'Base 7', box: [426.5,481.5,501,581,100,105], bolts: { ...CHUMB, points: [[20.5,19],[34.5,19],[20.5,33],[34.5,33],[20.5,47],[34.5,47],[20.5,61],[34.5,61]] } },
          { id: 'Base 8', box: [746.5,801.5,501,581,100,105], bolts: { ...CHUMB, points: [[20.5,19],[34.5,19],[20.5,33],[34.5,33],[20.5,47],[34.5,47],[20.5,61],[34.5,61]] } },
        ],
        rows: [["Dimensões","470 × 650 × 100 cm"],["Bases de graute","4 × 55 × 80 e 4 × 55 × 65 cm, 5 cm de altura (T.C.A. EL. 294,140)"],["Nichos","8 × 25 × 25 × 20 cm, embaixo das bases"],["Chumbadores","48 × barra roscada Ø3/4\" UNC × 49,5 cm (217A), 14,5 cm acima do graute"],["Concreto magro","5 cm"]] },
      // faixa de piso de 1 m em volta do radier (cada lado, a partir da borda), 20 cm de altura, com o topo no nível do topo do radier
      { id: "Faixa do piso", group: "Faixa do piso", kind: "Piso · faixa de 1 m em volta do radier", type: 'parede', name: "PISO · FAIXA DE 1 m",
        plan: [[260,-130],[930,-130],[930,720],[260,720]], holes: [[[360,-30],[830,-30],[830,620],[360,620]]], h: [80,100],
        rows: [["Largura","1 m em cada lado, a partir da borda do radier"],["Altura","20 cm"],["Nível","topo junto com o topo do radier"],["Contorno","670 × 850 cm"],["Área","26,40 m²"]] },
    ],
    // cotas da faixa: 100 cm em cada lado do radier e 20 cm de altura
    dims: [
      [[260, 130, 100], [360, 130, 100], [0, 0, 8], '100'],
      [[830, 130, 100], [930, 130, 100], [0, 0, 8], '100'],
      [[760, -130, 100], [760, -30, 100], [0, 0, 8], '100'],
      [[760, 620, 100], [760, 720, 100], [0, 0, 8], '100'],
      [[930, 720, 80], [930, 720, 100], [25, 25, 0], '20'],
    ],
    tags: [
      { text: 'RD1', at: [595,-50,140], view: [[-4.2, 5.6, 7.2], [0, 0.9, 0]] },
      { text: 'Faixa do piso', at: [230,-170,115] },

    ],
    // vistas da câmera: [posição, alvo] em metros
    views: {
      '3D':     [[-7, 5.2, 8.2], [0.3, 0.5, 0]],
      'Planta': [[0, 15, 0.01], [0, 0, 0]],
      'Frente': [[0, 1.6, 12],  [0, 0.7, 0]],
    },
    hero: [[-8, 5.8, 9.2], [0.8, 0.5, 0]],
  });
})();
