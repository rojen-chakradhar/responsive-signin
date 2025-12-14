document.addEventListener("DOMContentLoaded", () => {
	const toggleButtons = document.querySelectorAll(".toggle-btn");
	const signInFormWrapper = document.getElementById("signin-form");
	const signUpFormWrapper = document.getElementById("signup-form");
	function switchForm(activeButton) {
		toggleButtons.forEach((btn) => btn.classList.remove("active"));
		signInFormWrapper.classList.remove("active-form");
		signUpFormWrapper.classList.remove("active-form");
		activeButton.classList.add("active");
		if (activeButton.textContent.trim() === "Sign In") {
			signInFormWrapper.classList.add("active-form");
		} else if (activeButton.textContent.trim() === "Sign Up") {
			signUpFormWrapper.classList.add("active-form");
		}
	}
	toggleButtons.forEach((button) => {
		button.addEventListener("click", () => {
			switchForm(button);
		});
	});
	const forms = document.querySelectorAll("form");
	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log("Form Submitted!");
			alert(
				`Submitted form: ${form.parentElement.id}! (Check console for data)`
			);
		});
	});
});
