const signupForm = document.getElementById('signup-form')
const errorMessage = document.getElementById('error-message')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.getElementById("signup-name").value.trim()
    const email = document.getElementById("signup-email").value.trim()
    const username = document.getElementById("signup-username").value.trim()
    const password = document.getElementById("signup-password").value.trim()
    const submitBtn = signupForm.querySelector('button')

    errorMessage.textContent = ''
    submitBtn.disabled = true

    try {
        const res = fetch('api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name, email, username, password})
        })
        
        const data = await res.json()

        if(res.ok) {
            window.location.href = '/'
        } else {
            errorMessage.textContent = data.error || 'Registration failed. please try again'
        }
    } catch (error) {
        console.log('network error:', error)
        errorMessage.textContent = 'Unable to connect. please try again'
    } finally {
        submitBtn.disabled = false
    }
})