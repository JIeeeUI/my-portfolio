document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-content');

    timelineItems.forEach(item => {
        // 클릭 이벤트
        item.addEventListener('click', () => {
            toggleAccordion(item);
        });

        // 키보드 접근성 (Enter 또는 Space 키)
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // 스크롤 방지
                toggleAccordion(item);
            }
        });
    });

    function toggleAccordion(clickedItem) {
        const isActive = clickedItem.classList.contains('active');

        // 1. 모든 항목을 닫고 초기화 (기존에 열려있던 것 접기)
        timelineItems.forEach(item => {
            item.classList.remove('active');
            item.setAttribute('aria-expanded', 'false');
            const details = item.querySelector('.item-details');
            if (details) details.style.display = 'none';
            
            // 화살표 방향 초기화
            const arrow = item.querySelector('.arrow');
            if (arrow) arrow.textContent = '▼';

            // 마커 초기화 (HTML에 active 클래스가 있는 경우를 대비)
            const marker = item.parentElement.querySelector('.timeline-marker');
            if (marker) marker.classList.remove('active');
        });

        // 2. 만약 클릭한 항목이 원래 닫혀있던 상태라면 열기
        if (!isActive) {
            clickedItem.classList.add('active');
            clickedItem.setAttribute('aria-expanded', 'true');
            
            const details = clickedItem.querySelector('.item-details');
            if (details) details.style.display = 'block';

            // 화살표 방향 변경
            const arrow = clickedItem.querySelector('.arrow');
            if (arrow) arrow.textContent = '▲';

            // 마커 활성화
            const marker = clickedItem.parentElement.querySelector('.timeline-marker');
            if (marker) marker.classList.add('active');
        }
        // 만약 클릭한 항목이 원래 열려있던 상태라면, 1번 로직에 의해 그냥 닫힌 상태로 유지됨.
    }
});
    // ==========================================
    // Contact 모달 창 열기/닫기 기능
    // ==========================================
    const openBtn = document.getElementById('open-contact');
    const closeBtn = document.getElementById('close-contact');
    const modal = document.getElementById('contact-modal');

    if (openBtn && closeBtn && modal) {
        // 1. 버튼 클릭 시 모달 열기
        openBtn.addEventListener('click', () => {
            modal.classList.add('show');
        });

        // 2. X 버튼 클릭 시 모달 닫기
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // 3. 모달 바깥 배경 클릭 시 모달 닫기
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        // 4. 키보드 ESC 누르면 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show');
            }
        });
    }
