import "./css/base.css";
import "./css/style.css";
import "./components";

function showMessage(): void {
  const message = document.createElement("pla-message");

  message.message =
    document.querySelector<HTMLInputElement>("#new-message-text")?.value ?? "";

  message.type =
    (document.querySelector<HTMLSelectElement>("#new-message-type")?.value as
      | "info"
      | "success"
      | "warn"
      | "error") ?? "info";

  message.closable =
    document.querySelector<HTMLInputElement>("#new-message-closable")
      ?.checked ?? false;

  document.querySelector("#messages-area")?.append(message);
}

function showSpinner(): void {
  const spinner = document.createElement("pla-spinner");
  document.querySelector("#spinner-area")?.append(spinner);
  setTimeout(() => spinner.remove(), 8000);
}

document
  .querySelector<HTMLButtonElement>("#show-spinner")
  ?.addEventListener("click", showSpinner);

document
  .querySelector<HTMLButtonElement>("#show-message")
  ?.addEventListener("click", showMessage);
