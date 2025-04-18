import { Item } from "./modelShoppingList";

const itemId = `item_${Date.now()}_${Math.floor(Math.random() * 100000)}`;

export const availableItems: Item[] = [
  {
    itemId: "item_1",
    itemName: "Pommes",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_2",
    itemName: "Bananes",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_3",
    itemName: "Tomates",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_4",
    itemName: "Carottes",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_5",
    itemName: "Pommes de terre",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_6",
    itemName: "Oignons",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_7",
    itemName: "Ail",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_8",
    itemName: "Avocats",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_9",
    itemName: "Salade verte",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_10",
    itemName: "Courgettes",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },

  {
    itemId: "item_11",
    itemName: "Pain",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
  {
    itemId: "item_12",
    itemName: "Baguette",
    isChecked: false,
    createdAt: "",
    type: "popular",
    quantity: 0
  },
/*  {
    itemId: "item_13",
    itemName: "Pain de mie",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_14",
    itemName: "Viennoiseries",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_15",
    itemName: "Tortillas",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },

  {
    itemId: "item_16",
    itemName: "Lait",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_17",
    itemName: "Beurre",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_18",
    itemName: "Crème fraîche",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_19",
    itemName: "Yaourts nature",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_20",
    itemName: "Lait végétal",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },

  {
    itemId: "item_21",
    itemName: "Pâtes",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_22",
    itemName: "Riz",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_23",
    itemName: "Lentilles",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_24",
    itemName: "Pois chiches",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_25",
    itemName: "Haricots rouges",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_26",
    itemName: "Quinoa",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_27",
    itemName: "Boulgour",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },

  {
    itemId: "item_28",
    itemName: "Huile d’olive",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_29",
    itemName: "Vinaigre balsamique",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_30",
    itemName: "Moutarde",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_31",
    itemName: "Sel",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_32",
    itemName: "Poivre",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_33",
    itemName: "Herbes de Provence",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },

  {
    itemId: "item_34",
    itemName: "Sucre",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_35",
    itemName: "Farine",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_36",
    itemName: "Chocolat",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_37",
    itemName: "Confiture",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_38",
    itemName: "Sirop d’érable",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },

  {
    itemId: "item_39",
    itemName: "Sauce tomate",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_40",
    itemName: "Maïs en conserve",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_41",
    itemName: "Thon en boîte",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_42",
    itemName: "Haricots verts en conserve",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_43",
    itemName: "Ratatouille",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },

  {
    itemId: "item_44",
    itemName: "Papier toilette",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_45",
    itemName: "Sopalin",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_46",
    itemName: "Liquide vaisselle",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_47",
    itemName: "Lessive",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_48",
    itemName: "Éponges",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  {
    itemId: "item_49",
    itemName: "Sac poubelle",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },

  {
    itemId: "item_50",
    itemName: "Tofu",
    isChecked: false,
    createdAt: "",
    type: "popular",
  },
  */
];
