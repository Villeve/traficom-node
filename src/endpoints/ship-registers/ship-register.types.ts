export interface ShipRegister {
  ID: number;
  alus_id: number;
  nimi: string;
  alustyyppi: number;
  Tilakoodi: string;
  Ensirekisterointipvm: string;
  Uusikotimaa: number | null;
  Vanhakotimaa: number | null;
  Rakennusvuosi: string | null;
  Rakennusmaa: number | null;
  Rakennuspaikka: string | null;
  omistajuustyyppi: number;
  asiakkaan_kuntatieto: string | null;
  aluksen_satamapaikka: string;
  Kantavuus: number | null;
  JaaluokkaKoodi: string | null;
  Nettovetoisuus: number;
  Bruttovetoisuus: number;
  Pituus: number;
  Suurinpituus: number | null;
  Mallisyvays: number;
  Mallikorkeus: number;
  Leveys: number;
}
