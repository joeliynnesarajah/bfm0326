// src/lib/getScheduledPowerpoint.ts

export type RecurringScheduleEntry = {
  monthDay: string;
  url: string;
};

/*
Chooses which PowerPoint to show today.

Features:
• Works every year (MM-DD format)
• Switches content at 7am
• Before 7am it shows yesterday's content
*/

export function getScheduledPowerpoint(
  schedule: RecurringScheduleEntry[],
  releaseHour: number = 7
): string | null {
  const now = new Date();
  const effectiveDate = new Date(now);

  // before 7am → show yesterday
  if (now.getHours() < releaseHour) {
    effectiveDate.setDate(effectiveDate.getDate() - 1);
  }

  const month = String(effectiveDate.getMonth() + 1).padStart(2, "0");
  const day = String(effectiveDate.getDate()).padStart(2, "0");

  const monthDay = `${month}-${day}`;

  const match = schedule.find((entry) => entry.monthDay === monthDay);

  return match?.url ?? null;
}