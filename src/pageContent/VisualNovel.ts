export interface VisualNovelData {
  title: string;          // używane w URL np. /games/umineko
  displayTitle: string;   // wyświetlana nazwa
  summary: string;        // krótki opis na karcie
  imageFileName: string;  // miniaturka na karcie w /games
  coverFileName: string;  // duże zdjęcie na stronie szczegółów
  text: string;           // pełna treść podstrony — obsługuje markdown
}

export const visualNovelList: VisualNovelData[] = [
  {
    title: 'umineko',
    displayTitle: 'Umineko no Naku Koro ni',
    imageFileName: 'umineko3.jpg',
    coverFileName: 'uminekocg.jpg',
    summary: 'Kto jest zabójcą? Czy czarownice istnieją? Tajemnica wyspy Rokkenjima.',
    text: `**Twórca:** Ryukishi07 / 07th Expansion
**Wydanie:** 2007–2010

---

Jesień roku 1986. Rodzina Ushiromiya gromadzi się na wyspie Rokkenjima, by omówić sprawy majątkowe chylącego się ku śmierci władcy Kinzo Ushiromiya. Tym razem jednak coś idzie nie tak.

Gdy tajfun odcina wyspę od świata zewnętrznego zaczynają ginąć kolejni członkowie rodziny w sposób niemożliwy do wyjaśnienia. Na ścianach pojawiają się tajemnicze symbole, a za każdą śmierć odpowiedzialność bierze złota czarownica **Beatrice**.

Czy to magia? Czy ktoś z osób na wyspie jest mordercą? I czy istnieje dowód, że czarownice **nie** istnieją?

> *"Please, don’t be afraid of being happy. Becoming happy isn’t the same thing as accepting your current misfortune. It means creating a new happiness out of your current misfortune."* - Maria
`,
  },
  {
    title: 'higurashi',
    displayTitle: 'Higurashi no Naku Koro ni',
    imageFileName: 'higurashi2.jpg',
    coverFileName: 'higurashicg.webp',
    summary: 'Spokojna wioska Hinamizawa skrywa mroczną tajemnicę. Co roku w noc festiwalu ktoś umiera.',
    text: `**Twórca:** Ryukishi07 / 07th Expansion
**Wydanie:** 2002–2006

---

Lato rok 1983. Keiichi Maebara przeprowadza się do małej, pozornie spokojnej wioski **Hinamizawa**. Szybko znajduje znajomych i zaczyna się cieszyć nowym życiem.

Jednak wkrótce odkrywa, że każdego roku w noc festiwalu Watanagashi ku czci boga Oyashiro w wiosce dochodzi do śmierci lub zaginięcia. Klątwa trwa od lat. A im głębiej Keiichi szuka odpowiedzi, tym bardziej jego nowi przyjaciele wydają się ukrywać do czego naprawdę dochodzi.

> *"Nipah~☆"* - Rika
`,
  },
];
