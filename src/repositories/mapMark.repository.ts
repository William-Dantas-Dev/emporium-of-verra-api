import { MapMark, Prisma } from '@prisma/client';
import { prisma } from '../services/prisma';

export const createMapMark = async(data: MapMark): Promise<MapMark | null> => {
  const mapMark = await prisma.mapMark.create({
    data,
  });
  return mapMark;
};

export const getAll = async (): Promise<MapMark[]> => {
  const mapMark = await prisma.mapMark.findMany({
    
  });
  return mapMark;
};

export const getById = async (id: number): Promise<MapMark | null> => {
  const mapMark = await prisma.mapMark.findUnique({
    where: {
      id
    },
  });
  return mapMark;
};

export const updateMapMark = async (id: number, data: Prisma.UserUpdateInput): Promise<MapMark | null> => {
  const mapMark = await prisma.mapMark.update({
    where: {
      id
    },
    data,
  });
  return mapMark;
};

export const deleteMapMark = async (id: number): Promise<void> => {
  await prisma.mapMark.delete({
    where: {
      id
    },
  });
  return;
};