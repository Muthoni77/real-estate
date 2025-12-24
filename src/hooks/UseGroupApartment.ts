import { useMemo } from "react";
import type { ApartmentLocation } from "../data/apartment";

type GroupedApartments = {
  recommended: ApartmentLocation[];
  nearby: ApartmentLocation[];
  other: ApartmentLocation[];
  all: ApartmentLocation[];
};

/**
 * Hook to group apartments for display
 */
export const useGroupedApartments = (
  filteredLocations: ApartmentLocation[],
  selectedUniversity: string
): GroupedApartments => {
  return useMemo(() => {
    if (selectedUniversity === "all" || selectedUniversity === "All Universities & Colleges") {
      return { all: filteredLocations, recommended: [], nearby: [], other: [] };
    }

    const recommended = filteredLocations.filter((apt) => apt.areaType === "RECOMMENDED");
    const nearby = filteredLocations.filter(
      (apt) => apt.areaType !== "RECOMMENDED" && apt.areaType !== "ACADEMIC_CITY"
    );
    const other = filteredLocations.filter((apt) => apt.areaType === "ACADEMIC_CITY");

    return { recommended, nearby, other, all: [] };
  }, [filteredLocations, selectedUniversity]);
};
