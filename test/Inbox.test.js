const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async ()=>{
    //TODO: get a list of all accounts

    accounts = await web3.eth.getAccounts();

    //TODO: use one of those accounts to deploy the contract
});

describe('Inbox',()=>{
    it('deploys a contract', () => {})
});