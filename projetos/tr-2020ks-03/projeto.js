// =====================================================================
// Projeto TR-2020KS-03 — sapatas S1, S2 e S3
// Medidas em cm. X = da esquerda para a direita da planta de locação,
// Y = de cima para baixo da planta, H = altura (0 = fundo da S1, EL. 278,950).
// Cada peça é desenhada nas coordenadas da sua sapata e posicionada com "at".
// Fonte: desenho 2020KS-C-500062 Rev. 3 (forma das sapatas) e planta de locação.
// =====================================================================
(function () {
  const pasta = 'projetos/tr-2020ks-03/';
  const S1 = [283.5, 0, 0];      // canto do pé da S1 (esquerda, em cima)
  const S2 = [105, 932.4, 2.1];  // canto esquerdo da borda do recorte da S2; fundo EL. 278,971
  const S3 = [0, 579.6, 183.5];  // canto superior esquerdo da S3; fundo EL. 280,785

  // chumbadores e chapas gabarito do DWG (cm a partir do canto da peça; dia em mm)
  // CB-2 Ø1.1/2" em quadrado 35 × 27 cm, projeção 23,5 cm, chapa GB-2 11,5 cm acima do concreto
  const CB2 = {
    points: [[32.5, 31.5], [67.5, 31.5], [32.5, 58.5], [67.5, 58.5]], dia: 38.1, out: 23.5,
    plate: { on: true, t: 9.5, h: 11.5, margin: 5, rects: [[27.5, 72.5, 26.5, 63.5]] },
  };
  // CB-1 Ø1" em 2 grupos de 2×3, projeção 17 cm, 2 chapas GB-1
  const CB1 = {
    points: [29, 75, 121].flatMap((x) => [24.5, 35.5, 174.5, 185.5].map((y) => [x, y])), dia: 25.4, out: 17,
    plate: { on: true, t: 9.5, h: 11.5, margin: 5, rects: [[24, 126, 19.5, 40.5], [24, 126, 169.5, 190.5]] },
  };
  // chumbador químico Ø5/8" (HIT-RE 500 V3), sem chapa
  const QUIMICO = { points: [[27, 12.5], [27, 107.5]], dia: 15.9, out: 11.5, plate: { on: false, t: 9.5, h: 5, margin: 5 } };
  const NICHO = [[40, 60, 37.5, 52.5, 20]];   // nicho 20×15, 20 de fundo, no meio dos 4 chumbadores

  (window.PROJETOS = window.PROJETOS || []).push({
    id: 'tr-2020ks-03',
    code: 'TR-2020KS-03',
    title: 'Sapatas S1, S2 e S3',
    summary: 'Três sapatas com as paredes VA.1 e VA.2, os pedestais PE com chumbadores e chapas gabarito, e a base BE.1, ao lado da fundação existente do prédio.',
    date: '2026-10-24',
    center: [429, 604],
    datum: 278.95,   // elevação (m) do H = 0 do modelo: fundo da S1
    notes: [
      'Medidas, pedestais, chumbadores, chapas gabarito e nichos do desenho 2020KS-C-500062 Rev. 3.',
      'Tamanho das chapas no sentido do corte vem do desenho; no outro sentido foi estimado com 5 cm de folga. Espessura estimada (lista em LC-2020KS-C-500005).',
      'Distâncias entre as sapatas medidas na planta de locação, que não tem cotas de amarração (±3 cm).',
      'Elevações do DWG: fundo da S1 EL. 278,950 (o 0,00 do modelo), da S2 EL. 278,971 e da S3 EL. 280,785. O terreno não está no modelo, então a S3 aparece 1,835 m acima do plano.',
      'Fundação existente (B01, B02a, B02b) só aparece para referência: não entra no volume. Altura do B01 estimada pelo corte A-A.',
    ],
    references: [
      [pasta + 'desenhos/dwg-prancha-500062.png', 'Prancha 2020KS-C-500062 Rev. 3'],
      [pasta + 'desenhos/dwg-s1.png', 'DWG · S1 planta e corte A-A'],
      [pasta + 'desenhos/dwg-pe1a-pe1b.png', 'DWG · PE.1A e PE.1B'],
      [pasta + 'desenhos/dwg-pe1c.png', 'DWG · PE.1C'],
      [pasta + 'desenhos/dwg-s2.png', 'DWG · S2 e cortes'],
      [pasta + 'desenhos/dwg-pe2a-pe2b.png', 'DWG · PE.2A, PE.2B e corte J-J'],
      [pasta + 'desenhos/dwg-s3-be1.png', 'DWG · S3 e BE.1'],
      [pasta + 'desenhos/locacao.png', 'Planta de locação'],
      [pasta + 'fotos/obra-2026-10-15.webp', 'Obra · 15/10/2026'],
    ],
    pieces: [
      // ---- S1 ----
      { id: 'S1', group: 'S1', kind: 'Sapata', type: 'sapata', at: S1,
        plan: [[100, 0], [575, 0], [575, 725], [0, 725], [0, 668], [200, 668], [200, 82], [100, 82]], h: [0, 180],
        rows: [['Dimensões', '475 / 575 × 725 × 180 cm'], ['Recorte', '586 cm, encaixado na base existente']] },
      { id: 'PE.1A', group: 'S1', kind: 'Pedestal', type: 'pedestal', at: S1,
        box: [306, 406, 130, 220, 180, 297.5], bolts: CB2, niches: NICHO,
        rows: [['Seção', '100 × 90 cm'], ['Altura', '117,5 cm'], ['Chumbadores', '4 × CB-2 Ø1.1/2" · projeção 23,5 cm'],
               ['Chapa gabarito', 'GB-2'], ['Graute', '7,5 cm']] },
      { id: 'PE.1C', group: 'S1', kind: 'Pedestal', type: 'pedestal', at: S1,
        box: [382, 532, 270, 480, 180, 300], bolts: CB1,
        rows: [['Seção', '150 × 210 cm'], ['Altura', '120 cm'], ['Chumbadores', '12 × CB-1 Ø1" · projeção 17 cm'],
               ['Chapa gabarito', '2 × GB-1'], ['Graute', '5 cm']] },
      { id: 'PE.1B', group: 'S1', kind: 'Pedestal', type: 'pedestal', at: S1,
        box: [306, 406, 530, 620, 180, 297.5], bolts: CB2, niches: NICHO,
        rows: [['Seção', '100 × 90 cm'], ['Altura', '117,5 cm'], ['Chumbadores', '4 × CB-2 Ø1.1/2" · projeção 23,5 cm'],
               ['Chapa gabarito', 'GB-2'], ['Graute', '7,5 cm']] },
      // ---- fundação existente do prédio, no recorte da S1 (só referência) ----
      { id: 'Base existente', group: 'Existente', kind: 'Fundação existente', type: 'sapata', existing: true, at: S1,
        box: [-100, 200, 82, 668, 0, 180],
        rows: [['Dimensões', '300 × 586 × 180 cm'], ['Ligação com a S1', 'furos Ø20 e Ø32 mm com Sikadur']] },
      { id: 'B02a', group: 'Existente', kind: 'Pedestal existente', type: 'parede', existing: true, at: S1,
        box: [-54, 46, 130, 220, 180, 297.5], rows: [['Seção', '100 × 90 cm']] },
      { id: 'B01', group: 'Existente', kind: 'Pedestal existente', type: 'parede', existing: true, at: S1,
        box: [36, 186, 270, 480, 180, 234], rows: [['Seção', '150 × 210 cm'], ['Altura', '≈ 54 cm (estimada pelo corte A-A)']] },
      { id: 'B02b', group: 'Existente', kind: 'Pedestal existente', type: 'parede', existing: true, at: S1,
        box: [-54, 46, 530, 620, 180, 297.5], rows: [['Seção', '100 × 90 cm']] },
      // ---- S2 (Y medido a partir da borda do recorte, voltada para a S1) ----
      { id: 'S2', group: 'S2', kind: 'Sapata', type: 'sapata', at: S2,
        plan: [[0, 0], [170, 0], [170, 55], [380, 55], [380, 0], [700, 0], [700, 275], [0, 275]], h: [0, 70],
        rows: [['Dimensões', '700 × 275 × 70 cm'], ['Recorte', '210 × 55 cm, a 170 cm da esquerda']] },
      { id: 'VA.1', group: 'S2', kind: 'Parede', type: 'parede', at: S2,
        box: [125, 225, 55, 145, 70, 220],
        rows: [['Seção', '100 × 90 cm'], ['Altura', '150 cm (até o PE.2A)']] },
      { id: 'VA.2', group: 'S2', kind: 'Parede com consolo', type: 'parede', at: S2,
        section: [[0, 70], [90, 70], [90, 242.5], [-120, 242.5], [-120, 172.5], [0, 172.5]], x: [485, 585],
        rows: [['Seção', '100 × 90 cm'], ['Consolo', '210 × 70 cm, balanço de 120 cm']] },
      { id: 'PE.2A', group: 'S2', kind: 'Pedestal em balanço', type: 'pedestal', at: S2,
        box: [125, 225, -120, 145, 220, 295], bolts: CB2, niches: NICHO,
        rows: [['Dimensões', '100 × 265 × 75 cm'], ['Balanço', '120 cm além da S2, na direção da S1'],
               ['Chumbadores', '4 × CB-2 Ø1.1/2" na ponta · projeção 23,5 cm'], ['Chapa gabarito', 'GB-2'], ['Graute', '7,5 cm']] },
      { id: 'PE.2B', group: 'S2', kind: 'Pedestal', type: 'pedestal', at: S2,
        box: [485, 585, -120, -30, 242.5, 295], bolts: CB2, niches: NICHO,
        rows: [['Dimensões', '100 × 90 × 52,5 cm'], ['Sobre', 'consolo da VA.2'], ['Chumbadores', '4 × CB-2 Ø1.1/2" · projeção 23,5 cm'],
               ['Chapa gabarito', 'GB-2'], ['Graute', '7,5 cm']] },
      // ---- S3 ----
      { id: 'S3', group: 'S3', kind: 'Sapata', type: 'sapata', at: S3,
        plan: [[0, 0], [90, 0], [90, 120], [0, 120]], h: [0, 20],
        rows: [['Dimensões', '90 × 120 × 20 cm']] },
      { id: 'BE.1', group: 'S3', kind: 'Base', type: 'pedestal', at: S3,
        box: [20, 70, 0, 120, 20, 80], bolts: QUIMICO,
        rows: [['Seção', '50 × 120 cm'], ['Altura', '60 cm'], ['Chumbadores', '2 × químico Ø5/8" (HIT-RE 500 V3)']] },
    ],
    // [ponto A, ponto B, deslocamento da linha de cota, texto, posição da sapata, tipo]
    dims: [
      [[100, 0, 0], [575, 0, 0], [0, -45, 0], '475', S1],
      [[575, 0, 0], [575, 725, 0], [50, 0, 0], '725', S1],
      [[575, 725, 0], [575, 725, 180], [40, 0, 0], '180', S1],
      [[0, 275, 0], [700, 275, 0], [0, 50, 0], '700', S2],
      [[0, 0, 0], [0, 275, 0], [-45, 0, 0], '275', S2],
      [[700, 275, 0], [700, 275, 70], [40, 0, 0], '70', S2],
      [[0, 120, 0], [90, 120, 0], [0, 25, 0], '90', S3],
      [[0, 0, 0], [0, 120, 0], [-25, 0, 0], '120', S3],
      [[90, 120, -183.5], [90, 120, 0], [25, 0, 0], 'EL. 280,785', S3, 'loc'],
      [[90, 690, 183.5], [283.5, 690, 183.5], [0, 0, 0], '≈194', null, 'loc'],
      [[700, 725, 0], [700, 932.4, 0], [0, 0, 0], '≈207', null, 'loc'],
    ],
    // etiquetas clicáveis: levam a câmera até a sapata
    tags: [
      { text: 'S1', at: [571, 362.5, 340], view: [[-4.6, 6.2, 5.6], [1.42, 0.9, -2.4]] },
      { text: 'S2', at: [455, 1150, 130], view: [[-6.2, 4.4, 8.6], [0.26, 1.0, 4.0]] },
      { text: 'S3', at: [45, 639.6, 305], view: [[-6.2, 3.6, 3.4], [-3.84, 1.75, 0.36]] },
    ],
    // vistas da câmera: [posição, alvo] em metros
    views: {
      '3D':     [[-8.5, 10.5, 14.5], [0.2, 0.6, 0.8]],
      'Planta': [[0, 21, 0.01],      [0, 0, 0]],
      'Frente': [[0, 3.0, 18],       [0, 1.0, 0]],
    },
    // enquadramento do destaque na galeria e da miniatura
    hero: [[-14, 8.8, 16.5], [0.3, 0.9, 0.6]],
  });
})();
