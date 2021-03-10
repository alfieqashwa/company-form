/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `companies`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "companies.name_unique" ON "companies"("name");
