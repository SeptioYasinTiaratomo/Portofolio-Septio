let nav = document.getElementById("navbar");
let notLoadAll = document.querySelectorAll(".notload")
let navs = document.getElementById("navs");
let display = false;
let loading = document.getElementById("loading")
let body = document.getElementById("body")
let e = document.getElementById("navbar-toggler");

window.onload = () => {
	setTimeout(function() {
		for (let i = 0; i < notLoadAll.length; i++) {
			if (typeof notLoadAll[i].attributes["notload-delay"] !== "object") {
				notLoadAll[i].classList.remove("notload")
			} else if (typeof notLoadAll[i].attributes["notload-delay"] == "object") {
				setTimeout(() => {
					notLoadAll[i].classList.remove("notload")
				}, 500)
			}
		}
		loading.classList.add("off")
		setTimeout(function() {
			loading.classList.add("transparent")
			setTimeout(function() {
				loading.style.display = "none"
			}, 1000);
		}, 100);
	}, 1000);
}


function toggleNavbar() {
	if (document.documentElement.clientWidth >= 922) return;

	if (display) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		navs.classList.remove("on")
		body.classList.remove("navbaractive")
		display = false;
	} else if (!display) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		navs.classList.add("on")
		body.classList.add("navbaractive")
		display = true;
	}
}

function toggleDmIG() {
	let icon = document.getElementById("showme");
	if (!icon) return;

	icon.classList.add("arrow");
	setTimeout(() => {
		icon.classList.remove("arrow")
	}, 500)
}

/* ===============================
   UNIVERSAL MODAL PROJECT & CERTIFICATE
================================ */
function openModal(img, type = "project") {
	const modal = document.createElement("div");

	// kasih class sesuai tipe
	if (type === "certificate") {
		modal.classList.add("modal-certificate", "show");
	} else {
		modal.classList.add("modal", "show");
	}

	modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
	document.body.appendChild(modal);

	// klik modal untuk close
	modal.addEventListener("click", () => {
		modal.remove();
	});
}

// binding untuk project
document.querySelectorAll(".project img").forEach(img => {
	img.addEventListener("click", () => openModal(img, "project"));
});

// binding untuk certificate
document.querySelectorAll(".certificate img").forEach(img => {
	img.addEventListener("click", () => openModal(img, "certificate"));
});
