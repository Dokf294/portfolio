export function InitForm() {
    const form = document.querySelector('.contact__form');

    form.addEventListener('submit', (e) => {
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!message) {
            e.preventDefault();
            alert("Please enter a message.");
            return;
        }
    });

}
