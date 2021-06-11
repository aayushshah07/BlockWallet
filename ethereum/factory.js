import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf4e5feABd62E0A0850c359b6c864E277720A0d41'
);


export default instance;