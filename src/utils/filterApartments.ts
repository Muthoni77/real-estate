// Import type only for TypeScript
import type { ApartmentLocation } from "../data/apartment";
// Import runtime data
import { APARTMENTS } from "../data/apartment";

/**
 * Filter apartments by areaType or university proximity
 */
export const filterApartments = (
  areaType?: ApartmentLocation["areaType"]
): ApartmentLocation[] => {
  if (!areaType || areaType === "ALL") return APARTMENTS;

  return APARTMENTS.filter((apt) => apt.areaType === areaType);
};
