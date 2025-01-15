//@ts-nocheck
import { pgTable, serial, text, varchar, json } from "drizzle-orm/postgres-core";

export const StoryData = pgTable("storyData", {
  id: serial("id").primaryKey(),
  storySubject: text("storySubject"),
  storyType: varchar("storyType"),
  ageGroup: varchar("ageGroup"),
  imageType: varchar("imageType"),
  output: json("output"),
  coverImage: varchar('coverImage')
});
