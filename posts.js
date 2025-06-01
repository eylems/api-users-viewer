const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get('userId');

if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
    userId = prompt("Lütfen 1 ile 10 arasında bir userId girin:");
    if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
        alert("Geçersiz bir kullanıcı ID'si girdiniz. İşlem iptal edildi.");
        throw new Error("Geçersiz kullanıcı ID'si.");
    }
}

const spinner = document.getElementById('spinner');
const container = document.getElementById('posts-container');

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Veriler alınamadı.");
        }
        return response.json();
    })
    .then((posts) => {
        spinner.style.display = 'none'; // spinner'ı gizle
        container.innerHTML = '';

        if (posts.length === 0) {
            container.innerHTML = `<p>Bu kullanıcıya ait gönderi bulunamadı.</p>`;
        } else {
            posts.forEach((post) => {
                const postCard = document.createElement('div');
                postCard.className = 'post-card';
                postCard.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                container.appendChild(postCard);
            });
        }
    })
    .catch((error) => {
        spinner.style.display = 'none';
        console.error(error);
        alert("Bir hata oluştu: " + error.message);
    });

document.getElementById('back-to-users').addEventListener('click', () => {
    window.location.href = 'index.html';
});
