import Alpine from "alpinejs";
import "./style.css";

Alpine.store("contact", {
	phone: "+7 (913) 606-79-06",
	telegram: "https://t.me/studrabot5",
	vk: "https://vk.ru/studrabot5",
	whatsapp: "whatsapp://send?phone=79136067906&text=",
	instagram: "https://instagram.com/studrabot/",
	email: "maria@studrabot.ru",
});

Alpine.start();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').substring(1);
		if (!targetId) return;

		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const headerOffset = 90; // Высота шапки + небольшой запас
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	});
});
