document.addEventListener('DOMContentLoaded', () => {
    let tableDiv = document.getElementById('tableDiv');
    tableDiv.innerHTML = '<table id="partituresTable"><thead><tr><th>Títol</th><th>Idioma original</th><th>Accions</th></tr></thead><tbody></tbody></table>';

    let tbody = document.querySelector('#partituresTable tbody');

    let records = [
        { title: 'La Balanguera', language: 'Català' },
        { title: 'Happy Birthday', language: 'English' },
        { title: 'Fur Elise', language: 'German' },
        { title: 'Twinkle Twinkle', language: 'English' }
    ];

    for (let i = 0; i < 100; i++) {
        let record = records[i % records.length];
        let tr = document.createElement('tr');

        let tdTitle = document.createElement('td');
        tdTitle.textContent = record.title;
        tr.appendChild(tdTitle);

        let tdLanguage = document.createElement('td');
        tdLanguage.textContent = record.language;
        tr.appendChild(tdLanguage);

        let tdActions = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.className = 'edit';
        tdActions.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            if (confirm('Estàs segur que vols eliminar aquesta partitura?')) {
                alert('Element esborrat');
                tr.remove();
            } else {
                alert('Acció cancel·lada');
            }
        });
        tdActions.appendChild(deleteButton);

        tr.appendChild(tdActions);
        tbody.appendChild(tr);
    }

    document.getElementById('login').addEventListener('click', () => {
        let loginWindow = window.open('', 'Login', 'width=400,height=300');
        loginWindow.document.write(`
            <html>
            <head><title>Login</title></head>
            <body>
                <form>
                    <label for="username">Usuari:</label>
                    <input type="text" id="username" name="username"><br><br>
                    <label for="password">Contrasenya:</label>
                    <input type="password" id="password" name="password"><br><br>
                    <button type="submit">Inicia sessió</button>
                </form>
            </body>
            </html>
        `);
        loginWindow.document.close();
    });
});
