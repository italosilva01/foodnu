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


export const getAllFoods = (): Food[] => {
  return foodsData;
};

export const getFoodById = (id: string): Food | undefined => {
  return foodsData.find(food => food.id === id);
};

