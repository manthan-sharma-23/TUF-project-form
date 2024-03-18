/*
  Warnings:

  - You are about to drop the `Form` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Form`;

-- CreateTable
CREATE TABLE `Responses` (
    `id` INTEGER NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `code_language` VARCHAR(191) NOT NULL DEFAULT 'python',
    `source_code` LONGTEXT NOT NULL,
    `stdin` VARCHAR(191) NULL DEFAULT 'keyboard',
    `submitted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `output` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
