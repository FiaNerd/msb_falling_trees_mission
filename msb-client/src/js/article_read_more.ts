export const toggleTextContent = (button: HTMLSpanElement, content: HTMLElement): void => {
	const hideText = button.getAttribute("data-hideText")
	const showText = button.getAttribute("data-showText")

	if (content.classList.contains("is-visible")) {
	  content.classList.remove("is-visible")
	  button.textContent = showText;
	} else {
	  content.classList.add("is-visible")
	  button.textContent = hideText
	}
  }

  const buttons = document.querySelectorAll<HTMLSpanElement>(".btn-expand-more")

  buttons.forEach(button => {
	const target = button.getAttribute("data-target")
	const content = document.querySelector<HTMLElement>(`#${target}`);

	if (content) {
	  button.addEventListener("click", () => toggleTextContent(button, content))
	}
  })
