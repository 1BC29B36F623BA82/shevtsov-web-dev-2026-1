const menu = [
    // soup
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 559,
        category: "soup",
        count: "300г.",
        image: "soups/gazpacho",
        kind: "veg"
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп",
        price: 499,
        category: "soup",
        count: "300г.",
        image: "soups/mushroom_soup",
        kind: "veg"
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 699,
        category: "soup",
        count: "305г.",
        image: "soups/norwegian_soup",
        kind: "fishy"
    },
    {
        keyword: "chicken_soup",
        name: "Суп с курицей",
        price: 399,
        category: "soup",
        count: "300г.",
        image: "soups/chicken_soup",
        kind: "meaty"
    },
    {
        keyword: "ramen_soup",
        name: "Рамйон",
        price: 799,
        category: "soup",
        count: "450г.",
        image: "soups/ramen_soup",
        kind: "meaty"
    },
    {
        keyword: "tomyum_soup",
        name: "Томям",
        price: 499,
        category: "soup",
        count: "305г.",
        image: "soups/tomyum_soup",
        kind: "fishy"
    },

    // main
    {
        keyword: "fried_potatoes_with_mushrooms",
        name: "Картошка с грибами",
        price: 799,
        category: "main_course",
        count: "250г.",
        image: "main_course/friedpotatoeswithmushrooms1",
        kind: "vegoe"
    },
    {
        keyword: "chicken_cutlets_mashed_potatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 900,
        category: "main_course",
        count: "300г.",
        image: "main_course/chickencutletsandmashedpotatoes",
        kind: "meat"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 499,
        category: "main_course",
        count: "200г.",
        image: "main_course/lasagna",
        kind: "meat"
    },
    {
        keyword: "fish_with_rice",
        name: "Рыба с рисом",
        price: 479,
        category: "main_course",
        count: "250г.",
        image: "main_course/fishrice",
        kind: "fish"
    },
    {
        keyword: "pizza",
        name: "Пиица",
        price: 989,
        category: "main_course",
        count: "400г.",
        image: "main_course/pizza",
        kind: "meat"
    },
    {
        keyword: "youre_telling_me_a_shrimp_fried_this_PASTA",
        name: "Паста с креветками",
        price: 869,
        category: "main_course",
        count: "210г.",
        image: "main_course/shrimppasta",
        kind: "fish"
    },

    // starter
    {
        keyword: "caesar",
        name: "Салат Цезарь",
        price: 449,
        category: "starter",
        count: "250г.",
        image: "starters/caesar",
        kind: "meaty"
    },
    {
        keyword: "caprese",
        name: "Капрезе",
        price: 429,
        category: "starter",
        count: "220г.",
        image: "starters/caprese",
        kind: 'veg'
    },
    {
        keyword: "frenchfries1",
        name: "Картофель фри",
        price: 199,
        category: "starter",
        count: "150г.",
        image: "starters/frenchfries1",
        kind: 'veg'
    },
    {
        keyword: "frenchfries2",
        name: "Картофель фри с соусом",
        price: 249,
        category: "starter",
        count: "180г.",
        image: "starters/frenchfries2",
        kind: 'veg'
    },
    {
        keyword: "saladwithegg",
        name: "Салат с яйцом",
        price: 379,
        category: "starter",
        count: "230г.",
        image: "starters/saladwithegg",
        kind: "meaty"
    },
    {
        keyword: "tunasalad",
        name: "Салат с тунцом",
        price: 489,
        category: "starter",
        count: "240г.",
        image: "starters/tunasalad",
        kind: "fishy"
    },

    // dessert
    {
        keyword: "baklava",
        name: "Пахлава",
        price: 299,
        category: "dessert",
        count: "120г.",
        image: "desserts/baklava",
        kind: "small"
    },
    {
        keyword: "checheesecake",
        name: "Чизкейк",
        price: 349,
        category: "dessert",
        count: "150г.",
        image: "desserts/checheesecake",
        kind: "medium"
    },
    {
        keyword: "chocolatecake",
        name: "Шоколадный торт",
        price: 399,
        category: "dessert",
        count: "200г.",
        image: "desserts/chocolatecake",
        kind: "large"
    },
    {
        keyword: "chocolatecheesecake",
        name: "Шоколадный чизкейк",
        price: 379,
        category: "dessert",
        count: "170г.",
        image: "desserts/chocolatecheesecake",
        kind: "medium"
    },
    {
        keyword: "donuts6",
        name: "Пончики (6 штук)",
        price: 599,
        category: "dessert",
        count: "300г.",
        image: "desserts/donuts",
        kind: "large"
    },
    {
        keyword: "donuts3",
        name: "Пончики (3 штуки)",
        price: 299,
        category: "dessert",
        count: "140г.",
        image: "desserts/donuts2",
        kind: "medium"
    },

    // drinks
    {
        keyword: "orange_juice",
        name: "Апельсиновый сок",
        price: 400,
        category: "drink",
        count: "400мл.",
        image: "beverages/orangejuice",
        kind: "cold"
    },
    {
        keyword: "apple_juice",
        name: "Яблочный суп", 
        price: 399,
        category: "drink",
        count: "1л.",
        image: "beverages/applejuice",
        kind: "cold"
    },
    {
        keyword: "carrot_juice",
        name: "Морковный сок",
        price: 123,
        category: "drink",
        count: "500мл.",
        image: "beverages/carrotjuice",
        kind: "cold"
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 229,
        category: "drink",
        count: "250мл.",
        image: "beverages/cappuccino",
        kind: "hot"
    },
    {
        keyword: "greentea",
        name: "Зелёный чай",
        price: 119,
        category: "drink",
        count: "300мл.",
        image: "beverages/greentea",
        kind: "hot"
    },
    {
        keyword: "tea",
        name: "Чай",
        price: 109,
        category: "drink",
        count: "300мл.",
        image: "beverages/tea",
        kind: "hot"
    },
];
