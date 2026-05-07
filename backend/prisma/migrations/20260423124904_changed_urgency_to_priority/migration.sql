/*
  Warnings:

  - You are about to drop the column `urgency` on the `Tasks` table. All the data in the column will be lost.
  - Added the required column `priority` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "urgency",
ADD COLUMN     "priority" "Priority" NOT NULL;
