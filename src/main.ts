import "./style.css";
import "./components/pla-message";
import "./components/pla-spinner";
import "./components/pla-is-alpha";
import "./components/pla-is-shiny";
import "./components/pla-gender";

function showMessage(): void {
  const message = document.createElement("pla-message");
  message.message = "Javascript created message";
  message.type = "warn";
  document.querySelector(".section-messages")?.append(message);
}

function showSpinner(): void {
  const spinner = document.createElement("pla-spinner");
  document.querySelector(".section-spinners")?.append(spinner);
  setTimeout(() => spinner.remove(), 8000);
}

document
  .querySelector<HTMLButtonElement>("#show-spinner")
  ?.addEventListener("click", showSpinner);

document
  .querySelector<HTMLButtonElement>("#show-message")
  ?.addEventListener("click", showMessage);
