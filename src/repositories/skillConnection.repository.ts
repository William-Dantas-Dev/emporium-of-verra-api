import { Prisma, SkillConnection } from '@prisma/client';
import { prisma } from '../services/prisma';

export const createSkill = async(data: SkillConnection): Promise<SkillConnection | null> => {
  const skillSkill = await prisma.skillConnection.create({
    data,
  });
  return skillSkill;
};

export const getAll = async (): Promise<SkillConnection[]> => {
  const skill = await prisma.skillConnection.findMany({
    
  });
  return skill;
};

export const getById = async (id: number): Promise<SkillConnection | null> => {
  const skill = await prisma.skillConnection.findUnique({
    where: {
      id
    },
  });
  return skill;
};

export const updateSkill = async (id: number, data: Prisma.UserUpdateInput): Promise<SkillConnection | null> => {
  const skill = await prisma.skillConnection.update({
    where: {
      id
    },
    data,
  });
  return skill;
};

export const deleteSkill = async (id: number): Promise<void> => {
  await prisma.skillConnection.delete({
    where: {
      id
    },
  });
  return;
};