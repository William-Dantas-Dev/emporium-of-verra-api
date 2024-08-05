/*
  Warnings:

  - You are about to drop the column `aoe` on the `ChooseableSkills` table. All the data in the column will be lost.
  - You are about to drop the column `held` on the `ChooseableSkills` table. All the data in the column will be lost.
  - You are about to drop the column `isStartSkill` on the `ChooseableSkills` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `ChooseableSkills` table. All the data in the column will be lost.
  - You are about to drop the column `rooted` on the `ChooseableSkills` table. All the data in the column will be lost.
  - You are about to drop the column `aoe` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `held` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `rooted` on the `Skill` table. All the data in the column will be lost.
  - Added the required column `line` to the `ChooseableSkills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `ChooseableSkills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ChooseableSkills" DROP COLUMN "aoe",
DROP COLUMN "held",
DROP COLUMN "isStartSkill",
DROP COLUMN "level",
DROP COLUMN "rooted",
ADD COLUMN     "cost" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "line" INTEGER NOT NULL,
ADD COLUMN     "nivel" INTEGER,
ADD COLUMN     "position" INTEGER NOT NULL,
ADD COLUMN     "skillPreview" TEXT,
ALTER COLUMN "cooldown" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "castTime" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "aoe",
DROP COLUMN "held",
DROP COLUMN "level",
DROP COLUMN "rooted",
ADD COLUMN     "cost" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "nivel" INTEGER,
ALTER COLUMN "cooldown" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "DebuffsSkills" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skillId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DebuffsSkills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DebuffsSkills" ADD CONSTRAINT "DebuffsSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
