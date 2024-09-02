import { MOCK_RESPONSE } from './mock-response';
import { PizzaCarouselResponse } from './types';

export const fetchPizzasCarousel = async () => {
  const newData = await new Promise((res) => {
    const response = MOCK_RESPONSE;

    setTimeout(() => {
      res(response);
    }, 2000);
  });

  return newData as PizzaCarouselResponse;
};
