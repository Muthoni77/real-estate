// Unique interior images per apartment location (webp format for SEO)

// Barsha Heights
import barshaBedroom from "../assets/apartments/barshar/bedroom.webp";
import barshaKitchen from "../assets/apartments/barshar/kitchen.webp";
import barshaBalcony from "../assets/apartments/barshar/balcony.webp";
import barshaWashroom from "../assets/apartments/barshar/washroom.webp";
import barshaLiving from "../assets/apartments/barshar/living.webp";

// Marina
import marinaBedroom from "../assets/apartments/marina/bedroom.webp";
import marinaKitchen from "../assets/apartments/marina/kitchen.webp";
import marinaBalcony from "../assets/apartments/marina/balcony.webp";
import marinaWashroom from "../assets/apartments/marina/washroom.webp";
import marinaLiving from "../assets/apartments/marina/living.webp";

// JLT
import jltBedroom from "../assets/apartments/jlt/bedroom.webp";
import jltKitchen from "../assets/apartments/jlt/kitchen.webp";
import jltBalcony from "../assets/apartments/jlt/balcony.webp";
import jltWashroom from "../assets/apartments/jlt/washroom.webp";
import jltLiving from "../assets/apartments/jlt/living.webp";

// Mall of Emirates
import moeBedroom from "../assets/apartments/moe/bedroom.webp";
import moeKitchen from "../assets/apartments/moe/kitchen.webp";
import moeBalcony from "../assets/apartments/moe/balcony.webp";
import moeWashroom from "../assets/apartments/moe/washroom.webp";
import moeLiving from "../assets/apartments/moe/living.webp";

// Ibn Battuta
import ibnBedroom from "../assets/apartments/ibn/bedroom.webp";
import ibnKitchen from "../assets/apartments/ibn/kitchen.webp";
import ibnBalcony from "../assets/apartments/ibn/balcony.webp";
import ibnWashroom from "../assets/apartments/ibn/washroom.webp";
import ibnLiving from "../assets/apartments/ibn/living.webp";

// Academic City
import academicBedroom from "../assets/apartments/academic/bedroom.webp";
import academicKitchen from "../assets/apartments/academic/kitchen.webp";
import academicBalcony from "../assets/apartments/academic/balcony.webp";
import academicWashroom from "../assets/apartments/academic/washroom.webp";
import academicLiving from "../assets/apartments/academic/living.webp";

// Production City
import productionBedroom from "../assets/apartments/production/bedroom.webp";
import productionKitchen from "../assets/apartments/production/kitchen.webp";
import productionBalcony from "../assets/apartments/production/balcony.webp";
import productionWashroom from "../assets/apartments/production/washroom.webp";
import productionLiving from "../assets/apartments/production/living.webp";

// DIP
import dipBedroom from "../assets/apartments/dip/bedroom.webp";
import dipKitchen from "../assets/apartments/dip/kitchen.webp";
import dipBalcony from "../assets/apartments/dip/balcony.webp";
import dipWashroom from "../assets/apartments/dip/washroom.webp";
import dipLiving from "../assets/apartments/dip/living.webp";

// Remraam
import remraamBedroom from "../assets/apartments/remraam/bedroom.webp";
import remraamKitchen from "../assets/apartments/remraam/kitchen.webp";
import remraamBalcony from "../assets/apartments/remraam/balcony.webp";
import remraamWashroom from "../assets/apartments/remraam/washroom.webp";
import remraamLiving from "../assets/apartments/remraam/living.webp";

export type ApartmentInteriorImages = {
  living: string;
  kitchen: string;
  balcony: string;
  washroom: string;
  bedroom: string;
};

export const apartmentInteriors: Record<string, ApartmentInteriorImages> = {
  "Al Barsha Heights (Tecom)": {
    living: barshaLiving,
    kitchen: barshaKitchen,
    balcony: barshaBalcony,
    washroom: barshaWashroom,
    bedroom: barshaBedroom,
  },
  "Dubai Marina": {
    living: marinaLiving,
    kitchen: marinaKitchen,
    balcony: marinaBalcony,
    washroom: marinaWashroom,
    bedroom: marinaBedroom,
  },
  "JLT (Jumeirah Lake Towers)": {
    living: jltLiving,
    kitchen: jltKitchen,
    balcony: jltBalcony,
    washroom: jltWashroom,
    bedroom: jltBedroom,
  },
  "Mall of the Emirates": {
    living: moeLiving,
    kitchen: moeKitchen,
    balcony: moeBalcony,
    washroom: moeWashroom,
    bedroom: moeBedroom,
  },
  "Ibn Battuta": {
    living: ibnLiving,
    kitchen: ibnKitchen,
    balcony: ibnBalcony,
    washroom: ibnWashroom,
    bedroom: ibnBedroom,
  },
  "Academic City": {
    living: academicLiving,
    kitchen: academicKitchen,
    balcony: academicBalcony,
    washroom: academicWashroom,
    bedroom: academicBedroom,
  },
  "Production City": {
    living: productionLiving,
    kitchen: productionKitchen,
    balcony: productionBalcony,
    washroom: productionWashroom,
    bedroom: productionBedroom,
  },
  "Dubai Investments Park (DIP)": {
    living: dipLiving,
    kitchen: dipKitchen,
    balcony: dipBalcony,
    washroom: dipWashroom,
    bedroom: dipBedroom,
  },
  "Remraam Community": {
    living: remraamLiving,
    kitchen: remraamKitchen,
    balcony: remraamBalcony,
    washroom: remraamWashroom,
    bedroom: remraamBedroom,
  },
};
