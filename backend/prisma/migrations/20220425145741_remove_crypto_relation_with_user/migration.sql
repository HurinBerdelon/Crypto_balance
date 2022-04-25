/*
  Warnings:

  - You are about to drop the column `cryptoId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_cryptoId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cryptoId";
