import locationMarina from "../assets/location-marina.webp";
import locationBarsha from "../assets/location-barsha.webp";
import locationJlt from "../assets/location-jlt.webp";
import locationIbn from "../assets/location-ibn.webp";
import locationAcademic from "../assets/location-academic.webp";
import locationProduction from "../assets/location-production.webp";

// Type definition
export type ApartmentLocation = {
  name: string;
  areaType: "RECOMMENDED" | "MEDIA_CITY" | "ACADEMIC_CITY" | "OTHER" | "ALL";
  image: string;
  features: string[];
};

// Actual apartment data (runtime)
export const APARTMENTS: ApartmentLocation[] = [
  {
    name: "Al Barsha Heights (Tecom)",
    areaType: "RECOMMENDED",
    image: locationBarsha,
    features: ["Near Metro", "Most Popular"],
  },
  {
    name: "Dubai Marina",
    areaType: "MEDIA_CITY",
    image: locationMarina,
    features: ["Nearby"],
  },
  {
    name: "JLT",
    areaType: "MEDIA_CITY",
    image: locationJlt,
    features: ["Nearby"],
  },
  {
    name: "Academic City",
    areaType: "ACADEMIC_CITY",
    image: locationAcademic,
    features: ["Student Hub"],
  },
  {
    name: "Production City",
    areaType: "OTHER",
    image: locationProduction,
    features: ["Student Hub"],
  },
  {
    name: "IBN Battuta",
    areaType: "OTHER",
    image: locationIbn,
    features: ["Student Hub"],
  },
];
