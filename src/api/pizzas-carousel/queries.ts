import { useQuery } from '@tanstack/react-query';
import { fetchPizzasCarousel } from './module';

const enum QueryKeys {
  PIZZA_CAROUSEL = 'pizza-carousel',
}

export const usePizzaCarousel = () =>
  useQuery({
    queryKey: [QueryKeys.PIZZA_CAROUSEL],
    queryFn: () => fetchPizzasCarousel(),
  });
