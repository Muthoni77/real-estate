import type { ApartmentLocation } from "../data/apartment";
import { APARTMENTS } from "../data/apartment";

export const filterApartmentsByUniversity = (university: string): ApartmentLocation[] => {
  if (university === "All Universities & Colleges") return APARTMENTS;

  // Recommended apartment always first
  const recommended = APARTMENTS.filter((apt) => apt.areaType === "RECOMMENDED");

  // Apartments that are nearby or in media city
  const nearby = APARTMENTS.filter(
    (apt) =>
      apt.areaType !== "RECOMMENDED" &&
      (apt.features.includes("Nearby") || apt.features.includes("Student Hub"))
  );

  // Academic city apartments as "other"
  const academic = APARTMENTS.filter((apt) => apt.areaType === "ACADEMIC_CITY");

  // Combine arrays
  const allApartments = [...recommended, ...nearby, ...academic];

  // Remove duplicates by name
  const uniqueApartments = [...new Map(allApartments.map(a => [a.name, a])).values()];

  return uniqueApartments;
};
