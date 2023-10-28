-- CreateTable
CREATE TABLE "LiveName" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "live_type_id" INTEGER NOT NULL,
    CONSTRAINT "LiveName_live_type_id_fkey" FOREIGN KEY ("live_type_id") REFERENCES "LiveType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Venue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "live_name_id" INTEGER NOT NULL,
    CONSTRAINT "Venue_live_name_id_fkey" FOREIGN KEY ("live_name_id") REFERENCES "LiveName" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);
