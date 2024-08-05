import { Prisma, Skill } from '@prisma/client';
import { prisma } from '../services/prisma';

export const createSkill = async(data: Prisma.SkillCreateInput, skillTreeId: number): Promise<Skill | null> => {
  const skill = await prisma.skill.create({
    data: {
      name: data.name,
      image: data.image,
      description: data.description,
      isActiveSkill: data.isActiveSkill,
      isStartSkill: data.isStartSkill,
      nivel: data.nivel,
      cooldown: data.cooldown,
      manaCost: data.manaCost,
      tooltipDirection: data.tooltipDirection,
      range: data.range,
      cost: data.cost,
      castTime: data.castTime,
      line: data.line,
      position: data.position,
      skillPreview: data.skillPreview,
      isDefaultActive: data.isDefaultActive,
      skillTreeId: skillTreeId,
      chooseableSkills: {
        create: data.chooseableSkills?.create || []
      },
      EffectSkills: {
        create: data.EffectSkills?.create || []
      }
  }});
  return skill;
};

export const getAll = async (): Promise<Skill[]> => {
  const skill = await prisma.skill.findMany({
    select: {
      id: true,
      image: true,
      name: true,
      description: true,
      isActiveSkill: true,
      isStartSkill: true,
      tooltipDirection: true,
      nivel: true,
      cooldown: true,
      range: true,
      cost: true,
      manaCost: true,
      skillPreview: true,
      line: true,
      position: true,
      costToActive: true,
      chooseableSkills: {
        select: {
          id: true,
          image: true,
          name: true,
          description: true,
          skillId: true
        }
      },
      isDefaultActive: true,
      castTime: true,
      createdAt: true,
      updatedAt: true,
      skillTreeId: true,
    }
  });
  return skill;
};

export const getById = async (id: number): Promise<Skill | null> => {
  const skill = await prisma.skill.findUnique({
    where: {
      id
    },
  });
  return skill;
};

export const updateSkill = async (id: number, data: Prisma.UserUpdateInput): Promise<Skill | null> => {
  const skill = await prisma.skill.update({
    where: {
      id
    },
    data,
  });
  return skill;
};

export const deleteSkill = async (id: number): Promise<void> => {
  await prisma.skill.delete({
    where: {
      id
    },
  });
  return;
};