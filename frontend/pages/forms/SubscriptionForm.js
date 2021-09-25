
export default function SubscriptionForm() {
    const subscribeUser = async event => {
        event.preventDefault()

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
    };

    return (
        <form onSubmit={subscribeUser}>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="text" autoComplete="email" required />
            <button type="submit">Subscribe!</button>
        </form>
    )
}
