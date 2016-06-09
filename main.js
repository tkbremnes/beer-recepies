import App from './scripts/App.jsx';


function handleMessageData(data) {
    console.log(`Web received: ${ data.type }`);

    switch (data.type) {
        case 'CACHED':
            console.log('OFFLINE CACHED!');
            break;
        default:

    }
};

let messageChannel;
function setupMessageChannel(_messageChannel) {
    messageChannel = new MessageChannel();
    messageChannel.port1.addEventListener('message', (event) => {
        handleMessageData(event.data);
    });
}

function sendMessage(message) {
    console.log(`Web sending: ${ message.type }`);
    navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
}


// TODO: put this elsewhere
function registerServiceWorker() {
    const serviceWorker = window.navigator.serviceWorker;
    serviceWorker.register('./service-worker.js')
        .then((serviceWorkerRegistration) => {
            return serviceWorker.ready.then(() => {
                // setupMessageChannel();

                // sendMessage({
                //     type: "REGISTER"
                // });
            });
        });
}
registerServiceWorker();
