/*
  Warnings:

  - You are about to drop the `DebuffsSkills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DebuffsSkills" DROP CONSTRAINT "DebuffsSkills_skillId_fkey";

-- DropTable
DROP TABLE "DebuffsSkills";

-- CreateTable
CREATE TABLE "EffectSkills" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skillId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EffectSkills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EffectSkills" ADD CONSTRAINT "EffectSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
