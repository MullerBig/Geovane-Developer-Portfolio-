function updateProfileInfo(dadosRecebidos) {

    const photo = document.getElementById('profile.photo');
    photo.src = dadosRecebidos.photo;
    photo.alt = `Foto de ${dadosRecebidos.name}`;

    const name = document.getElementById('profile.name');
    name.innerText = dadosRecebidos.name;

    const job = document.getElementById('profile.job');
    job.innerText = dadosRecebidos.job;

    const location = document.getElementById('profile.location');
    location.innerText = dadosRecebidos.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = dadosRecebidos.phone;
    phone.href = `tel:${dadosRecebidos.phone}`;

    const email = document.getElementById('profile.email');
    email.innerText = dadosRecebidos.email;
    email.href = `mailto:${dadosRecebidos.email}`;

}

function updateHardSkills(dadosRecebidos) {

    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML = dadosRecebidos.skills.hardSkills.map(skill => {
        return `<li> <img src="${skill.logo}" alt="Logo de: ${skill.name}" title="${skill.name}"> </li>`
    }).join('')

}    


function updateSoftSkills(dadosRecebidos) {

    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML = dadosRecebidos.skills.softSkills.map(skill => {
        return `<li>${skill}</li>`
    }).join('')

}

function updateLanguages(dadosRecebidos) {

    const languages = document.getElementById('profile.languages');

    languages.innerHTML = dadosRecebidos.languages.map(language => {
        return `<li>${language}</li>`
    }).join('')

}   

function updatePortfolio(dadosRecebidos) {
    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = dadosRecebidos.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateAcademicExperience(dadosRecebidos) {
    const academicExperience = document.getElementById('profile.academicExperience');

    academicExperience.innerHTML = dadosRecebidos.academicExperience.map(experience => {

        return `
        
        <li>
        
            <h3>${experience.name}</h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>
        
        </li>
        
        `

    }).join('')

}

function updateEducation(dadosRecebidos) {
    const education = document.getElementById('profile.education');

    education.innerHTML = dadosRecebidos.education.map(education => {
        return `

            <li class="education__item">
                <h3 class="title__Education">${education.course}</h3>

                <p class="institution">Instituição: <span>${education.institution}</span></p>

                <div class="education__meta">
                    <span class="period">Periodo: ${education.period}</span>
                    <span class="status">Status: ${education.status}</span>
                </div>
            </li>

        `
    }).join('')
}


function updateCertifications(dadosRecebidos) {
    const certifications = document.getElementById('profile.certifications');

    certifications.innerHTML = dadosRecebidos.certifications.map(certification => {
        return `

        <li>
        
            <h3>${certification.name}</h3>
            <img src="${certification.src}" alt="Logo de ${certification.name}">
        
        </li>

        `
    }).join('')
}




function funcaoPrincipal(dadosRecebidos) {
    updateProfileInfo(dadosRecebidos);
    updateHardSkills(dadosRecebidos);
    updateSoftSkills(dadosRecebidos);
    updateLanguages(dadosRecebidos);
    updatePortfolio(dadosRecebidos);
    updateAcademicExperience(dadosRecebidos);
    updateEducation(dadosRecebidos);
    updateCertifications(dadosRecebidos);
}   
 

(async () => {

    const dadosRecebidos = await buscarDados();
    funcaoPrincipal(dadosRecebidos);

    console.log("Dados recebidos no main.js: ", dadosRecebidos);


})()