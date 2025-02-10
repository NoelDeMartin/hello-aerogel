<template>
    <AGAppLayout class="flex flex-col items-center justify-center bg-blue-50">
        <main class="w-full max-w-prose">
            <AGSolidStatus class="mb-4" />
            <TasksList v-if="$solid.isLoggedIn()" />
        </main>
    </AGAppLayout>
</template>
