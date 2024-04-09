export type PizzaCarouselResponse = {
  data: {
    pizzas: Pizza[];
  };
};

type Pizza = {
  name: string;
  image: string;
  prices: Prices;
};

type Prices = {
  l: number;
  m: number;
  s: number;
};
