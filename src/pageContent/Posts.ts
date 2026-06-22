export interface PostData {
  title: string;
  date: Date;
  content: string;
}

export const posts: PostData[] = [
  {
    title: 'Nowe anime Higurashi',
    date: new Date('2026-06-22'),
    content: 'W dobę odwiedzin Ryukishiego na Pyrkonie w Poznaniu została potwierdzona produkcja nowego [anime Higurashi](https://x.com/higu_anime/status/2068667853247823909) od znanego z pierwszych adaptacji tej serii studia Dean!. Dostaliśmy również krótki [preview](https://x.com/higu_anime/status/2068667811258622165).'
  },
  {
    title: 'Przyszłość UminekoPOLu',
    date: new Date('2026-06-22'),
    content: 'Po długim okresie "zamrożenia" z radością ogłaszamy, że UminekoPOL wraca do formy! Jak widzicie strona została poddana gruntownej zmianie, a w najbliższym czasie planujemy dodać nowe treści, takie jak najświeższe newsy ze świata visual novelek oraz uniwersum 07th Expansion, przegląd najróżniejszych VNek, oraz galerię, która ma być interaktywna z naszym golden-landem <ahaha.wav>. Zarówno co do kwestii serwera, od dłuższego czasu zostali powołani Sędziowie, pełniący zadania administracyjne oraz trzymania porządku na chacie. Planujemy również organizowanie najróżniejszych aktywności wśród naszej społeczności.  Po wszelakie aktualności, sugestie, pomysły lub jeśli dostałeś się tutaj znikąd, zapraszamy na naszego [discorda](https://discord.gg/y8RYpCRYdw)!',
  },
  {
    title: 'Witamy na stronie!',
    date: new Date('2023-10-03'),
    content: 'Bardzo serdecznie witam fanów 07th Expansion!',
  },
];
