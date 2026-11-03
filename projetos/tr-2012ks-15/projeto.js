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
    summary: 'Radier RD1 da troca de correia do TR-2011KS-15, dentro da casa de transferência CT-2011KS-11: 470 × 650 × 100 cm com 8 nichos e 48 chumbadores.',
    date: '2026-10-24',
    center: [595,295],
    datum: 293.09,
    notes: [
      'Radier, nichos e chumbadores da forma 2011KS-C-501217 Rev. 1; posição e níveis da locação 2011KS-C-501216 (595 cm do eixo 4 e 295 cm da fila C ao centro).',
      'Concreto da nota: 30,55 m³ (470 × 650 × 100); o modelo dá 30,55 m³. Concreto magro 1,58 m³ e demolição do piso 6,12 m³ não estão no modelo.',
      'Chumbadores 217A: 48 barras roscadas Ø3/4" (8 em cada base externa, 4 em cada interna), 35 cm embutidos e 14,5 cm acima do graute (T.C.A. EL. 294,140).',
      'Bases de graute de 5 cm sobre os nichos: 55 × 80 cm nas de 8 chumbadores e 55 × 65 cm nas de 4. Elas não entram no volume de concreto.',
      'Os chumbadores são os dos dois cavaletes de aço da troca de correia (2011KS-M-500065 e 500066); os cavaletes não estão no modelo.',
      'Piso e pilares da CT-2011KS-11 só como referência; o piso está plano em EL. 293,84 (no desenho vai de 293,899 a 293,787).',
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
      { id: "Piso existente", group: "Existente", kind: "Piso da CT-2011KS-11", type: 'sapata', existing: true, opacity: 0.16,
        plan: [[-110,-110],[1310,-110],[1310,660],[-110,660]], holes: [[[358,-32],[832,-32],[832,622],[358,622]]], h: [55,75],
        rows: [["Topo","P.A. EL. 293,899 · P.B. EL. 293,787 (no modelo, plano em 293,84)"],["Espessura","≈ 20 cm (demolição de 6,12 m³ no lugar do radier)"]] },
      { id: "Pilar C4", group: "Existente", kind: "Pilar existente", type: 'parede', existing: true,
        box: [-50,50,-50,50,45,475],
        rows: [["Seção","100 × 100 cm"],["Altura","cortado no modelo 4 m acima do piso"]] },
      { id: "Pilar D4", group: "Existente", kind: "Pilar existente", type: 'parede', existing: true,
        box: [-50,50,500,600,45,475],
        rows: [["Seção","100 × 100 cm"],["Altura","cortado no modelo 4 m acima do piso"]] },
      { id: "Pilar C5", group: "Existente", kind: "Pilar existente", type: 'parede', existing: true,
        box: [1150,1250,-50,50,45,475],
        rows: [["Seção","100 × 100 cm"],["Altura","cortado no modelo 4 m acima do piso"]] },
      { id: "Pilar D5", group: "Existente", kind: "Pilar existente", type: 'parede', existing: true,
        box: [1150,1250,500,600,45,475],
        rows: [["Seção","100 × 100 cm"],["Altura","cortado no modelo 4 m acima do piso"]] },
    ],
    tags: [
      { text: 'RD1', at: [595,-50,140], view: [[-4.2, 5.6, 7.2], [0, 0.9, 0]] },

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
