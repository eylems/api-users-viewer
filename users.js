(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const container = document.getElementById('cardsContainer');

        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <div class="section">
                    <div class="section-title">
                        <i class="fa-solid fa-user"></i> Temel Bilgiler
                    </div>
                    <div class="section-content">
                        <p>ID: ${user.id}</p>
                        <p>İsim: ${user.name}</p>
                        <p>Kullanıcı Adı: ${user.username}</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">
                        <i class="fa-solid fa-location-dot"></i> Adres Bilgileri
                    </div>
                    <div class="section-content">
                        <p>Sokak: ${user.address.street}</p>
                        <p>Suite: ${user.address.suite}</p>
                        <p>Şehir: ${user.address.city}</p>
                        <p>Posta Kodu: ${user.address.zipcode}</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">
                        <i class="fa-solid fa-building"></i> Şirket Bilgileri
                    </div>
                    <div class="section-content">
                        <p>Şirket: ${user.company.name}</p>
                        <p>Slogan: ${user.company.catchPhrase}</p>
                        <p>BS: ${user.company.bs}</p>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">
                        <i class="fa-solid fa-address-card"></i> İletişim Bilgileri
                    </div>
                    <div class="section-content">
                        <p>Email: ${user.email}</p>
                        <p>Telefon: ${user.phone}</p>
                        <p>Website: ${user.website}</p>
                    </div>
                </div>
            `;


            const linkButton = document.createElement('a');
            linkButton.href = `posts.html?userId=${user.id}`;
            linkButton.textContent = "Gönderilerini Gör";
            linkButton.className = 'view-posts-button';

            card.appendChild(linkButton);

            container.appendChild(card);
        });
    } catch (error) {
        console.error('Veri çekme hatası:', error);
    }
})();