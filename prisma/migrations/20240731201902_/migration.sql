/*
  Warnings:

  - You are about to drop the column `line` on the `ChooseableSkills` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `ChooseableSkills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ChooseableSkills" DROP COLUMN "line",
DROP COLUMN "position";
