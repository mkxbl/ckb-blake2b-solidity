const Blake2bTest = artifacts.require('Blake2bTest.sol');

contract('Blake2bTest', function (accounts) {
    let contract;
    before(async () => {
        contract = await Blake2bTest.new();
    });

    it('test blake2b', async () => {
        let input = Buffer.from('6162630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 'hex');
        let ret = await contract.testOneBlock.call(input, 3);
        assert.equal(ret, '0x521c604cc09b814b0a9106305395def35d0211b9996a3e0f326ae4d671bd8fc2', 'hash mismatch');
        let gas = await contract.testOneBlock.estimateGas(input, 3);
        console.log('Gas usage', gas);
    });
});