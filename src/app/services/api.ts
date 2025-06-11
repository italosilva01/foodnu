import foodsData from '../mocks/foods';
import { LIMIT_PER_PAGE } from '../utils/constants/constants';

export interface Food {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  success: false;
  code?: number;
}

const fakeDelay = () => {
  const delay = Math.random() * 1000 + 2000;
  return new Promise(resolve => setTimeout(resolve, delay));
}

export const getAllFoods = async (
  limit: number = LIMIT_PER_PAGE,
  page: number = 1
): Promise<PaginatedResponse<Food>> => {
  await fakeDelay();
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const allFoods = foodsData;
  const paginatedFoods = allFoods.slice(startIndex, endIndex);
  
  const totalItems = allFoods.length;
  const totalPages = Math.ceil(totalItems / limit);
  
  return {
    data: paginatedFoods,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
    message: `Retornando ${paginatedFoods.length} de ${totalItems} comidas`,
    success: true
  };
};

export const getFoodById = (id: string): Food | undefined => {
  return foodsData.find(food => food.id === id);
};

export const getLimitedFoods = async (limit: number = 6): Promise<Food[]> => {
  await fakeDelay();
  return foodsData.slice(0, limit);
};

export const getFilteredFoods = async (
  filters: string[],
  page: number = 1,
  limit: number = LIMIT_PER_PAGE
): Promise<PaginatedResponse<Food>> => {
  await fakeDelay();
  
  const filteredFoods = foodsData.filter(food => 
    filters.every(filter => food.tags.includes(filter))
  );
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedFoods = filteredFoods.slice(startIndex, endIndex);
  
  const totalItems = filteredFoods.length;
  const totalPages = Math.ceil(totalItems / limit);
  
  return {
    data: paginatedFoods,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
    message: `Retornando ${paginatedFoods.length} comidas filtradas de ${totalItems} total`,
    success: true
  };
};

export const getFilteredByCategoryFoods = async (
  filters: string[],
  page: number = 1,
  limit: number = LIMIT_PER_PAGE
): Promise<PaginatedResponse<Food>> => {
  await fakeDelay();
  const filteredFoods = foodsData.filter(food => 
    filters.every(filter => food.category.includes(filter))
  );
  
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedFoods = filteredFoods.slice(startIndex, endIndex);
  
  const totalItems = filteredFoods.length;
  const totalPages = Math.ceil(totalItems / limit);
  
  return {
    data: paginatedFoods,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      itemsPerPage: limit,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
    message: `Retornando ${paginatedFoods.length} comidas filtradas de ${totalItems} total`,
    success: true
  };
};