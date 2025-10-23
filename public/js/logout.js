export async function logout() {
    try {
        const res = await fetch('/api/auth/logout')
        window.location.href = '/'
    } catch(err) {
        console.log(err)
    }
}