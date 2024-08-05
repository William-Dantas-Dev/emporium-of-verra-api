-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "nick" TEXT NOT NULL,
    "server" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillConnection" (
    "id" SERIAL NOT NULL,
    "startPosition" INTEGER NOT NULL,
    "midPosition" TEXT,
    "endPosition" INTEGER NOT NULL,
    "startAnchor" TEXT NOT NULL,
    "endAnchor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "skillTreeId" INTEGER,

    CONSTRAINT "SkillConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillTree" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SkillTree_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActiveSkill" BOOLEAN NOT NULL DEFAULT false,
    "isStartSkill" BOOLEAN NOT NULL DEFAULT false,
    "level" INTEGER,
    "cooldown" INTEGER,
    "range" INTEGER,
    "manaCost" INTEGER,
    "skillPreview" TEXT,
    "aoe" BOOLEAN,
    "rooted" BOOLEAN,
    "held" BOOLEAN,
    "castTime" DOUBLE PRECISION,
    "line" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "isDefaultActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "skillTreeId" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChooseableSkills" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isActiveSkill" BOOLEAN NOT NULL DEFAULT false,
    "isStartSkill" BOOLEAN NOT NULL DEFAULT false,
    "level" INTEGER,
    "cooldown" INTEGER,
    "range" INTEGER,
    "manaCost" INTEGER,
    "aoe" BOOLEAN,
    "rooted" BOOLEAN,
    "held" BOOLEAN,
    "castTime" INTEGER,
    "skillId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChooseableSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "normalizedName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MapMark" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isFixed" BOOLEAN NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "mapsId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MapMark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SkillTree_name_key" ON "SkillTree"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Maps_name_key" ON "Maps"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Maps_normalizedName_key" ON "Maps"("normalizedName");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillConnection" ADD CONSTRAINT "SkillConnection_skillTreeId_fkey" FOREIGN KEY ("skillTreeId") REFERENCES "SkillTree"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_skillTreeId_fkey" FOREIGN KEY ("skillTreeId") REFERENCES "SkillTree"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChooseableSkills" ADD CONSTRAINT "ChooseableSkills_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MapMark" ADD CONSTRAINT "MapMark_mapsId_fkey" FOREIGN KEY ("mapsId") REFERENCES "Maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
