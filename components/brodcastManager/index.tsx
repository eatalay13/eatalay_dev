"use client"

import { BrodcastService } from "@services/brodcast_service";

export default function BrodcastManager() {
    let _brodcastService = new BrodcastService();

    _brodcastService.onMessage((message) => {
        console.log(message);
    });

    return (
        <div>
            <button onClick={() => _brodcastService.sendMessage("Hello World")}>Send Message</button>
        </div>
    );
}
