-- CreateTable
CREATE TABLE "LiveType" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "LiveType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiveName" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "live_type_id" INTEGER NOT NULL,

    CONSTRAINT "LiveName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Venue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "live_name_id" INTEGER NOT NULL,

    CONSTRAINT "Venue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongPerformance" (
    "id" SERIAL NOT NULL,
    "live_name_id" INTEGER NOT NULL,
    "venue_id" INTEGER NOT NULL,
    "song_id" INTEGER NOT NULL,
    "times_sung" INTEGER NOT NULL,

    CONSTRAINT "SongPerformance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LiveName" ADD CONSTRAINT "LiveName_live_type_id_fkey" FOREIGN KEY ("live_type_id") REFERENCES "LiveType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venue" ADD CONSTRAINT "Venue_live_name_id_fkey" FOREIGN KEY ("live_name_id") REFERENCES "LiveName"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongPerformance" ADD CONSTRAINT "SongPerformance_live_name_id_fkey" FOREIGN KEY ("live_name_id") REFERENCES "LiveName"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongPerformance" ADD CONSTRAINT "SongPerformance_venue_id_fkey" FOREIGN KEY ("venue_id") REFERENCES "Venue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongPerformance" ADD CONSTRAINT "SongPerformance_song_id_fkey" FOREIGN KEY ("song_id") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
