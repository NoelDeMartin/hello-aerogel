<template>
    <h1 class="w-full text-center text-4xl font-semibold">
        Tasks
    </h1>
    <ul v-if="tasks.length > 0" class="mt-4 border-b">
        <li v-for="task of tasks" :key="task.id" class="border border-b-0 bg-white px-2 py-3">
            {{ task.name }}
        </li>
    </ul>
    <AGForm :form="form" class="mt-2 flex w-full" @submit="Task.create({ name: form.draft }), form.reset()">
        <AGInput name="draft" class="w-full" />
        <AGButton submit>
            Add
        </AGButton>
    </AGForm>
</template>

<script setup lang="ts">
import { requiredStringInput, useForm } from '@aerogel/core';
import { useModelCollection } from '@aerogel/plugin-soukai';

import Task from '@/models/Task';

const form = useForm({ draft: requiredStringInput() });
const tasks = useModelCollection(Task);
</script>
