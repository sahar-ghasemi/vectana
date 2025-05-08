/*
  Warnings:

  - Made the column `status` on table `Site` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastLogin` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ApiCall" ADD COLUMN     "filePath" TEXT;

-- AlterTable
ALTER TABLE "Site" ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "lastLogin" SET NOT NULL;
