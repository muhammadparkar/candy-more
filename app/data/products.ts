/**
 * Resolve a product `photo` / `additionalPhotos` entry to a real src.
 * Local files start with "/" and are returned as-is; everything else is
 * treated as an Unsplash photo id.
 */
export function imgSrc(photo: string, w = 640, h = 480): string {
  if (photo.startsWith("/")) return photo;
  return `https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: "chocolates" | "flowers" | "plants" | "gift-boxes" | "hampers";
  price: number;
  originalPrice?: number;
  badge?: "Bestseller" | "New" | "Staff Pick" | "Limited Edition" | "Award Winner" | null;
  rating: number;
  reviewsCount: number;
  photo: string;
  /** How the card image should fit its box. Default "contain" (show whole image). */
  imageFit?: "cover" | "contain";
  additionalPhotos?: string[];
  description: string;
  details: string[];
  notes: string;
  dietaryOrType: string[];
  delivery: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "red-rose-heart-stand-bouquet",
    name: "Red Rose Heart Shaped Stand Bouquet",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/IMG_2108.JPG",
    description: "A statement declaration of love: dozens of long-stemmed red roses hand-built into a full heart form on a self-standing stem base, collared with fresh foliage and finished with a signature Candy More Flowers ribbon.",
    details: [
      "Heart-form arrangement of premium long-stem red roses",
      "Self-supporting bound-stem base — no vase needed",
      "Fresh salal collar and signature branded satin ribbon",
      "Ideal for anniversaries, proposals and Valentine's Day"
    ],
    notes: "Rose count and stand height scaled to your budget — request a quote for options.",
    dietaryOrType: ["Fresh", "Gift-Ready", "Statement Piece"],
    delivery: "Same-day delivery available"
  },
  {
    id: "elegant-indoor-plant-gift",
    name: "Elegant Indoor Plant Gift",
    category: "Plants",
    categorySlug: "plants",
    price: 0,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/IMG_2109.JPG",
    description: "A lush peace lily in full bloom, gift-wrapped in blush tissue and satin ribbon with a black foil gift tag. A living gift that keeps giving long after cut flowers fade.",
    details: [
      "Healthy potted peace lily (Spathiphyllum) in bloom",
      "Air-purifying, low-light tolerant, easy to care for",
      "Blush gift wrap, satin bow and foil-stamped tag",
      "Care card included"
    ],
    notes: "Plant size and decorative pot options available on request.",
    dietaryOrType: ["Live Plant", "Air-Purifying", "Long-Lasting"],
    delivery: "Same-day delivery available"
  },
  {
    id: "luxury-mixed-bouquet",
    name: "Luxury Mixed Bouquet",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 0,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/IMG_2110.JPG",
    description: "An abundant hand-tied bouquet of red and pink roses, pink lilies, carnations, gypsophila and eucalyptus, wrapped in dusty-rose paper with a satin ribbon and gift tag.",
    details: [
      "Red & pink roses, Oriental lilies, carnations",
      "Gypsophila, limonium and fresh eucalyptus",
      "Premium dusty-rose wrap with satin ribbon and tag",
      "Presented in a water-filled gift bag"
    ],
    notes: "Available in three sizes — request a quote to compare.",
    dietaryOrType: ["Fresh", "Fragrant", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "floral-indulgence",
    name: "Floral Indulgence — Flowers plus Chocolates",
    category: "Chocolates + Flowers",
    categorySlug: "gift-boxes",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/IMG_2125.JPG",
    imageFit: "cover",
    description: "A pastel spring arrangement of ranunculus, roses, hydrangea and lilies paired with a keepsake box of assorted hand-decorated truffles and pralines.",
    details: [
      "Seasonal pastel arrangement — ranunculus, roses, hydrangea, lilies",
      "Keepsake box of ~25 assorted truffles and pralines",
      "Gold foil-embossed 'Floral Indulgence' lid",
      "Presented on a wooden serving tray"
    ],
    notes: "Chocolate box size and flower palette customizable on request.",
    dietaryOrType: ["Fresh", "Contains Dairy", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "scented-surprises",
    name: "Scented Surprises",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 0,
    badge: "Bestseller",
    rating: 4.8,
    reviewsCount: 0,
    photo: "/images/IMG_2126.JPG",
    imageFit: "cover",
    description: "An all-white fragrant bouquet of gardenia, jasmine, freesia and Oriental lilies in a glass vase tied with an ivory ribbon — built to perfume a whole room.",
    details: [
      "Gardenia, jasmine, freesia and white Oriental lilies",
      "Arranged in a clear glass gift vase",
      "Ivory satin ribbon finish",
      "Highly fragrant — a scent-led arrangement"
    ],
    notes: "Seasonal fragrant stems vary; request a quote for current selection.",
    dietaryOrType: ["Fresh", "Highly Fragrant", "Vase Included"],
    delivery: "Same-day delivery available"
  },
  {
    id: "high-end-modern-tablescape",
    name: "High End Modern Tablescape Arrangement",
    category: "Home Decors & Special Events",
    categorySlug: "hampers",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/IMG_2127.JPG",
    description: "A low, elongated luxury centerpiece of hydrangea, Oriental lilies, roses, stock and trailing eucalyptus, styled to run the length of a coffee or dining table for events and premium home styling.",
    details: [
      "Elongated low centerpiece — hydrangea, lilies, roses, stock",
      "Trailing eucalyptus and seasonal greenery",
      "Styled for dining / coffee tables and event settings",
      "On-site styling and multiples available for events"
    ],
    notes: "Priced per running length and stem grade — request an event quote.",
    dietaryOrType: ["Fresh", "Event Styling", "Made to Order"],
    delivery: "Delivery & setup by arrangement"
  },
  {
    id: "heart-rose-tablescape",
    name: "Romance Heart Rose Tablescape",
    category: "Home Decors & Special Events",
    categorySlug: "hampers",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/heart-rose-tablescape.jpg",
    description: "A statement red and pink rose heart display paired with a matching table runner of rose, lily and eucalyptus arrangements, chocolate favors, and candles — designed for occasions of romance.",
    details: [
      "Large red & pink rose heart-shaped centerpiece on branded stand",
      "Coordinating table-runner arrangements of roses, lilies, eucalyptus and gypsophila",
      "Individual chocolate favors and votive candles included",
      "Full event set-up and styling on request"
    ],
    notes: "Best for romantic occasions — Valentine's Day, anniversaries, proposals, engagements.",
    dietaryOrType: ["Event Styling", "Made to Order", "Romantic Occasions"],
    delivery: "Delivery & setup by arrangement"
  },
  {
    id: "graduation-floral-backdrop",
    name: "Graduation Floral Backdrop & Dessert Table",
    category: "Home Decors & Special Events",
    categorySlug: "hampers",
    price: 0,
    badge: "New",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/graduation-floral-backdrop.jpg",
    description: "A custom lettered arch backdrop dressed with blush roses, hydrangea and trailing greenery, styled alongside a matching macaron and cake dessert table for graduations and celebrations.",
    details: [
      "Custom calligraphy backdrop panel with rose & hydrangea florals",
      "Matching tiered cake with sugar-flower detailing",
      "Macaron and chocolate dessert display styling",
      "Fairy-light backdrop staging available"
    ],
    notes: "Popular for graduations, birthdays, baby showers and gender reveals.",
    dietaryOrType: ["Event Styling", "Made to Order", "Celebrations"],
    delivery: "Delivery & setup by arrangement"
  },
  {
    id: "wedding-gold-arch",
    name: "Grand Wedding Gold & Blush Arch Styling",
    category: "Home Decors & Special Events",
    categorySlug: "hampers",
    price: 0,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/wedding-gold-arch.jpg",
    description: "Full ballroom wedding decor package — a floral gold-frame arch, aisle and stage florals, chair-back rose clusters and candlelit table centerpieces in blush, ivory and gold.",
    details: [
      "Statement floral gold-frame arch for stage or altar",
      "Chair-back rose & hydrangea clusters throughout venue",
      "Gold vase table centerpieces with candle styling",
      "Full-venue floral and candle installation team"
    ],
    notes: "Best for weddings, nikah ceremonies, engagement parties and bridal events.",
    dietaryOrType: ["Event Styling", "Made to Order", "Weddings & Engagements"],
    delivery: "Delivery & setup by arrangement"
  },
  {
    id: "eid-majlis-arrangement",
    name: "Eid Mubarak Majlis Arrangement",
    category: "Home Decors & Special Events",
    categorySlug: "hampers",
    price: 0,
    badge: "New",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/eid-majlis-arrangement.jpg",
    description: "White lily, rose and hydrangea arrangements in gold vases styled alongside brass lanterns, dates and Eid Mubarak decor for a warm, festive majlis setting.",
    details: [
      "White lily, rose and hydrangea vase arrangements",
      "Gold lantern and candle styling to match",
      "Dates and majlis tray styling available",
      "Eid Mubarak backdrop decor on request"
    ],
    notes: "Popular for Ramadan, Eid, National Day and other seasonal festive occasions.",
    dietaryOrType: ["Event Styling", "Made to Order", "Festive & Seasonal"],
    delivery: "Delivery & setup by arrangement"
  },
  {
    id: "chocolate-strawberries-box",
    name: "Chocolate-Covered Strawberries Box",
    category: "Artisan Chocolates",
    categorySlug: "chocolates",
    price: 45,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/chocolate-strawberries-box.jpg",
    description: "A dozen fresh strawberries hand-dipped in dark, milk and white chocolate with gold leaf, pistachio and drizzle detailing, presented in a signature wooden gift box with ribbon.",
    details: [
      "12 fresh strawberries dipped in dark, milk & white chocolate",
      "Gold leaf, pistachio and hand-piped drizzle finishes",
      "Signature dark wooden gift box with pink pull ribbon",
      "Candy & More gift card included"
    ],
    notes: "Best for romance and special occasions — Valentine's Day and anniversaries.",
    dietaryOrType: ["Vegetarian", "Gift-Ready", "Romantic Occasions"],
    delivery: "Same-day delivery available"
  },
  {
    id: "amores-doro-hazelnut-rocher",
    name: "Amores d'Oro Hazelnut Rocher Collection",
    category: "Chocolates",
    categorySlug: "chocolates",
    price: 55,
    badge: "Award Winner",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/amores-doro-hazelnut-rocher.jpg",
    description: "A premium round velvet gift box of hazelnut Rocher-style pralines and hand-finished truffles topped with roasted hazelnuts, finished with a signature pink satin bow and 'To My Love' card.",
    details: [
      "16-piece premium hazelnut praline & truffle collection",
      "Roasted hazelnut and CM-branded chocolate finishes",
      "Velvet round gift box with satin bow and charm",
      "Handwritten 'To My Love' greeting card included"
    ],
    notes: "Best for romantic + premium gifting occasions.",
    dietaryOrType: ["Vegetarian", "Gift-Ready", "Romantic Occasions"],
    delivery: "Same-day delivery available"
  },
  {
    id: "everyday-birthday-truffle-box",
    name: "Everyday Birthdays Assorted Truffle Box",
    category: "Chocolates",
    categorySlug: "chocolates",
    price: 40,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/everyday-birthday-truffle-box.jpg",
    description: "A cream and pink gift box of 25 assorted hand-decorated milk and dark chocolate truffles and pralines, wrapped with a bold pink satin bow for everyday celebrations.",
    details: [
      "25-piece assorted milk & dark chocolate truffle box",
      "Hand-painted and textured chocolate shell designs",
      "Cream gift box with pink satin ribbon and gift tag",
      "'Everyday Birthdays' branded tag included"
    ],
    notes: "Best for everyday celebrations and birthdays.",
    dietaryOrType: ["Vegetarian", "Gift-Ready", "Celebrations"],
    delivery: "Same-day delivery available"
  },
  {
    id: "corporate-gratitude-truffle-box",
    name: "Corporate Gratitude Truffle Box",
    category: "Chocolates",
    categorySlug: "chocolates",
    price: 65,
    badge: "Staff Pick",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/corporate-gratitude-truffle-box.jpg",
    description: "A luxury walnut gift box of 20 gold and bronze hand-painted truffles with a customizable 'Sweet Thanks' corporate card — a premium way to thank clients and partners.",
    details: [
      "20-piece gold & bronze hand-painted truffle collection",
      "Solid walnut wood gift box with satin ribbon",
      "Customizable corporate 'Sweet Thanks' insert card",
      "Bulk / corporate order pricing available"
    ],
    notes: "Best for corporate gifting and partnership appreciation.",
    dietaryOrType: ["Vegetarian", "Gift-Ready", "Corporate Gifting"],
    delivery: "Same-day delivery available"
  },
  {
    id: "rose-box-with-truffle-drawer",
    name: "Rose Box with Truffle Drawer",
    category: "Chocolates + Roses",
    categorySlug: "gift-boxes",
    price: 70,
    badge: "Limited Edition",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/rose-box-with-truffle-drawer.jpg",
    description: "A round hat-box of pastel pink, lilac and peach roses and tulips sitting atop a pull-out drawer of 15 assorted truffles finished with edible glitter and dried petals.",
    details: [
      "Round bouquet box of pastel roses and tulips",
      "Pull-out drawer with 15 assorted decorated truffles",
      "Satin ribbon bow and branded gift tag",
      "Combined flower + chocolate presentation"
    ],
    notes: "Best for romantic occasions and milestone celebrations.",
    dietaryOrType: ["Fresh", "Vegetarian", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "midnight-praline-cacao-box",
    name: "Midnight Praline Cacao Box",
    category: "Chocolates",
    categorySlug: "chocolates",
    price: 38,
    badge: "New",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/midnight-praline-cacao-box.jpg",
    description: "A wooden keepsake box of 15 dark and milk chocolate pralines with a rose-and-tulip illustrated lid, paired with a single peach garden rose and eucalyptus sprig.",
    details: [
      "15-piece dark & milk chocolate praline collection",
      "Wooden hinged gift box with illustrated floral lid",
      "'Midnight Praline Cacao' branded gift tag",
      "Presented with a fresh garden rose accent"
    ],
    notes: "Premium gift box — best for milestone and luxury occasions.",
    dietaryOrType: ["Vegetarian", "Gift-Ready", "Premium"],
    delivery: "Same-day delivery available"
  },
  {
    id: "tulip-bridal-bouquet",
    name: "Peach & Ivory Tulip Bridal Bouquet",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 48,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/tulip-bridal-bouquet.jpg",
    description: "An elegant hand-tied bouquet of peach, ivory and blush tulips with astilbe and eucalyptus, wrapped in ivory ribbon — a popular choice for elegant and premium arrangements.",
    details: [
      "Premium peach, ivory & blush double tulips",
      "Astilbe and eucalyptus filler stems",
      "Hand-wrapped ivory satin ribbon binding",
      "Ideal for bridal parties and weddings"
    ],
    notes: "Tulips are popular for elegant, premium bouquets and bridal styling.",
    dietaryOrType: ["Fresh", "Fragrant", "Weddings & Engagements"],
    delivery: "Same-day delivery available"
  },
  {
    id: "luxury-orchid-arrangement",
    name: "Luxury Phalaenopsis Orchid Arrangement",
    category: "Plants",
    categorySlug: "plants",
    price: 95,
    badge: "Award Winner",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/luxury-orchid-arrangement.jpg",
    description: "Multiple white and pink phalaenopsis orchid stems potted in a glazed ceramic bowl, finished with moss, raffia ties and a red satin ribbon — a favorite for luxury and corporate gifting.",
    details: [
      "Multi-stem white & pink phalaenopsis orchids",
      "Glazed ceramic decorative bowl planter",
      "Natural moss topping with raffia stem ties",
      "Red satin ribbon and 'Luxury Gift' tag"
    ],
    notes: "Orchids are particularly popular for luxury and corporate gifting.",
    dietaryOrType: ["Live Plant", "Long-Lasting", "Corporate Gifting"],
    delivery: "Same-day delivery available"
  },
  {
    id: "sunflower-vase-arrangement",
    name: "Sunflower & Wildflower Vase Arrangement",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 44,
    badge: "New",
    rating: 4.8,
    reviewsCount: 0,
    photo: "/images/sunflower-vase-arrangement.jpg",
    description: "A bright, casual arrangement of sunflowers, billy balls and Queen Anne's lace with eucalyptus, hand-tied and delivered in a glass vase with a red ribbon.",
    details: [
      "Fresh cut sunflowers with billy ball and lace filler",
      "Eucalyptus and mixed seasonal greenery",
      "Presented in a clear glass gift vase with water",
      "Signature red ribbon and gift tag"
    ],
    notes: "Sunflowers are increasingly popular for bright, casual gifting.",
    dietaryOrType: ["Fresh", "Vase Included", "Same-Day"],
    delivery: "Same-day delivery available"
  },
  {
    id: "red-white-pink-rose-bouquet",
    name: "Classic Red, White & Pink Rose Bouquet",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 50,
    badge: "Bestseller",
    rating: 5.0,
    reviewsCount: 0,
    photo: "/images/red-white-pink-rose-bouquet.jpg",
    description: "A generous hand-tied bouquet of red, white and pink roses with gypsophila and eucalyptus, wrapped in layered kraft and blush paper with a bold red satin bow — our strongest-selling bouquet.",
    details: [
      "Mixed red, white and pink premium roses",
      "Gypsophila and fresh eucalyptus foliage",
      "Layered kraft and dusty-rose paper wrap",
      "Red satin ribbon with 'Bestseller' gift tag"
    ],
    notes: "Roses — especially red, white and pink — are clearly our strongest seller.",
    dietaryOrType: ["Fresh", "Fragrant", "Gift-Ready"],
    delivery: "Same-day delivery available"
  },
  {
    id: "pink-lily-vase-arrangement",
    name: "Stargazer Lily Luxury Vase Arrangement",
    category: "Fresh Flowers",
    categorySlug: "flowers",
    price: 58,
    badge: "Staff Pick",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/pink-lily-vase-arrangement.jpg",
    description: "Pink and white stargazer lilies with astilbe and eucalyptus, arranged in a marbled ceramic luxury vase and finished with a red satin ribbon — frequently chosen for luxury, birthday and sympathy gifting.",
    details: [
      "Pink & white stargazer lily stems",
      "Astilbe and eucalyptus filler foliage",
      "Marbled ceramic luxury collection vase",
      "Red satin ribbon and gift tag"
    ],
    notes: "Lilies are frequently used for luxury, birthday, wedding and sympathy arrangements.",
    dietaryOrType: ["Fresh", "Fragrant", "Includes Vase"],
    delivery: "Same-day delivery available"
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    category: "Plants",
    categorySlug: "plants",
    price: 55,
    badge: null,
    rating: 4.8,
    reviewsCount: 0,
    photo: "/images/areca-palm.jpg",
    description: "A full, feathery areca palm in a rustic stoneware pot with a red satin ribbon — a popular choice for larger living rooms, offices and majlis spaces.",
    details: [
      "Mature areca palm with lush feathery fronds",
      "Rustic large stoneware planter pot",
      "Red satin ribbon and branded gift tag",
      "Ideal for large rooms and majlis seating areas"
    ],
    notes: "Best for larger living rooms, offices and majlis spaces.",
    dietaryOrType: ["Live Plant", "Air-Purifying", "Low Maintenance"],
    delivery: "Same-day delivery available"
  },
  {
    id: "money-plant-pothos",
    name: "Money Plant (Pothos)",
    category: "Plants",
    categorySlug: "plants",
    price: 22,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/money-plant-pothos.jpg",
    description: "A trailing golden pothos in a speckled ceramic pot with a red satin bow — affordable, fast-growing, and a popular choice for homes and offices.",
    details: [
      "Trailing variegated golden pothos",
      "Speckled stoneware ceramic pot",
      "Red satin ribbon with 'Money Plant' gift tag",
      "Great for shelves, desks and hanging displays"
    ],
    notes: "Affordable, fast-growing and popular for homes and offices.",
    dietaryOrType: ["Live Plant", "Low Maintenance", "Easy Care"],
    delivery: "Same-day delivery available"
  },
  {
    id: "rubber-plant",
    name: "Rubber Plant (Ficus Elastica)",
    category: "Plants",
    categorySlug: "plants",
    price: 48,
    badge: null,
    rating: 4.8,
    reviewsCount: 0,
    photo: "/images/rubber-plant.jpg",
    description: "A glossy-leafed rubber plant in a clean white ceramic pot with jute twine tie — a striking, low-maintenance statement plant for any home or office corner.",
    details: [
      "Glossy dark-green rubber plant (Ficus elastica)",
      "Clean white ceramic pot with jute twine detail",
      "Candy & More branded gift tag",
      "Tolerates a range of indoor light conditions"
    ],
    notes: "Attractive glossy foliage with strong indoor adaptability.",
    dietaryOrType: ["Live Plant", "Low Maintenance", "Air-Purifying"],
    delivery: "Same-day delivery available"
  },
  {
    id: "snake-plant",
    name: "Snake Plant (Sansevieria)",
    category: "Plants",
    categorySlug: "plants",
    price: 30,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/snake-plant.jpg",
    description: "A structural snake plant in a textured stoneware pot with a red satin ribbon — very popular because it handles low light, AC rooms, and infrequent watering.",
    details: [
      "Upright variegated Sansevieria (snake plant)",
      "Textured ribbed stoneware planter",
      "Red satin ribbon and 'Snake Plant' gift tag",
      "Thrives in low light and AC-conditioned rooms"
    ],
    notes: "Handles low light, AC rooms and infrequent watering exceptionally well.",
    dietaryOrType: ["Live Plant", "Easy Care", "Low Light Tolerant"],
    delivery: "Same-day delivery available"
  },
  {
    id: "aglaonema-plant",
    name: "Aglaonema (Chinese Evergreen)",
    category: "Plants",
    categorySlug: "plants",
    price: 40,
    badge: "New",
    rating: 4.8,
    reviewsCount: 0,
    photo: "/images/aglaonema-plant.jpg",
    description: "A vivid pink and green aglaonema in a clean white pot — attractive variegated foliage with excellent indoor adaptability.",
    details: [
      "Pink & green variegated Aglaonema foliage",
      "White ceramic pot with woven twine tie",
      "Candy & More branded gift charm",
      "Compact size, ideal for desks and side tables"
    ],
    notes: "Attractive foliage with green/red varieties and good indoor adaptability.",
    dietaryOrType: ["Live Plant", "Low Maintenance", "Colorful Foliage"],
    delivery: "Same-day delivery available"
  },
  {
    id: "zz-plant",
    name: "ZZ Plant (Zamioculcas)",
    category: "Plants",
    categorySlug: "plants",
    price: 42,
    badge: null,
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/zz-plant.jpg",
    description: "A premium-looking ZZ plant with glossy waxy leaves in a stoneware pot with red ribbon — extremely low maintenance and ideal for busy households.",
    details: [
      "Glossy waxy-leafed Zamioculcas zamiifolia",
      "Stoneware ceramic pot with red satin ribbon",
      "'ZZ Plant — Premium & Low Maintenance' gift tag",
      "Tolerates low light and infrequent watering"
    ],
    notes: "Premium-looking and extremely low maintenance.",
    dietaryOrType: ["Live Plant", "Low Maintenance", "Premium"],
    delivery: "Same-day delivery available"
  },
  {
    id: "peace-lily-plant",
    name: "Peace Lily (Spathiphyllum)",
    category: "Plants",
    categorySlug: "plants",
    price: 35,
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 0,
    photo: "/images/peace-lily-plant.jpg",
    description: "A blooming peace lily in a speckled stoneware pot with a red satin ribbon — popular for its elegant white flowers and clean indoor appearance.",
    details: [
      "Blooming Spathiphyllum with white flower spathes",
      "Speckled stoneware pot with red ribbon",
      "'Peace Lily — Elegant & Air-Purifying' gift tag",
      "Air-purifying and low-light tolerant"
    ],
    notes: "Popular for its elegant white flowers and indoor appearance.",
    dietaryOrType: ["Live Plant", "Air-Purifying", "Low Light Tolerant"],
    delivery: "Same-day delivery available"
  }
];
