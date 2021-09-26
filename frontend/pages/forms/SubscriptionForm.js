
export default function SubscriptionForm() {

    function setIsSubscribing(isSubscribing) {
        document.getElementById("subscribeButton").setAttribute("disabled", isSubscribing);
        document.getElementById("subscribeButton").innerHTML = (isSubscribing ? 'Subscribing..' : 'Subscribe!');
    }

    const subscribeUser = async event => {
        event.preventDefault();

        setIsSubscribing(true);

        const response = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: event.target.email.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        window.location.href = (response.status === 201) ? `/success` : `/failure`;
        setIsSubscribing(false);
    };

    return (
        <form onSubmit={subscribeUser}>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="text" autoComplete="email" required />
            <button id="subscribeButton" type="submit">Subscribe!</button>
        </form>
    )
}
