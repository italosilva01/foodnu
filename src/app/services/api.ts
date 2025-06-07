import foodsData from '../mocks/foods';

export interface Food {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  success: false;
  code?: number;
}

const fakeDelay = () =>{
  const delay = Math.random() * 1000 + 2000;
  return new Promise(resolve => setTimeout(resolve, delay));
} 

export const getAllFoods = async (): Promise<Food[]> => {
  await fakeDelay();
  return foodsData;
};

export const getFoodById = (id: string): Food | undefined => {
  return foodsData.find(food => food.id === id);
};

export const getFilteredFoods = async (filters: string[]): Promise<Food[]> => {
  const foods = await getAllFoods();
  return foods.filter(food => filters.every(filter => food.tags.includes(filter)));
};

