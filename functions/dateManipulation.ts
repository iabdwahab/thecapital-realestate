import dayjs from "dayjs";
import ar from "dayjs/locale/ar"; // Import the Arabic locale
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

// Set the global locale to Arabic for the following operations
dayjs.locale(ar);

export function formatDateToArabic(dateString: string): string {
  const date = dayjs(dateString, "YYYY-MM-DD-HH-mm");

  return dayjs(date).format("D MMMM YYYY");
}

export function timeFromNowInArabic(dateString: string): string {
  const date = dayjs(dateString, "YYYY-MM-DD-HH-mm");

  return dayjs(date).fromNow();
}
