/*
  Warnings:

  - You are about to alter the column `year` on the `LiveName` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LiveName" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "live_type_id" INTEGER NOT NULL,
    CONSTRAINT "LiveName_live_type_id_fkey" FOREIGN KEY ("live_type_id") REFERENCES "LiveType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LiveName" ("id", "live_type_id", "name", "year") SELECT "id", "live_type_id", "name", "year" FROM "LiveName";
DROP TABLE "LiveName";
ALTER TABLE "new_LiveName" RENAME TO "LiveName";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
