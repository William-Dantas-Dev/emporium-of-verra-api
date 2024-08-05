import { Maps, Prisma } from '@prisma/client';
import { prisma } from '../services/prisma';

export const createMap = async(data: Maps): Promise<Maps | null> => {
  const normalizedName = data.name.replace(/\s+/g, '').toLowerCase();
  const map = await prisma.maps.create({
    data: {
      name: data.name,
      normalizedName,
      image: data.image,
    },
    select: {
      id: true,
      name: true,
      normalizedName: true,
      mapMark: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return map;
};

export const getAll = async (): Promise<Maps[]> => {
  const maps = await prisma.maps.findMany({
    select: {
      id: true,
      name: true,
      normalizedName: true,
      mapMark: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return maps;
};

export const getById = async (id: number): Promise<Maps | null> => {
  const map = await prisma.maps.findUnique({
    where: {
      id
    },
  });
  return map;
};

export const getByName = async (name: string): Promise<Maps | null> => {
  const map = await prisma.maps.findFirst({
    where: {
      normalizedName: name
    },
    select: {
      id: true,
      name: true,
      normalizedName: true,
      mapMark: true,
      image: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return map;
};


export const updateMap = async (id: number, data: Prisma.UserUpdateInput): Promise<Maps | null> => {
  const map = await prisma.maps.update({
    where: {
      id
    },
    data,
  });
  return map;
};

export const deleteMap = async (id: number): Promise<void> => {
  await prisma.maps.delete({
    where: {
      id
    },
  });
  return;
};