const container = document.querySelector('#container');

window.setTimeout(() => {
    if (container.innerText === 'Loading...') {
        console.log('you appear to be off line');
    }
}, 2000);
