const signinForm = document.getElementById('signin-form')
const errorMessage = document.getElementById('error-message')

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = document.getElementById('signin-username').value.trim()
    const password = document.getElementById('signin-password').value.trim()
    const submitBtn = signinForm.querySelector('button')

    errorMessage.textContent = ''
    submitBtn.disabled = true

    try {
        const res = await fetch('api/auth/login', {
            method: POST,
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ username, password})
        })

        const data = await res.json()

        if(res.ok) {
            window.location.href = '/'
        } else {
            errorMessage.textContent = data.error || 'Login fail please try again'
        }
    } catch (error) {
        console.log('network error', error)
        errorMessage.textContent = 'Unable to connect. please try again.'
    } finally {
        submitBtn.disabled = false
    }
})