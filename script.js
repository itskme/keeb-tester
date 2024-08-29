const keys = document.querySelectorAll('.key');
let capsLockOn = false;

document.addEventListener('keydown', (e) => {
    const key = e.key;
    const keyElement = Array.from(keys).find((k) => k.textContent.toLowerCase() === key.toLowerCase() || k.getAttribute('data-key') === key);
    if (keyElement) {
        keyElement.classList.add('active');
    }

    if (key === 'shift') {
        const shiftKeys = Array.from(keys).filter((k) => k.getAttribute('data-key') === 'ShiftLeft' || k.getAttribute('data-key') === 'ShiftRight');
        shiftKeys.forEach((shiftKey) => shiftKey.classList.add('active'));
    }

    if (key === 'alt') {
        const altKeys = Array.from(keys).filter((k) => k.getAttribute('data-key') === 'AltLeft' || k.getAttribute('data-key') === 'AltRight');
        altKeys.forEach((altKey) => altKey.classList.add('active'));
    }

    if (key === 'control') {
        const ctrlKeys = Array.from(keys).filter((k) => k.getAttribute('data-key') === 'CtrlLeft' || k.getAttribute('data-key') === 'CtrlRight');
        ctrlKeys.forEach((ctrlKey) => ctrlKey.classList.add('active'));
    }
    
    if (key === 'CapsLock') {
        capsLockOn = !capsLockOn;
        const capsLockKey = Array.from(keys).find((k) => k.getAttribute('data-key') === 'CapsLock');
        if (capsLockOn) {
            capsLockKey.classList.add('active');
        } else {
            capsLockKey.classList.remove('active');
        }
    }
});

document.addEventListener('keyup', (e) => {
    const key = e.key;
    const keyElement = Array.from(keys).find((k) => k.textContent.toLowerCase() === key.toLowerCase() || k.getAttribute('data-key') === key);
    if (keyElement && key !== 'CapsLock') {
        keyElement.classList.remove('active');
    }


    if (key === 'shift') {
        const shiftKeys = Array.from(keys).filter((k) => k.getAttribute('data-key') === 'ShiftLeft' || k.getAttribute('data-key') === 'ShiftRight');
        shiftKeys.forEach((shiftKey) => shiftKey.classList.remove('active'));
    }

    
    if (key === 'alt') {
        const altKeys = Array.from(keys).filter((k) => k.getAttribute('data-key') === 'AltLeft' || k.getAttribute('data-key') === 'AltRight');
        altKeys.forEach((altKey) => altKey.classList.remove('active'));
    }

   
    if (key === 'control') {
        const ctrlKeys = Array.from(keys).filter((k) => k.getAttribute('data-key') === 'CtrlLeft' || k.getAttribute('data-key') === 'CtrlRight');
        ctrlKeys.forEach((ctrlKey) => ctrlKey.classList.remove('active'));
    }
});