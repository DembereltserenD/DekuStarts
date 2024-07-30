document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.getElementById('range');
    const rangeValue = document.getElementById('rangeV');
    const statLevel = document.getElementById('stat-level');
    const showChampStats = document.querySelector('.show-champ-stats');
    const champStats = document.querySelector('.wf-champion__about__stats');

    // Update stats based on the selected level
    rangeInput.addEventListener('input', () => {
        const level = rangeInput.value;
        statLevel.textContent = level;
        rangeValue.textContent = level;
        rangeValue.style.left = `calc(${(level - 1) / 14 * 100}% + 10px)`;
    });

    // Toggle champion stats visibility
    showChampStats.addEventListener('click', () => {
        if (champStats.classList.contains('open')) {
            champStats.classList.remove('open');
            champStats.classList.add('closed');
            showChampStats.innerHTML = '<i class="far fa-eye"></i> Show Champ Stats';
        } else {
            champStats.classList.remove('closed');
            champStats.classList.add('open');
            showChampStats.innerHTML = '<i class="far fa-eye-slash"></i> Hide Champ Stats';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const selectorSpans = document.querySelectorAll('.selector span');
    const championCards = document.querySelectorAll('.champion-card');
    
    selectorSpans.forEach(span => {
        span.addEventListener('click', () => {
            const selectedRole = span.getAttribute('data-lane') || 'All Roles';
            
            // Remove 'selected' class from all spans and add to the clicked one
            selectorSpans.forEach(s => s.classList.remove('selected'));
            span.classList.add('selected');
            
            // Filter champion cards
            championCards.forEach(card => {
                if (selectedRole === 'All Roles' || card.querySelector('p').textContent.includes(selectedRole)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
