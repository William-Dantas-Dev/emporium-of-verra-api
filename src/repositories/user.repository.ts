import { Prisma, User } from '@prisma/client';
import { prisma } from '../services/prisma';

export const getAll = async (): Promise<User[]> => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      type: true,
      characters: true,
      password: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  const transformedUsers = users.map(user => ({
    ...user,
    password: user.password || null,
  }));

  return users;
};

export const getById = async (id: number): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      type: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  if(user != undefined){
    user.password = "";
  }
  return user;
};

export const updateUser = async (id: number, data: Prisma.UserUpdateInput): Promise<User | null> => {
  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      name: data.name
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      type: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  if(user != undefined){
    user.password = "";
  }
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