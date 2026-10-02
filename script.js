let card_cont = document.querySelector('.card_container')

function card(questions) {
    const card = document.createElement("div");
    card.classList.add('card');
    card.innerHTML = `<p>${questions.question}</p>
            <form class="answers">
                ${questions.answers.map(answer => `
                <label class="answer">
                    <input name="name-${questions.id}" type="radio" data-correct="${answer.correct}">
                    <span>${answer.text}</span> 
                </label>
                `).join("")}
            </form>`;
    return card
}

questions.forEach(question => {
    card_cont.append(card(question));
});

card_cont.addEventListener('click', function(event) {
    const card = event.target.closest(".card");

    const checkbox = card.querySelector(
    'input[type="radio"]:checked'
    );
    console.log('yes')

    if(checkbox.dataset.correct == 'true') {
        checkbox.parentElement.style.color = "green";
    } else {
        checkbox.parentElement.style.color = "red";
    }
})