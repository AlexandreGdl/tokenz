import {Client, GatewayIntentBits, Events, VoiceState} from 'discord.js';
import {inject, injectable} from 'tsyringe';

const usersToReactTo = ['535943731480756274', '277605153144569866'];
const userBalls = ["1143939745546776596"];

const solaryEmoteCode = "1143637205806485564";
@injectable()
export class AppManager {
  // client manager
  public client: Client;
  private appToken: string;

  constructor(@inject("PrivateToken") public privateToken?: string) {
    this.appToken = privateToken ?? '';
    this.client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions] });

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
    this.client.on(Events.MessageCreate, (message) => {
      if (usersToReactTo.includes(message.author.id)) {
        message.react(solaryEmoteCode)
        .then(() => message.react('🇸'))
        .then(() => message.react('🇴'))
        .then(() => message.react('🇱'))
        .then(() => message.react('🇦'))
        .then(() => message.react('🇷'))
        .then(() => message.react('🇾'))
        .catch((error) => {
          console.error('Error reacting to message:', error);
        });
      }
    })
    this.client.on(Events.VoiceStateUpdate, (oldState: VoiceState, newState: VoiceState) => {
      console.log('Voice State Update Triggered');
    });
  }
}