console.log = () => { };

PayPal.Donation.Button({
    env: 'production',
    hosted_button_id: 'P2WTBRJB34V88',
    image: {
        src: 'assets/img/paypal-donate-button.png',
        alt: 'Donate with PayPal button',
        title: 'PayPal - The safer, easier way to pay online!',
    },
    onComplete: function (params) {
        console.log('================================================');
        console.log('Complited');
        console.log(params);
        console.log('================================================');
        // Your onComplete handler
    },
}).render('#donate-button');
// console.log('DonateButtonManager props ', props);