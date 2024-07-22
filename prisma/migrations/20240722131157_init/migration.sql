-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "statusTitle" TEXT NOT NULL DEFAULT 'NONE',
    "statusDashboard" TEXT NOT NULL DEFAULT 'NONE',
    "statusRelations" TEXT NOT NULL DEFAULT 'NONE',
    "statusCriteria" TEXT NOT NULL DEFAULT 'NONE',
    "statusGroupsOfUsers" TEXT NOT NULL DEFAULT 'NONE',
    "statusGroupsOfCriteria" TEXT NOT NULL DEFAULT 'NONE',
    "emailAddress" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "pseudoname" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pinnedRelationId" TEXT,
    CONSTRAINT "User_pinnedRelationId_fkey" FOREIGN KEY ("pinnedRelationId") REFERENCES "Relation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Relation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "statusProfile" TEXT NOT NULL DEFAULT 'NONE',
    "isBookmarked" BOOLEAN NOT NULL DEFAULT false,
    "bookmarkedAt" DATETIME,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "blockedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "selectingUserId" TEXT NOT NULL,
    "selectedUserId" TEXT NOT NULL,
    CONSTRAINT "Relation_selectingUserId_fkey" FOREIGN KEY ("selectingUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Relation_selectedUserId_fkey" FOREIGN KEY ("selectedUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Criterion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "source" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Criterion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GroupOfUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hasMembersVisible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorUserId" TEXT NOT NULL,
    "monoUserId" TEXT NOT NULL,
    CONSTRAINT "GroupOfUsers_creatorUserId_fkey" FOREIGN KEY ("creatorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupOfUsers_monoUserId_fkey" FOREIGN KEY ("monoUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GroupOfUsersUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupOfUsersId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "GroupOfUsersUser_groupOfUsersId_fkey" FOREIGN KEY ("groupOfUsersId") REFERENCES "GroupOfUsers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupOfUsersUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GroupOfCriteria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hasMembersVisible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creatorUserId" TEXT NOT NULL,
    "monoCriterionId" TEXT NOT NULL,
    CONSTRAINT "GroupOfCriteria_creatorUserId_fkey" FOREIGN KEY ("creatorUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupOfCriteria_monoCriterionId_fkey" FOREIGN KEY ("monoCriterionId") REFERENCES "Criterion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GroupOfCriteriaCriterion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupOfCriteriaId" TEXT NOT NULL,
    "criterionId" TEXT NOT NULL,
    CONSTRAINT "GroupOfCriteriaCriterion_groupOfCriteriaId_fkey" FOREIGN KEY ("groupOfCriteriaId") REFERENCES "GroupOfCriteria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupOfCriteriaCriterion_criterionId_fkey" FOREIGN KEY ("criterionId") REFERENCES "Criterion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GroupOfUsersGroupOfCriteria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupOfUsersId" TEXT NOT NULL,
    "groupOfCriteriaId" TEXT NOT NULL,
    CONSTRAINT "GroupOfUsersGroupOfCriteria_groupOfUsersId_fkey" FOREIGN KEY ("groupOfUsersId") REFERENCES "GroupOfUsers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GroupOfUsersGroupOfCriteria_groupOfCriteriaId_fkey" FOREIGN KEY ("groupOfCriteriaId") REFERENCES "GroupOfCriteria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserGroupOfCriteriaCriterion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "state" TEXT NOT NULL DEFAULT 'NONE',
    "isPinnedForProfile" BOOLEAN NOT NULL DEFAULT false,
    "pinnedForProfileAt" DATETIME,
    "isPinnedForDashboard" BOOLEAN NOT NULL DEFAULT false,
    "pinnedForDashboardAt" DATETIME,
    "isPinnedForGroupOfUsers" BOOLEAN NOT NULL DEFAULT false,
    "pinnedForGroupOfUsersAt" DATETIME,
    "isPinnedForGroupOfCriteria" BOOLEAN NOT NULL DEFAULT false,
    "pinnedForGroupOfCriteriaAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "groupOfCriteriaCriterionId" TEXT NOT NULL,
    CONSTRAINT "UserGroupOfCriteriaCriterion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserGroupOfCriteriaCriterion_groupOfCriteriaCriterionId_fkey" FOREIGN KEY ("groupOfCriteriaCriterionId") REFERENCES "GroupOfCriteriaCriterion" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_emailAddress_key" ON "User"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_pinnedRelationId_key" ON "User"("pinnedRelationId");
