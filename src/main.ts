import "./style.css";
import "./components/pla-message";
import "./components/pla-spinner";

function showMessage(): void {
  const message = document.createElement("pla-message");
  message.message = "Javascript created message";
  document.querySelector(".section-messages")?.append(message);
}

function showSpinner(): void {
  document
    .querySelector(".section-spinners")
    ?.append(document.createElement("pla-spinner"));
}

document
  .querySelector<HTMLButtonElement>("#show-spinner")
  ?.addEventListener("click", showSpinner);

document
  .querySelector<HTMLButtonElement>("#show-message")
  ?.addEventListener("click", showMessage);
