const cat = {
    name: 'Том',
    meow: function () {
        console.log('Мяу-мяу');
    },
};

cat.meow();
// Мяу-мяу


const categoriesConfig = {
    soup:        { title: "Выберите суп", className: "soups", label: "Суп", empty: "Блюдо не выбрано", input: "soup"},
    starter:     { title: "Выберите стартер/салат", className: "starters", label:"Стартер/салат", empty: "Блюдо не выбрано", input: "starter"},
    main_course: { title: "Выберите главное блюдо", className: "maincourses", label: "Главное блюдо", empty: "Блюдо не выбрано", input: "maincourse" },
    dessert:       { title: "Выберите десерт", className: "desserts", label: "Десерт", empty: "Десерт не выбран", input: "dessert" },
    drink:       { title: "Выберите напиток", className: "drinks", label: "Напиток", empty: "Напиток не выбран", input: "drink" }
};

const kindLabels = {
    small:  "маленькая порция",
    medium: "средняя порция",
    large:  "большая порция",
    meat: "мясное",
    meaty: "мясной",
    fish: "рыбное",
    fishy: "рыбный",
    hot: "горячий",
    cold: "холодный",
    veg: "вегатарианский",
    vegoe: "вегатарианское"
};


const selectedDishes = {};

function renderMenu() {
    const container = document.getElementById("menu-container");
    if (!container) return;
    container.innerHTML = "";

    const sorted = [...menu].sort((a, b) => a.name.localeCompare(b.name, "ru"));

    for (const category in categoriesConfig) {
        const config = categoriesConfig[category];
        const items = sorted.filter(dish => dish.category === category);

        const section = document.createElement("section");
        section.className = config.className;

        const h2 = document.createElement("h2");
        h2.textContent = config.title;
        section.appendChild(h2);

        const foodDiv = document.createElement("div");
        foodDiv.className = "food";

        const kinds = Object.keys(kindLabels).filter(k => items.some(d => d.kind === k));
        if (kinds.length) {
            const filters = document.createElement("div");
            filters.className = "filters";

            kinds.forEach(k => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "filter-btn";
                btn.textContent = kindLabels[k];

                btn.addEventListener("click", () => {
                    const wasActive = btn.classList.contains("active");
                    filters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));

                    let show = null;
                    if (!wasActive) {
                        btn.classList.add("active");
                        show = k;
                    }

                    foodDiv.querySelectorAll(".card").forEach(card => {
                        card.hidden = show !== null && card.dataset.type !== show;
                    });
                });

                filters.appendChild(btn);
            });

            section.appendChild(filters);
        }

        items.forEach(dish => {
            const card = document.createElement("div");
            card.className = "card";
            card.setAttribute("data-dish", dish.keyword);
            card.setAttribute("data-type", dish.kind || "");

            card.innerHTML = `
        <img src="images/${dish.image}.jpg" alt="${dish.name}">
        <p>${dish.price}₽</p>
        <p>${dish.name}</p>
        <p>${dish.count}</p>
        <button type="button" class="add-btn">Добавить</button>
      `;
            foodDiv.appendChild(card);
        });

        section.appendChild(foodDiv);
        container.appendChild(section);
    }

    container.addEventListener("click", event => {
        const btn = event.target.closest(".add-btn");
        if (!btn) return;
        const card = btn.closest(".card");
        const dish = menu.find(d => d.keyword === card.dataset.dish);
        selectedDishes[dish.category] = dish;
        updateOrder();
    });
}

function updateOrder() {
    let total = 0;
    let hasAny = false;

    for (const category in categoriesConfig) {
        const config = categoriesConfig[category];
        const dish = selectedDishes[category];

        const valueEl = document.getElementById(`order-${category}`);
        const inputEl = document.querySelector(`input[name="${config.input}"]`);

        if (dish) {
            valueEl.textContent = `${dish.name} | ${dish.price}₽`;
            inputEl.value = dish.keyword;
            total += dish.price;
            hasAny = true;
        } else {
            valueEl.textContent = config.empty;
            inputEl.value = "";
        }
    }

    document.getElementById("order-total").hidden = !hasAny;
    document.getElementById("total-price").textContent = `${total}₽`;
    document.getElementById("order-empty").hidden = hasAny;
    document.getElementById("order-items").hidden = !hasAny;
  

    document.querySelectorAll(".card").forEach(card => {
        const dish = menu.find(d => d.keyword === card.dataset.dish);
        card.classList.toggle("selected", selectedDishes[dish.category] === dish);
    });
}

//lab6

function getOrderError() {
    const has = c => Boolean(selectedDishes[c]);
    const soup = has("soup");
    const starter = has("starter");
    const main = has("main_course");
    const drink = has("drink");
    const dessert = has("dessert");

    // 1. ничего не выбрано
    if (!soup && !starter && !main && !drink && !dessert) {
        return "Ничего не выбрано. Выберите блюда для заказа";
    }

    // напиток + (главное ИЛИ суп + салат/стартер)
    const mealOk = main || (soup && starter);
    if (mealOk && drink) return null;

    // 2. нет напитка
    if (mealOk && !drink) return "Выберите напиток";

    // 3. суп но нет главного/салата
    if (soup && !main && !starter) {
        return "Выберите главное блюдо/салат/стартер";
    }

    // 4. стартер но нет супа/главного
    if (starter && !soup && !main) {
        return "Выберите суп или главное блюдо";
    }

    // 5. только напиток или десерт
    return "Выберите главное блюдо";
}

function showNotification(text) {
    document.querySelector(".notification-overlay")?.remove();

    const overlay = document.createElement("div");
    overlay.className = "notification-overlay";

    const box = document.createElement("div");
    box.className = "notification";

    const p = document.createElement("p");
    p.textContent = text;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "notification-btn";
    btn.textContent = "Окей 🙄";
    btn.addEventListener("click", () => overlay.remove());

    box.append(p, btn);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", event => {
        const error = getOrderError();
        if (error) {
            event.preventDefault();
            showNotification(error);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    updateOrder();
});