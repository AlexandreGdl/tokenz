import {Client, GatewayIntentBits, Events, VoiceState} from 'discord.js';
import {inject, injectable} from 'tsyringe';

@injectable()
export class AppManager {
  // client manager
  public client: Client;
  private appToken: string;

  constructor(@inject("PrivateToken") public privateToken?: string) {
    this.appToken = privateToken ?? '';
    this.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

    this.init();
  }

  private init() {
    try {
      this.client.login(this.appToken);
      this.listen();
      console.log('Discord client connected successfully 🚀');
    } catch (e) {
      console.log('Discord client couldn\'t connect to servers');
    }
  }

  private listen() {
    this.client.on(Events.VoiceStateUpdate, (oldState: VoiceState, newState: VoiceState) => {
      console.log('Voice State Update Triggered');
    });
  }
}