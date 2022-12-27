import Peer  from 'peerjs';

describe('peerjs test', () => {

    it('on test', () => {
        const peer = new Peer('rudqls02');

        peer.on('connection' , (conn) => {
    
        })
    }).timeout(3000)

    
})