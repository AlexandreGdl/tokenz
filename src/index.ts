import "reflect-metadata";
import dotenv from 'dotenv';
import { container } from 'tsyringe';
import { AppManager } from './types/app';
dotenv.config();

function initializeParameters(privateToken: string) {
  if (!container.isRegistered('PrivateToken')) {
    container.register('PrivateToken', {useValue: privateToken});
  };
}

initializeParameters(
  process.env.DS_PRIVATE_TOKEN ?? ''
)

const appManager = container.resolve(AppManager);