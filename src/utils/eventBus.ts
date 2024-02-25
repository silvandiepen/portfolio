import mitt from 'mitt';

export const EventAction = {
   MOBILE_NAVIGATION: 'MOBILE_NAVIGATION',
};
export type EventAction = typeof EventAction[keyof typeof EventAction];


export const eventBus = mitt();

