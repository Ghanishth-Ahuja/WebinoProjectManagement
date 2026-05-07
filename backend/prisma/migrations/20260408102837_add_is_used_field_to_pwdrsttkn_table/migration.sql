-- AlterTable
ALTER TABLE "PasswordResetToken" ADD COLUMN     "isUsed" BOOLEAN NOT NULL DEFAULT false;
