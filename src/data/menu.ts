export type MenuItem = {
  id: string;
  name: string;
  price: string;
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const sections: MenuSection[] = [
  {
    id: "extras",
    title: "გინდა არ გინდა",
    items: [
      { id: "lemon", name: "ლიმონი", price: "3.00" },
      { id: "tea", name: "ჩაი", price: "2.00" },
      { id: "fries", name: "ფრი", price: "9.00" },
      { id: "mustard", name: "მდოგვი", price: "8.00" },
      { id: "vodka-shot", name: "არაყი (ჭიქა)", price: "3.00" },
      { id: "spices", name: "სანელებლები", price: "3.00" },
      { id: "tkemali", name: "ტყემალი", price: "3.00" },
      { id: "garlic-water", name: "ნიორ-წყალი", price: "3.00" },
      { id: "mayo", name: "მაიონეზი", price: "3.00" },
      { id: "shoti", name: "შოთი", price: "3.00" },
    ],
  },
  {
    id: "wine",
    title: "ღვინო",
    items: [
      { id: "nioeli-bottle", name: "ნიოელი ღვინო, ბოთლი", price: "42.00" },
      { id: "white-bottle", name: "თეთრი ღვინო, ბოთლი", price: "32.00" },
      { id: "nioeli-glass", name: "ნიოელი ღვინო (ჭიქით)", price: "8.00" },
      { id: "house-wine", name: "ღვინო პაპური, ჩამოსასხმელი (1ლ)", price: "13.00" },
    ],
  },
  {
    id: "kids-drinks",
    title: "საბავშვო სასმელი",
    items: [
      { id: "juice-glass", name: "ნატურალური წვენი (ჭიქა)", price: "6.00" },
      { id: "water", name: "წყალი", price: "2.00" },
      { id: "lemonade", name: "ლიმონათი ყაზბეგი", price: "3.50" },
      { id: "nabeghlavi", name: "ნაბეღლავი", price: "3.50" },
      { id: "cola", name: "კოკა-კოლა", price: "3.50" },
      { id: "juice-carafe", name: "ნატურალური წვენი (გრაფინით)", price: "16.50" },
    ],
  },
  {
    id: "beer",
    title: "ლუდი",
    items: [
      { id: "machari-bottle", name: "მაჭარი (ბოთლი)", price: "10.00" },
      { id: "machari-draft", name: "მაჭარი, ჩამოსასხმელი", price: "10.00" },
      { id: "shavi-lomi-draft", name: "შავი ლომი, ჩამოსასხმელი (0,4)", price: "8.00" },
      { id: "shavi-lomi-unfiltered", name: "შავი ლომი მინის, გაუფილტრავი (0,5)", price: "12.00" },
      { id: "bavaria-bottle", name: "ბავარია (ბოთლი)", price: "8.00" },
      { id: "bavaria-draft", name: "ბავარია, ჩამოსასხმელი (0,4)", price: "8.00" },
      { id: "qazbegi-beer", name: "ლუდი ყაზბეგი, ჩამოსასხმელი", price: "7.00" },
    ],
  },
  {
    id: "spirits",
    title: "მძიმე სასმელი",
    items: [
      { id: "premium-chacha", name: "პაპური ჭაჭა, პრემიუმ", price: "33.00" },
      { id: "absolut", name: "აბსოლუტი (1ლ)", price: "94.00" },
      { id: "stolichnaya-1", name: "სტალინკაია (1ლ)", price: "77.00" },
      { id: "stolichnaya-07", name: "სტალინკაია (0,7)", price: "61.00" },
      { id: "stolichnaya-05", name: "სტალინკაია (0,5)", price: "50.00" },
      { id: "chacha-draft", name: "ჭაჭა, ჩამოსასხმელი (0,5)", price: "17.00" },
      { id: "cognac", name: "კონიაკი (0,5)", price: "50.00" },
      { id: "vodka-50", name: "არაყი (0,05 ჭიქა)", price: "6.00" },
    ],
  },
  {
    id: "hot",
    title: "ცხელი პაპური",
    items: [
      { id: "fried-potato", name: "შემწვარი კარტოფილი", price: "11.00" },
      { id: "potato-family", name: "კარტოფილი ოჯახურად", price: "13.00" },
      { id: "potato-spice", name: "კარტოფილი ქართული სუნელით", price: "12.00" },
      { id: "grilled-hot", name: "შემწვარი ცეცხლზე", price: "31.00" },
      { id: "family-dish", name: "ოჯახური", price: "17.00" },
      { id: "new-potato", name: "ახალი კარტოფილი (სეზონურად)", price: "14.00" },
      { id: "veal-chakhapuli", name: "ხბოს ჩაქაფული", price: "33.00" },
      { id: "quail-chakhapuli", name: "ტატკის ჩაქაფული", price: "44.00" },
      { id: "shlama", name: "საშლამა", price: "45.00" },
      { id: "cutlet-two", name: "კატლეტი და პიურე სანელებლით (2ც)", price: "19.00", image: "/photos/cutlet.jpg" },
      { id: "cutlet-one", name: "კატლეტი და პიურე სანელებლით (1ც)", price: "14.00", image: "/photos/cutlet.jpg" },
      { id: "apsakhura", name: "აფსახურა", price: "19.00" },
      { id: "chakhokhbili", name: "ჩახოხბილი ღორის ხორცით", price: "19.00" },
      { id: "mushroom-pan", name: "სოკო კეცზე", price: "13.00" },
      { id: "mushroom-fire", name: "სოკო ცეცხლზე სულგუნით", price: "15.00" },
      { id: "beef-stew", name: "ჩაშუშული საქონლის ხორცით", price: "24.00" },
    ],
  },
  {
    id: "fire",
    title: "ცეცხლის პაპური",
    items: [
      { id: "tabaka", name: "ტაბაკა", price: "33.00" },
      { id: "kupati", name: "კუპატი", price: "21.00" },
      { id: "mtsvadi-shoti", name: "მწვადი შოთით", price: "16.00", image: "/photos/mtsvadi.jpg" },
      { id: "mtsvadi-mushroom", name: "მწვადი სოკოს", price: "20.00" },
      { id: "fish-steak", name: "თევზის სტეიკი გარნირით", price: "27.00" },
      { id: "trout", name: "კალმახი", price: "23.00" },
      { id: "veg-grill", name: "ბოსტნეულის მწვადი", price: "17.00" },
      { id: "liver", name: "ღვიძლი ბადეში", price: "14.00" },
      { id: "chicken", name: "ქათმის მწვადი", price: "15.00", image: "/photos/kebab.jpg" },
      { id: "chalagaji", name: "მწვადი ჩალაღაჯი (რბილი)", price: "18.00", image: "/photos/mtsvadi.jpg" },
      { id: "ribs", name: "მწვადი ნეკნი (ძვლიანი)", price: "18.00", image: "/photos/ribs.jpg" },
      { id: "kebab", name: "ქაბაბი საფირმო", price: "18.00", image: "/photos/kebab.jpg" },
    ],
  },
  {
    id: "dough",
    title: "ცომიანი პაპური",
    items: [
      { id: "paradise-lobiani", name: "„სამოთხის“ ლობიანი", price: "19.00" },
      { id: "chebureki", name: "ჩებურეკი (2ც)", price: "8.00", image: "/photos/turnovers.jpg" },
      { id: "kubdari", name: "კუბდარი", price: "17.00" },
      { id: "imeruli", name: "იმერული ხაჭაპური", price: "17.00", image: "/photos/khachapuri.jpg" },
      { id: "skewer-khachapuri", name: "ხაჭაპური შამფურზე სულგუნით", price: "17.00", image: "/photos/pastry.jpg" },
      { id: "megrelian", name: "სამეგრო ხაჭაპური სულგუნით", price: "23.00" },
      { id: "puff-khachapuri", name: "ფენოვანი ხაჭაპური", price: "9.00", image: "/photos/pastry.jpg" },
      { id: "ajaruli", name: "აჭარული ხაჭაპური", price: "17.00" },
      { id: "puff-lobiani", name: "ფენოვანი ლობიანი", price: "7.00", image: "/photos/turnovers.jpg" },
      { id: "puff-khachapuri-six", name: "ფენოვანი ხაჭაპური (6 ნაჭრიანი)", price: "19.00" },
      { id: "lobiani", name: "ლობიანი", price: "13.00", image: "/photos/lobiani.jpg" },
      { id: "ajaruli-lobiani", name: "აჭარული ლობიანი", price: "13.00" },
    ],
  },
  {
    id: "khinkali",
    title: "ხინკლის პაპური",
    items: [
      { id: "cheese-khinkali", name: "ყველის ხინკალი", price: "2.10" },
      { id: "veal-khinkali", name: "ხბოს ხინკალი", price: "2.40" },
      { id: "potato-khinkali", name: "კარტოფილის ხინკალი", price: "1.90" },
      { id: "papuri-khinkali", name: "ხინკალი პაპურად, ხორცის", price: "2.40" },
      { id: "mushroom-khinkali", name: "სოკოს ხინკალი", price: "2.20" },
    ],
  },
  {
    id: "light",
    title: "მსუბუქი პაპური",
    items: [
      { id: "pickle-board", name: "მწნილის დაფა", price: "13.00" },
      { id: "appetizer-board", name: "აპეტაიზერის დაფა", price: "13.00" },
      { id: "pickle-mix", name: "მჟავეულის დაფა", price: "15.00", image: "/photos/sauce.png" },
      { id: "walnut-board", name: "ნიგვზიანების დაფა", price: "23.00" },
      { id: "factory-cheese", name: "ქარხნული ყველის დაფა", price: "17.00" },
      { id: "cheese-board", name: "ყველის დაფა (ასორტი)", price: "21.00" },
      { id: "imeruli-cheese", name: "იმერული ყველი", price: "13.00" },
      { id: "mozzarella", name: "მოცარელა ქათმის მწვადით", price: "24.00", image: "/photos/chicken.png" },
      { id: "salad-herb", name: "კიტრი-პომიდვრის სალათა ქინძით", price: "17.00" },
      { id: "salad-kakheti", name: "კიტრი-პომიდვრის სალათა კახურად", price: "11.00" },
      { id: "salad-walnut", name: "კიტრი-პომიდვრის სალათა ნიგვზით", price: "15.00", image: "/photos/salad.jpg" },
      { id: "eggplant", name: "ბადრიჯნის სალათა ნიგვზით", price: "17.00" },
      { id: "ajapsandali", name: "ცეცხლის აჯაფსანდალი", price: "17.00" },
      { id: "mushroom-cold", name: "სოკოს ჩაშუშული ცივად", price: "17.00" },
      { id: "chicken-salad", name: "ქათმის სალათა", price: "17.00" },
    ],
  },
  {
    id: "soups",
    title: "წვნიანები",
    items: [
      { id: "chikhirtma", name: "ჩიხირთმა", price: "15.00" },
      { id: "pelmeni", name: "ქოთნის პელმენი", price: "17.00" },
      { id: "pot-beans", name: "ქოთნის ლობიო", price: "13.00" },
    ],
  },
];

export const dishes: MenuItem[] = sections.flatMap((section) => section.items);

export const featured = ["chalagaji", "imeruli", "kebab"] as const;
