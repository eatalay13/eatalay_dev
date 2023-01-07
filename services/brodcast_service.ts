import { BroadcastChannel } from 'broadcast-channel';

export class BrodcastService {
    private _broadcastChannel: BroadcastChannel<string>;

    constructor() {
        this._broadcastChannel = new BroadcastChannel('site_channel');
    }

    public sendMessage(message: string) {
        if (message === '') return;

        this._broadcastChannel.postMessage(message);
    }

    public onMessage(callback: (message: string) => void) {
        this._broadcastChannel.onmessage = (message) => {
            callback(message);
        };
    }
}