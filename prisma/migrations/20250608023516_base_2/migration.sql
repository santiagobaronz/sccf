/*
  Warnings:

  - Added the required column `name` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `Subscription` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `personType` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('STUDENT', 'TEACHER', 'OTHER');

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "transactionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "personType",
ADD COLUMN     "personType" "PersonType" NOT NULL;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
