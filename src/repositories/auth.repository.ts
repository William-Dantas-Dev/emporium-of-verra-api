import { Character, User } from '@prisma/client';
import { prisma } from '../services/prisma';

export const authUser = async (data: User): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email
    },
    select: {
      id: true,
      characters: true,
      name: true,
      email: true,
      password: true,
      type: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return user;
};

export const registerUser = async (data: {user: User, character: Character }): Promise<User> => {
  const { user, character } = data;
  try {
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password ? user.password : '',
        characters: {
          create: {
            nick: character.nick,
            server: character.server,
          }
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        type: true,
        createdAt: true,
        updatedAt: true,
        characters: {
          select: {
            id: true,
            nick: true,
            server: true,
          }
        }
      }
    });
  } catch (error) {
    throw error;
  }
};