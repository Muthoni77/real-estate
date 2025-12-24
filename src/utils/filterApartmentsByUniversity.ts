import type { ApartmentLocation } from "../data/apartment";
import { APARTMENTS } from "../data/apartment";
import { UNIVERSITIES } from "../data/university";

const CITY_TO_AREA_MAP = {
  "Media City": "MEDIA_CITY",
  "Academic City": "ACADEMIC_CITY",
} as const;

export const filterApartmentsByUniversity = (
  universityId: string
): ApartmentLocation[] => {
  if (universityId === "all") return APARTMENTS;

  const university = UNIVERSITIES.find((u) => u.id === universityId);
  if (!university) return APARTMENTS;

  const targetArea = CITY_TO_AREA_MAP[university.city];

  const recommended = APARTMENTS.filter(
    (apt) => apt.areaType === "RECOMMENDED"
  );

  const nearby = APARTMENTS.filter(
    (apt) => apt.areaType === targetArea
  );

  const others = APARTMENTS.filter(
    (apt) =>
      apt.areaType !== "RECOMMENDED" &&
      apt.areaType !== targetArea
  );

  return [...recommended, ...nearby, ...others];
};

