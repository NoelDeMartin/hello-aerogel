import Task from '@/models/Task';
import { Events, Service } from '@aerogel/core';
import { Solid } from '@aerogel/plugin-solid';
import { facade, stringToSlug, urlResolveDirectory } from '@noeldemartin/utils';

export class TasksService extends Service {

    protected async boot(): Promise<void> {
        Events.on('auth:login', async (session) => {
            const name = 'Tasks';
            const url = urlResolveDirectory(session.user.storageUrls[0], stringToSlug(name));
            const container = await Solid.createPrivateContainer({
                name,
                url,
                registerFor: Task,
                reuseExisting: true,
            });

            Task.collection = container.url;
            Task.setEngine(session.authenticator.engine);
        });
    }

}

export default facade(TasksService);
