import Alpine from "alpinejs";
import "./style.css";

Alpine.store("contact", {
	phone: "+7 (999) 999-99-99",
	telegram: "https://t.me/studrabot",
	whatsapp: "https://wa.me/79999999999",
	email: "maria@studrabot.ru",
});

Alpine.start();
