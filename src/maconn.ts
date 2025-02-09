import {MultiaddrConnection, MultiaddrConnectionTimeline} from "@libp2p/interface-connection";
import { logger } from '@libp2p/logger';
import {Multiaddr} from "@multiformats/multiaddr";
import {Source, Sink} from "it-stream-types";
import {nopSink, nopSource} from "./util";

const log = logger('libp2p:webrtc:connection');

type WebRTCMultiaddrConnectionInit = {
  peerConnection: RTCPeerConnection;
  remoteAddr: Multiaddr;
  timeline: MultiaddrConnectionTimeline;
};

export class WebRTCMultiaddrConnection implements MultiaddrConnection {
  private peerConnection: RTCPeerConnection;
  remoteAddr: Multiaddr;
  timeline: MultiaddrConnectionTimeline;

  source: Source<Uint8Array> = nopSource
  sink: Sink<Uint8Array, Promise<void>> = nopSink;

  constructor(init: WebRTCMultiaddrConnectionInit) {
    this.remoteAddr = init.remoteAddr;
    this.timeline = init.timeline;
    this.peerConnection = init.peerConnection;
  }

  async close(err?: Error | undefined): Promise<void> {
    log.error("error closing connection", err)
    this.peerConnection.close()
  }
}
