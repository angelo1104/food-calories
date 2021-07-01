interface Fruit {
  Food: string;
  Serving: string;
  Calories: number;
}

export type { Fruit };

const calories: Fruit[] = [
  { Food: "Apples", Serving: "1 apple (182 g)", Calories: 95 },
  { Food: "Bananas", Serving: "1 banana (125 g)", Calories: 111 },
  { Food: "Blackberries", Serving: "1 cup (144 g)", Calories: 62 },
  { Food: "Cantaloupes", Serving: "1 wedge (69 g)", Calories: 23 },
  { Food: "Cherries", Serving: "1 cherry (8 g)", Calories: 4 },
  { Food: "Grapes", Serving: "1 cup (151 g)", Calories: 104 },
  { Food: "Greengage", Serving: "1 fruit (5 g)", Calories: 2 },
  { Food: "Guava", Serving: "1 guava (55 g)", Calories: 37 },
  { Food: "Kiwifruit", Serving: "1 kiwi (183 g)", Calories: 112 },
  { Food: "Lemons", Serving: "1 lemon (58 g)", Calories: 17 },
  { Food: "Limes", Serving: "1 lime (67 g)", Calories: 20 },
  { Food: "Mangos", Serving: "1 mango (336 g)", Calories: 202 },
  { Food: "Olives", Serving: "1 olive (2.7 g)", Calories: 2 },
  { Food: "Oranges", Serving: "1 orange (131 g)", Calories: 62 },
  {
    Food: "Passionfruit",
    Serving: "1 passion fruit (18 g)",
    Calories: 17,
  },
  { Food: "Peaches", Serving: "1 peach (150 g)", Calories: 59 },
  { Food: "Pineapples", Serving: "1 pineapple (905 g)", Calories: 453 },
  {
    Food: "Pomegranates",
    Serving: "1 pomegranate (282 g)",
    Calories: 234,
  },
  { Food: "Raspberries", Serving: "1 cup (123 g)", Calories: 64 },
  { Food: "Strawberries", Serving: "1 cup (152 g)", Calories: 49 },
  {
    Food: "Apricots",
    Serving: "1 apricot (35 grams)",
    Calories: 16,
  },
  { Food: "Coconuts", Serving: "1 coconut (400 grams)", Calories: 1405 },
  { Food: "Tomatoes", Serving: "1 tomato (120 grams)", Calories: 25 },
  { Food: "Avocados", Serving: "1 avocado (200 g)", Calories: 320 },
  {
    Food: "Grapefruits",
    Serving: "1/2 grapefruit (123 g)",
    Calories: 52,
  },
  { Food: "Watermelons", Serving: "1 wedge (286 g)", Calories: 86 },
];

export default calories;
