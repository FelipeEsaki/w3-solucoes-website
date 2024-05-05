const servicos = [
    {
        imagem: `assets/servicos/consignado.jpg`,
        servico: 'Crédito Consignado',
        texto: `É uma modalidade de empréstimo para aposentados, pensionistas, servidores públicos (Federal, Estadual e Municipal), na qual as parcelas são descontadas diretamente do benefício, com juros baixíssimos.`
    },
    {
        imagem: `assets/servicos/pessoal.jpg`,
        servico: 'Crédito Pessoal',
        texto: `- Débito na conta de luz <br> - Via cartão de crédito <br> - Débito em conta <br> - Crédito FGTS `
    },
    {
        imagem: `assets/servicos/rural.png`,
        servico: 'Crédito Rural',
        texto: `O crédito rural é um financiamento que <strong>auxilia produtores rurais</strong> a <strong>expandirem suas operações</strong>, fazer investimentos ou <strong>custear a produção.`
    },
    {
        imagem: `assets/servicos/limpa.png`,
        servico: 'Limpa Nome',
        texto: `O limpa nome é um serviço onde todas as suas <strong>dívidas serão colocadas em status de sigilo total</strong> durante 12 meses, elevando seu Score e <strong>facilitando aprovações.`
    },
    {
        imagem: `assets/servicos/seguro.png`,
        servico: 'Seguros',
        texto: `A Easy Capital possui <strong>todos os tipos de seguros</strong> e <strong>mais de 10 seguradoras</strong> parceiras para melhor atender sua necessidade!`
    },
    {
        imagem: `assets/servicos/consorcio.jpg`,
        servico: 'Consórcios',
        texto: `A Easy Capital oferece a <strong>melhor opção de consórcio</strong> de acordo com sua necessidade. Trabalhamos com todos os tipos de consórcios!`
    },
    {
        imagem: `assets/servicos/solar.jpg`,
        servico: 'Energia Solar',
        texto: `Já pensou em <strong>reduzir sua conta de energia em até 95%</strong>? Fazemos seu projeto e financiamento do investimento!`
    },
    {
        imagem: `assets/servicos/capital.jpg`,
        servico: 'Capital de Giro',
        texto: `O capital de giro é um produto para <strong>atender as necessidades de caixa da sua empresa</strong> e <strong>custear o ciclo operacional</strong>!`
    },
    {
        imagem: `assets/servicos/carro.jpg`,
        servico: 'Financiamento Veicular',
        texto: `Está na hora de adquirir seu <strong>novo veículo</strong>! Com a Easy Capital você tem as <strong>melhores taxas</strong> e opções de financiamento!`
    },
    {
        imagem: `assets/servicos/casa.jpg`,
        servico: 'Financiamento Residencial',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a Easy Capital você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/conta.jpg`,
        servico: 'Abertura de conta',
        texto: `Abra sua conta bancária <strong>sem custo</strong>! Com a Easy Capital você tem os <strong>melhores bancos</strong> para abrir sua conta bancária digital!`
    },
    {
        imagem: `assets/servicos/consultoria.jpg`,
        servico: 'Operação de Cobrança',
        texto: `Deixe a parte chata com a Easy, se preocupe com a gestão e vendas da sua empresa, que <strong>nossa equipe especializada cuida dos seus recebíveis para você</strong>!`
    },
    {
        imagem: `assets/servicos/maquina.jpg`,
        servico: 'Maquininha de Cartão',
        texto: `A Easy Capital oferece <strong>diversas opções de maquininha de cartão</strong> com as <strong>melhores taxas</strong> do mercado! `
    },
    {
        imagem: `assets/servicos/cambio.png`,
        servico: 'Câmbio',
        texto: `A Easy Capital oferece serviço de câmbio personalizado para cada situação!<strong> Temos na modalidade PF, PJ e Trade Finance</strong>! `
    },
    {
        imagem: `assets/servicos/recebiveis.png`,
        servico: 'Antecipação de Recebíveis',
        texto: `Nós da Easy Capital trabalhamos na <strong>antecipação de títulos, Cartões, Fornecedores e também com descontos de duplicatas</strong>! `
    },

];

for (const servico of servicos) {
    const content = `<div class="servico">
    <img src="${servico.imagem}"/>
    <h2>${servico.servico}</h2>
    <p>${servico.texto} </p>
</div>`

    document.querySelector('.servicos').innerHTML += content;
}