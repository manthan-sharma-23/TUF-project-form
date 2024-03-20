/*
  Warnings:

  - You are about to drop the column `output` on the `Responses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Responses` DROP COLUMN `output`,
    ADD COLUMN `stdout` VARCHAR(191) NULL;
