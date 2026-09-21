/* ========================================
   SATTVA INDIA - Product Catalog Data
   Complete inventory of 65 products
   ======================================== */

const catalogData = [
  // 1. LISTING OF MASALE (20 Items)
  { id: 1, name: "Laal Mirchi Powder", cat: "masale", color: "#991B1B", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "High Pungency" },
  { id: 2, name: "Kashmiri Mirchi Powder", cat: "masale", color: "#B91C1B", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Vibrant Red" },
  { id: 3, name: "Halad", cat: "masale", color: "#D97706", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "High Curcumin" },
  { id: 4, name: "Dhana", cat: "masale", color: "#854D0E", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Aromatic Pure" },
  { id: 5, name: "Kanda Lasun Masala", cat: "masale", color: "#7F1D1D", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "MH Signature" },
  { id: 6, name: "Garam Masala", cat: "masale", color: "#451A03", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Royal Blend" },
  { id: 7, name: "Goda Masala", cat: "masale", color: "#292524", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Authentic Sweet Spice" },
  { id: 8, name: "Mutton Masala", cat: "masale", color: "#78350F", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Bold & Spicy" },
  { id: 9, name: "Chicken Masala", cat: "masale", color: "#9A3412", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Rich Gravy" },
  { id: 10, name: "Pav Bhaji Masala", cat: "masale", color: "#C2410C", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "HoReCa Grade" },
  { id: 11, name: "Sambar Masala", cat: "masale", color: "#B45309", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "South Classic" },
  { id: 12, name: "Kitchen King Masala", cat: "masale", color: "#A16207", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "All-Round Curry" },
  { id: 13, name: "Chole Masala", cat: "masale", color: "#92400E", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Tangy & Robust" },
  { id: 14, name: "Chat Masala", cat: "masale", color: "#CA8A04", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Zesty Zing" },
  { id: 15, name: "Biryani Masala", cat: "masale", color: "#B45309", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Dum Aroma" },
  { id: 16, name: "Sunday Garam Masala", cat: "masale", color: "#581C87", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Chef's Special" },
  { id: 17, name: "Tandoori Masala", cat: "masale", color: "#DC2626", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Smoky Red" },
  { id: 18, name: "Fish Curry Masala", cat: "masale", color: "#EA580C", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Coastal Profile" },
  { id: 19, name: "Amchur Powder", cat: "masale", color: "#D97706", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Natural Sour" },
  { id: 20, name: "Egg Curry Masala", cat: "masale", color: "#C2410C", packUnits: ["500g Pouch", "1kg Bag", "25kg Sack"], tag: "Savory Blend" },

  // 2. LISTING OF SAUCES (5 Items)
  { id: 21, name: "Red Chillie Sauce", cat: "sauces", color: "#EF4444", packUnits: ["650g Bottle", "5kg Commercial Jar"], tag: "Culinary" },
  { id: 22, name: "Green Chillie Sauce", cat: "sauces", color: "#22C55E", packUnits: ["650g Bottle", "5kg Commercial Jar"], tag: "Sharp Pungent" },
  { id: 23, name: "Tomato Sauce", cat: "sauces", color: "#E11D48", packUnits: ["1kg Pouch", "5kg Commercial Jar"], tag: "Puree Thick" },
  { id: 24, name: "Soya Sauce", cat: "sauces", color: "#27272A", packUnits: ["650g Bottle", "5kg Commercial Jar"], tag: "Naturally Brewed" },
  { id: 25, name: "Dark Soya Sauce", cat: "sauces", color: "#09090B", packUnits: ["650g Bottle", "5kg Commercial Jar"], tag: "Caramelized" },

  // 3. LISTING OF PAPAD & PICKLE (8 Items)
  { id: 26, name: "Bobby", cat: "papad-pickle", color: "#F59E0B", packUnits: ["Bulk Master Box", "5kg Sack"], tag: "Crispy Fryum" },
  { id: 27, name: "Udid Papad", cat: "papad-pickle", color: "#E5E7EB", packUnits: ["1kg Pack", "5kg Catering Pack"], tag: "Crispy Pepper" },
  { id: 28, name: "Jeera Papad", cat: "papad-pickle", color: "#D1D5DB", packUnits: ["1kg Pack", "5kg Catering Pack"], tag: "Cumin Infused" },
  { id: 29, name: "Nachni Papad", cat: "papad-pickle", color: "#78350F", packUnits: ["1kg Pack", "5kg Catering Pack"], tag: "Healthy Millet" },
  { id: 30, name: "Rice Papad", cat: "papad-pickle", color: "#F3F4F6", packUnits: ["1kg Pack", "5kg Catering Pack"], tag: "Traditional White" },
  { id: 31, name: "Mango Pickle", cat: "papad-pickle", color: "#D97706", packUnits: ["1kg Jar", "5kg Bucket", "15kg Commercial Drum"], tag: "Mustard Oil" },
  { id: 32, name: "Mix Pickle", cat: "papad-pickle", color: "#B45309", packUnits: ["1kg Jar", "5kg Bucket", "15kg Commercial Drum"], tag: "HoReCa Bucket" },
  { id: 33, name: "Mirchi Pickle", cat: "papad-pickle", color: "#15803D", packUnits: ["1kg Jar", "5kg Bucket", "15kg Commercial Drum"], tag: "Spicy Green" },

  // 4. LISTING OF WHOLE SPICES & DRY FRUITS (24 Items)
  { id: 34, name: "Lavang", cat: "whole", color: "#2E1065", packUnits: ["1kg Pouch", "5kg Bag", "25kg Box"], tag: "High Essential Oils" },
  { id: 35, name: "Kaali Meeri", cat: "whole", color: "#1C1917", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "Tellicherry Bold" },
  { id: 36, name: "Dalchini", cat: "whole", color: "#78350F", packUnits: ["1kg Pouch", "5kg Bag", "25kg Box"], tag: "Sweet Woody" },
  { id: 37, name: "Star Phool", cat: "whole", color: "#92400E", packUnits: ["1kg Pouch", "5kg Bag", "25kg Box"], tag: "Intact Stars" },
  { id: 38, name: "Dagad Phool", cat: "whole", color: "#57534E", packUnits: ["500g Bag", "1kg Bag", "10kg Box"], tag: "Stone Flower" },
  { id: 39, name: "Tej patta", cat: "whole", color: "#4D7C0F", packUnits: ["500g Bag", "5kg Bag", "10kg Bale"], tag: "Cleaned Leaf" },
  { id: 40, name: "Green Elaichi", cat: "whole", color: "#15803D", packUnits: ["500g Pouch", "1kg Pouch", "5kg Box"], tag: "7-8mm Green" },
  { id: 41, name: "Masala Elaichi", cat: "whole", color: "#3F2E23", packUnits: ["500g Pouch", "1kg Pouch", "10kg Box"], tag: "Smoky Black" },
  { id: 42, name: "Aakha Dhana", cat: "whole", color: "#A16207", packUnits: ["5kg Bag", "25kg Sack", "50kg Sack"], tag: "Whole Coriander" },
  { id: 43, name: "Meethi Dana", cat: "whole", color: "#CA8A04", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "Machine Cleaned" },
  { id: 44, name: "Ajwain", cat: "whole", color: "#854D0E", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "High Thymol" },
  { id: 45, name: "Jeer", cat: "whole", color: "#713F12", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack", "50kg Sack"], tag: "Unjha Cumin" },
  { id: 46, name: "Rai", cat: "whole", color: "#000000", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack", "50kg Sack"], tag: "Mustard Seeds" },
  { id: 47, name: "Green Badi Saunf", cat: "whole", color: "#65A30D", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "Sweet Fennel" },
  { id: 48, name: "Tanatan Badi Saunf", cat: "whole", color: "#4D7C0F", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "Premium Bold" },
  { id: 49, name: "Sesame seeds (Til)", cat: "whole", color: "#F4F4F5", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "White / Natural" },
  { id: 50, name: "Kishmish", cat: "whole", color: "#EAB308", packUnits: ["1kg Pouch", "5kg Box", "10kg Box"], tag: "Nashik Raisins" },
  { id: 51, name: "Kaju Kani", cat: "whole", color: "#FEF08A", packUnits: ["1kg Pouch", "5kg Box", "10kg Box"], tag: "Cashew Bits" },
  { id: 52, name: "Kaju Pakli", cat: "whole", color: "#FEF9C3", packUnits: ["1kg Pouch", "5kg Box", "10kg Box"], tag: "2-Piece Splits" },
  { id: 53, name: "Magazbeej", cat: "whole", color: "#FAFAFA", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "Melon Seeds" },
  { id: 54, name: "Gota Khobra", cat: "whole", color: "#78350F", packUnits: ["Bags / Wholesale Consignment"], tag: "Whole Dry Coconut" },
  { id: 55, name: "Khobra Powder", cat: "whole", color: "#F5F5F4", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "Desiccated Coconut" },
  { id: 56, name: "Byadgi Mirchi", cat: "whole", color: "#DC2626", packUnits: ["5kg Bag", "25kg Bale", "50kg Bale"], tag: "Deep Color / Low Heat" },
  { id: 57, name: "Lavangi Mirchi", cat: "whole", color: "#991B1B", packUnits: ["5kg Bag", "25kg Bale", "50kg Bale"], tag: "High Pungent Heat" },

  // 5. LISTING OF OTHER ITEMS / STAPLES (8 Items)
  { id: 58, name: "Noodles", cat: "staples", color: "#FDE047", packUnits: ["Master Bulk Carton", "Bulk Box"], tag: "Commercial Grade" },
  { id: 59, name: "Shevai", cat: "staples", color: "#FEF08A", packUnits: ["Bulk Bag", "Master Sack"], tag: "Hard Wheat" },
  { id: 60, name: "Cournflour", cat: "staples", color: "#FFFFFF", packUnits: ["1kg Pouch", "5kg Bag", "25kg Sack"], tag: "Thickening Starch" },
  { id: 61, name: "Hing", cat: "staples", color: "#A8A29E", packUnits: ["100g Jar", "500g Jar", "1kg Jar"], tag: "Compounded Asafoetida" },
  { id: 62, name: "Emli", cat: "staples", color: "#451A03", packUnits: ["1kg Slab", "10kg Slab", "25kg Box"], tag: "Seedless Tamarind" },
  { id: 63, name: "Kasuri Meethi", cat: "staples", color: "#166534", packUnits: ["500g Box", "1kg Box", "5kg Bag"], tag: "Nagauri Fragrant" },
  { id: 64, name: "Rice", cat: "staples", color: "#F8FAFC", packUnits: ["25kg Bag", "50kg Bag"], tag: "Commercial / Basmati" },
  { id: 65, name: "Wheel Powder", cat: "staples", color: "#38BDF8", packUnits: ["Institutional Cleaning Sack"], tag: "Kitchen Cleaning Utility" }
];
