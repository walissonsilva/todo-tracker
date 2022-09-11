export function convertFormattedToISODate(formattedDate: string) {
  const [day, month, year] = formattedDate.split("/");

  if (day && month && year) {
    return new Date(`${year}-${month}-${day}T00:00:00`).toISOString();
  }
}
