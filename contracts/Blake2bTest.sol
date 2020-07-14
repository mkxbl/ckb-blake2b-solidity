pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./Blake2b.sol";

contract Blake2bTest {
    function testOneBlock(bytes memory input, uint input_len) public returns (bytes memory) {
        return Blake2b.digest(input, input_len);
    }
}