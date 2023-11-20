/*
  Warnings:

  - You are about to drop the column `number` on the `test` table. All the data in the column will be lost.
  - Added the required column `email` to the `test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test" DROP COLUMN "number",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
