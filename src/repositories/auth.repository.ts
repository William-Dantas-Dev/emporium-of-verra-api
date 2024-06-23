import { prisma } from '../services/prisma';

type User = {
  id: number;
  nick: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
};


export const authUser = async (data: User): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email
    },
    select: {
      id: true,
      nick: true,
      name: true,
      email: true,
      password: true,
      admin: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return user;
};

export const registerUser = async (data: User): Promise<User> => {
  try {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        nick: data.nick,
        email: data.email,
        password: data.password ? data.password : '',
      },
      select: {
        id: true,
        nick: true,
        name: true,
        email: true,
        password: true,
        admin: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    return user;
  } catch (error) {
    throw error;
  }
};