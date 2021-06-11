const   HDWalletProvider = require('truffle-hdwallet-provider');
const Web3= require('web3');

const compiledFactory =require('./build/CampaignFactory.json');
const provider= new HDWalletProvider(
    'toe excuse slam grape reason great milk swing truly cruise doll hunt',
    'https://rinkeby.infura.io/v3/9a396ea2fa524cba85ddd56c00c85124'
);

const web3=new Web3(provider);

const deploy = async () =>
{
    const accounts =await web3.eth.getAccounts();
    console.log(accounts[0]);

   const result= await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data : '0x'+ compiledFactory.bytecode})
    .send({gas :'1000000' ,from : accounts[0]});

    console.log('Contract Deployed to ', result.options.address);
};

deploy();