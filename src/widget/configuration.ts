import { IConfiguration } from "../typings";

export const defaultConfiguration: IConfiguration = {
    chatServer: '/botman',
    frameEndpoint: '/botman/chat',
    timeFormat: 'HH:MM',
    dateTimeFormat: 'm/d/yy HH:MM',
    title: 'Experian Help',
    cookieValidInDays: 1,
    introMessage: '',
    placeholderText: 'Send a message...',
    displayMessageTime: true,
    sendWidgetOpenedEvent: false,
    widgetOpenedEventData: '',
    mainColor: '#2196F3',
    headerTextColor: '#FFF',
    bubbleBackground: '#408591',
    bubbleAvatarUrl: '',
    desktopHeight: '100vh',
    desktopWidth: 370,
    mobileHeight: '100%',
    mobileWidth: '300px',
    videoHeight: 160,
    aboutLink: 'https://botman.io',
    aboutText: '⚡ Powered by Botman',
    chatId: '',
    userId: '',
    alwaysUseFloatingButton: false,
    useEcho: false,
    echoChannel: (userId: string) => '',
    echoConfiguration: {},
    echoEventName: '.message.created',
    echoChannelType: 'private'
};
