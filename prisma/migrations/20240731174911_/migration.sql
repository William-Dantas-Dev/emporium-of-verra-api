/*
  Warnings:

  - Added the required column `type` to the `EffectSkills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EffectSkills" ADD COLUMN     "type" TEXT NOT NULL;
