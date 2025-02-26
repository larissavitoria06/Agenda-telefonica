const uri = 'http://localhost:4000';

const titulo = document.querySelector('header h1'); 
fetch(uri)
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp.titulo);

const corpo = document.querySelector('table tbody'); 
fetch(uri + '/telefones')
    .then(resp => resp.json())
    .then(resp => {
        resp.forEach(c => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${c.telefone_id}</td>
                <td>${c.telefone}</td>
                <td>${c.nome}</td>
               <td>${c.obs}</td>
            `;
            corpo.appendChild(linha);
        });
    });


const form = document.querySelector('form'); 
form.addEventListener('submit', (t) => {
    t.preventDefault();

    console.log('Formulário enviado');

 
    console.log('form.telefone:', form.elements.telefone.value);
    console.log('form.nome:', form.elements.nome.value);
    console.log('form.obs:', form.elements.obs.value);
    
    
 
    if (!form.elements.telefone.value || !form.elements.nome.value || !form.elements.obs.value) {
        console.error('Um ou mais campos do formulário não foram preenchidos.');
        return;
    }
    
    const body = {
        telefone: form.telefone.value,
        nome: form.nome.value,
        obs: form.obs.value
    };

    console.log('Dados do formulário:', body);

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.3.1' },
        body: JSON.stringify(body)
    };

    fetch(uri + '/telefones', options)
        .then(resp => resp.status)
        .then(resp => resp === 201 ? window.location.reload() : alert('Erro ao enviar a consulta'))
        .catch(err => console.error('Erro ao enviar a consulta:', err));
});


const botaoExcluir = document.querySelector('#botao-excluir'); // DOM
botaoExcluir.addEventListener('click', () => {
    const telefone_id = document.querySelector('#telefone-id').value;
    if (telefone_id) {
        fetch(`${uri}/telefones/${telefone_id}`,
             { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => resp === 200 ? window.location.reload() : alert('Erro ao excluir'))
            .catch(err => console.error(err));
    } else {
        alert('Por favor, insira um ID de consulta válido.');
    }
});

const botaoAtualizar = document.querySelector('#botao-atualizar'); // DOM
botaoAtualizar.addEventListener('click', () => {
    const telefone_id = document.querySelector('#telefone-id-update').value;
    const telefone = document.querySelector('#telefone-update').value;
    const nome = document.querySelector('#nome-update').value;
    const obs = document.querySelector('#obs-update').value;

    if (telefone_id && telefone && nome && obs) {
        const updateTel = {
            telefone: telefone,
            nome: nome,
            obs: obs
        };

        fetch(`${uri}/telefones/${telefone_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateTel)
        })
        .then(resp => resp.status)
        .then(resp => resp === 200 ? window.location.reload() : alert('Erro ao atualizar'))
        .catch(err => console.error(err));
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});







