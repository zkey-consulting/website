const encEmail = "emlqYWRAemtleS5kZQ==";

function decodeEmail(encodedEmail) {
    return atob(encodedEmail);
}

document.getElementById('emailAddress').textContent = decodeEmail(encEmail);
