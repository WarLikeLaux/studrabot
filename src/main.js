import "./style.css";

const CONTACTS = {
	telegram: "https://t.me/studrabot5",
	vk: "https://vk.ru/studrabot5",
	whatsapp: "whatsapp://send?phone=79136067906&text=",
	instagram: "https://instagram.com/studrabot/",
};

document.querySelectorAll("[data-href]").forEach((el) => {
	const key = el.dataset.href;
	if (CONTACTS[key]) el.href = CONTACTS[key];
});

const header = document.getElementById("site-header");
let ticking = false;
window.addEventListener("scroll", () => {
	if (!ticking) {
		requestAnimationFrame(() => {
			header.classList.toggle("header-scrolled", window.pageYOffset > 50);
			ticking = false;
		});
		ticking = true;
	}
});

document.querySelectorAll("[data-faq]").forEach((btn) => {
	btn.addEventListener("click", () => {
		const card = btn.closest("[data-faq-item]");
		const content = card.querySelector("[data-faq-content]");
		const icon = btn.querySelector("[data-faq-icon]");
		const isOpen = content.classList.contains("faq-open");

		if (isOpen) {
			content.style.height = content.scrollHeight + "px";
			requestAnimationFrame(() => {
				content.style.height = "0";
			});
			content.classList.remove("faq-open");
			icon.classList.remove("rotate-180");
		} else {
			document.querySelectorAll("[data-faq-content].faq-open").forEach((openContent) => {
				if (openContent !== content) {
					openContent.style.height = openContent.scrollHeight + "px";
					requestAnimationFrame(() => {
						openContent.style.height = "0";
					});
					openContent.classList.remove("faq-open");
					const openIcon = openContent.closest("[data-faq-item]").querySelector("[data-faq-icon]");
					if (openIcon) openIcon.classList.remove("rotate-180");
				}
			});

			content.style.height = content.scrollHeight + "px";
			content.addEventListener(
				"transitionend",
				() => {
					if (content.classList.contains("faq-open")) {
						content.style.height = "auto";
					}
				},
				{ once: true },
			);
			content.classList.add("faq-open");
			icon.classList.add("rotate-180");
		}
	});
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href").substring(1);
		if (!targetId) return;

		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			const headerOffset = 90;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	});
});
