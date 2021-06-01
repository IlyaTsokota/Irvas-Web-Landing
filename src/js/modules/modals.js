const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                openModal(modal);
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });

        modal.addEventListener('click', ({ target }) => {
            if (target && target === modal) {
                closeModal(modal);
            }
        });
    }

    function openModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.body.classList.add('modal-open');
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            openModal(document.querySelector(selector));
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');

    // showModalByTime('.popup', 60000);
};

export default modals;