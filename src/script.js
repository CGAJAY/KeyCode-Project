window.addEventListener('keydown', (e) => {
    document.querySelector('.container').innerHTML = `
        <div class="key">
            ${e.key === ' ' ? 'Space' : e.key}
            <h2>e.key</h2>
        </div>
        <div class="key">
            ${e.keyCode}
            <h2>e.keyCode</h2>
        </div>
        <div class="key">
            ${e.code}
            <h2>e.code</h2>
        </div>
    `;
});