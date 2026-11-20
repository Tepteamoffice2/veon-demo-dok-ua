// Signature «Ваше авто»: what the visitor typed (plate, VIN or make) is repeated in the header chip,
// the expert heading and the «Гараж» card. Nothing is looked up or invented — only the visitor's own input.
const KEY = "dok-car";

function render(car: string): void {
  document.querySelectorAll<HTMLElement>("[data-car-text]").forEach((el) => {
    el.textContent = car || el.dataset.empty || "";
    el.classList.toggle("is-empty", !car);
  });
  document.querySelectorAll<HTMLElement>("[data-car-show]").forEach((el) => { el.hidden = !car; });
  document.querySelectorAll<HTMLElement>("[data-car-hide]").forEach((el) => { el.hidden = !!car; });
  document.documentElement.classList.toggle("has-car", !!car);
}

export function setCar(car: string): void {
  try { car ? sessionStorage.setItem(KEY, car) : sessionStorage.removeItem(KEY); } catch { /* storage off */ }
  render(car);
}

export function initCar(): void {
  let car = "";
  try { car = sessionStorage.getItem(KEY) || ""; } catch { /* storage off */ }
  render(car);
  // «Змінити» / «Додайте авто»: back to the picker and its field
  document.querySelectorAll<HTMLAnchorElement>("[data-car-edit]").forEach((a) => a.addEventListener("click", () => {
    window.setTimeout(() => {
      const field = document.querySelector<HTMLElement>("#hero .panel:not([hidden]) input, #hero .panel:not([hidden]) select");
      field?.focus({ preventScroll: true });
    }, 450);
  }));
}
