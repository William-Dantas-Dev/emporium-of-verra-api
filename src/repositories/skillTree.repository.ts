import { Prisma, SkillTree } from '@prisma/client';
import { prisma } from '../services/prisma';

export const createSkillTree = async(data: SkillTree): Promise<SkillTree | null> => {
  const SkillTree = await prisma.skillTree.create({
    data,
    select: {
      id: true,
      name: true,
      backgroundImage: true,
      description: true,
      type: true,
      lineQty: true,
      positionsQty: true,
      minWidth: true,
      maxWidth: true,
      createdAt: true,
      updatedAt: true,
    } 
  });
  return SkillTree;
};

export const getAll = async (): Promise<SkillTree[]> => {
  const skillTree = await prisma.skillTree.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      backgroundImage: true,
      type: true,
      skills: true,
      lineQty: true,
      positionsQty: true,
      minWidth: true,
      maxWidth: true,
      SkillConnection: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return skillTree;
};

export const getById = async (id: number): Promise<SkillTree | null> => {
  const skillTree = await prisma.skillTree.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      description: true,
      backgroundImage: true,
      type: true,
      lineQty: true,
      positionsQty: true,
      minWidth: true,
      maxWidth: true,
      skills: true,
      SkillConnection: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return skillTree;
};

export const getByName = async (name: string): Promise<SkillTree | null> => {
  const skillTree = await prisma.skillTree.findUnique({
    where: {
      name: name.charAt(0).toUpperCase() + name.slice(1)
    },
    select: {
      id: true,
      name: true,
      description: true,
      lineQty: true,
      positionsQty: true,
      minWidth: true,
      maxWidth: true,
      backgroundImage: true,
      type: true,
      skills: {
        select: {
          id: true,
          image: true,
          name: true,
          description: true,
          isActiveSkill: true,
          isStartSkill: true,
          nivel: true,
          cooldown: true,
          tooltipDirection: true,
          range: true,
          cost: true,
          manaCost: true,
          skillPreview: true,
          line: true,
          position: true,
          castTime: true,
          isDefaultActive: true,
          costToActive: true,
          skillTreeId: true,
          createdAt: true,
          updatedAt: true,
          EffectSkills: {
            select: {
              id: true,
              image: true,
              name: true,
              description: true,
            }
          },
          chooseableSkills: {
            select: {
              id: true,
              image: true,
              name: true,
              description: true,
              isActiveSkill: true,
              isStartSkill: true,
              skillId: true,
            }
          }
        }
      },
      SkillConnection: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return skillTree;
};

export const updateSkillTree = async (id: number, data: Prisma.UserUpdateInput): Promise<SkillTree | null> => {
  const skillTree = await prisma.skillTree.update({
    where: {
      id
    },
    data,
    select: {
      id: true,
      name: true,
      description: true,
      backgroundImage: true,
      type: true,
      lineQty: true,
      positionsQty: true,
      minWidth: true,
      maxWidth: true,
      skills: true,
      SkillConnection: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return skillTree;
};

export const deleteSkillTree = async (id: number): Promise<void> => {
  await prisma.skillTree.delete({
    where: {
      id
    },
  });
  return;
};