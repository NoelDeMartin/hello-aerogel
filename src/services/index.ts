import Tasks from './Tasks';

export const services = {
    $tasks: Tasks,
};

export type AppServices = typeof services;

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties extends AppServices {}
}
