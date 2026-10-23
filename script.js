document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-content');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => toggleAccordion(item));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion(item);
            }
        });
    });

    function toggleAccordion(clickedItem) {
        const isActive = clickedItem.classList.contains('active');

        // 모든 항목 닫기
        timelineItems.forEach(item => {
            item.classList.remove('active');
            item.setAttribute('aria-expanded', 'false');
            const details = item.querySelector('.item-details');
            if (details) details.style.display = 'none';
            const arrow = item.querySelector('.arrow');
            if (arrow) arrow.textContent = '▼';
            const marker = item.parentElement.querySelector('.timeline-marker');
            if (marker) marker.classList.remove('active');
        });

        // 클릭한 항목 열기
        if (!isActive) {
            clickedItem.classList.add('active');
            clickedItem.setAttribute('aria-expanded', 'true');
            const details = clickedItem.querySelector('.item-details');
            if (details) details.style.display = 'block';
            const arrow = clickedItem.querySelector('.arrow');
            if (arrow) arrow.textContent = '▲';
            const marker = clickedItem.parentElement.querySelector('.timeline-marker');
            if (marker) marker.classList.add('active');
        }
    }
});
