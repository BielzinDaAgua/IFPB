window.getCepInfo = getCepInfo;
const cpf = document.querySelector("#cep");
cep.addEventListener("blur", () => {
  let value = cep.value.replace(/[^0-9]/g, "").replace(/^([\d]{2})([\d]{3})?([\d]{3})?/, "$1.$2-$3");
  
  cep.value = value;
});


async function getCepInfo() {
    cep.classList.remove('is-invalid');
    const cepValue = cep.value;
    cep.setCustomValidity('');
    const cepzero = ""


    if (cepValue.length >= 8) {
    const url = `https://viacep.com.br/ws/${cepValue}/json/`;

    try {
        const response = await fetch(url);

        const result = await response.json();

        if (result.erro) {
        throw new Error('Invalid CEP');
        }

        if (result.logradouro) {
        street.value = result.logradouro;
        distric.value = result.bairro
        city.value = result.localidade
        state.value = result.uf
        }
        cep.addEventListener("blur", () => {
            let value = cep.value.replace(/[^0-9]/g, "").replace(/^([\d]{2})([\d]{3})?([\d]{3})?/, "$1.$2-$3");
        
            cep.value = value;
        });

    } catch (error) {
        const message = 'CEP inconsistente';

        cep.setCustomValidity(message);

        invalidCepFeedback.innerText = message;

        cep.classList.add('is-invalid');
    }
    
    } else {
    form.reset();
    cep.value = cepValue;
    }
}


