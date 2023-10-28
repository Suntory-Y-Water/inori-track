-- CreateTable
CREATE TABLE "SongPerformance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "live_name_id" INTEGER NOT NULL,
    "venue_id" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,
    "times_sung" INTEGER NOT NULL,
    CONSTRAINT "SongPerformance_live_name_id_fkey" FOREIGN KEY ("live_name_id") REFERENCES "LiveName" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SongPerformance_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "Venue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SongPerformance_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
