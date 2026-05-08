export const githubInfoLoader = async () => {
    // localStorage browser me data save karta hai.
    // Isse baar-baar GitHub API call nahi hogi, rate limit se bachne me help milegi.
    const cachedProfile = localStorage.getItem('githubProfile');
    const cachedError = localStorage.getItem('githubProfileError');

    // Agar profile pehle se cached hai, direct wahi return kar dete hain.
    if (cachedProfile) {
        return JSON.parse(cachedProfile);
    }

    // Agar GitHub ne pehle 403/rate limit diya tha, reset time tak fir request nahi bhejenge.
    if (cachedError) {
        const parsedError = JSON.parse(cachedError);

        if (!parsedError.resetAt || Date.now() < parsedError.resetAt) {
            return { error: parsedError.message };
        }

        localStorage.removeItem('githubProfileError');
    }

    // Loader async function ho sakta hai, isliye yaha API call await kar sakte hain.
    const response = await fetch('https://api.github.com/users/khushiyadav03');
    const responseData = await response.json();

    // response.ok false ka matlab 404/403/500 jaisa error status aaya.
    if (!response.ok) {
        const resetTime = response.headers.get('x-ratelimit-reset');
        const resetAt = resetTime ? Number(resetTime) * 1000 : null;
        const resetMessage = resetTime
            ? ` Try again after ${new Date(resetAt).toLocaleTimeString()}.`
            : '';
        const message = `${responseData.message || `GitHub API error ${response.status}`}.${resetMessage}`;

        localStorage.setItem('githubProfileError', JSON.stringify({
            message,
            resetAt,
        }));

        return { error: message };
    }

    // Successful response ko cache kar rahe hain, taaki reload par API call repeat na ho.
    localStorage.setItem('githubProfile', JSON.stringify(responseData));

    return responseData;
}
