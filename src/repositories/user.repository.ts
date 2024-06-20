import { Prisma } from '@prisma/client';
import { prisma } from '../services/prisma';
import { verify } from 'jsonwebtoken';

type User = {
  id: number;
  nick: string;
  name: string;
  email: string;
  password?: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const createUser = async (data: User): Promise<User> => {
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
        password: false,
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

export const getAll = async (): Promise<User[]> => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      nick: true,
      name: true,
      email: true,
      password: false,
      admin: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return users;
};

export const getById = async (id: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      nick: true,
      name: true,
      email: true,
      password: false,
      admin: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return user;
};

export const updateUser = async (id: number, data: Prisma.UserUpdateInput): Promise<User | null> => {
  const user = await prisma.user.update({
    where: {
      id
    },
    data,
    select: {
      id: true,
      nick: true,
      name: true,
      email: true,
      password: false,
      admin: true,
      createdAt: true,
      updatedAt: true,
    }
  });
  return user;
};

export const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({
    where: {
      id
    },
  });
  return;
};


export const getUserByJWT = async(token: string) : Promise<User | null> => {
  // verify(token, JWT_SECRET, (err, user) => {
  //   if (err) {
  //     return res.sendStatus(403); // Forbidden
  //   }

  //   user = user; // Armazena o payload decodificado no objeto de requisição
  return null;
}