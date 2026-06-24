export interface Store {
  id: number;
  name: string;
  borough: "Manhattan" | "Brooklyn" | "Bronx" | "Queens";
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
  buyUrl: string;
}

export const stores: Store[] = [
  {
    id: 1,
    name: "Best Buy Liquors",
    borough: "Manhattan",
    address: "169 Sullivan St, New York, NY 10012",
    phone: "(212) 555-0101",
    hours: "Mon–Sat 9am–10pm · Sun 11am–9pm",
    lat: 40.7277,
    lng: -74.0004,
    buyUrl: "https://bestbuyliquors.com/wine-store/other?brand=7522",
  },
  {
    id: 2,
    name: "Best Buy Liquors",
    borough: "Brooklyn",
    address: "234 5th Ave, Brooklyn, NY 11215",
    phone: "(718) 555-0202",
    hours: "Mon–Sat 9am–10pm · Sun 11am–9pm",
    lat: 40.6693,
    lng: -73.9799,
    buyUrl: "https://bestbuyliquors.com/wine-store/other?brand=7522",
  },
  {
    id: 3,
    name: "Best Buy Liquors",
    borough: "Bronx",
    address: "742 E Tremont Ave, Bronx, NY 10457",
    phone: "(718) 555-0303",
    hours: "Mon–Sat 9am–10pm · Sun 11am–9pm",
    lat: 40.8465,
    lng: -73.8890,
    buyUrl: "https://bestbuyliquors.com/wine-store/other?brand=7522",
  },
  {
    id: 4,
    name: "Best Buy Liquors",
    borough: "Queens",
    address: "87-10 Jamaica Ave, Queens, NY 11421",
    phone: "(718) 555-0404",
    hours: "Mon–Sat 9am–10pm · Sun 11am–9pm",
    lat: 40.6938,
    lng: -73.8462,
    buyUrl: "https://bestbuyliquors.com/wine-store/other?brand=7522",
  },
];

export const boroughColors: Record<Store["borough"], string> = {
  Manhattan: "#8B1A1A",
  Brooklyn: "#B4682A",
  Bronx: "#2A5C8B",
  Queens: "#2A8B4A",
};
