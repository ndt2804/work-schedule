  
<script setup lang="ts">

import { ref } from "vue";
const user = useSupabaseUser();
const email = ref("");
const password = ref("");
const errorMsg = ref("");
const supabase = useSupabaseClient();
const selected = ref(true)

const state = ref({
    email: undefined,
    password: undefined,
});
definePageMeta({
    layout: 'custom'
})

</script>
<template>
    <div>
        <div class="flex">
            <div class="min-h-screen flex-1">
                <div class="flex h-full items-center py-8 px-5">
                    <main class=" mx-auto flex w-full max-w-sm flex-col">
                        <UCard class=" h-auto">
                            <UFormGroup label="Email" name="email" size="xl">
                                <UInput v-model="state.email" placeholder="you@example.com" icon="i-heroicons-envelope" />
                            </UFormGroup>
                            <div class="mt-5 flex items-center">
                                <NuxtLink to="/login" class="text-sm font-semibold text-indigo-400 hover:text-indigo-500">
                                    <u>Login</u>
                                </NuxtLink>
                                <span class="flex-1" />
                                <NuxtLink to="/register"
                                    class="text-sm font-semibold text-indigo-400 hover:text-indigo-500">
                                    <u>Register</u>
                                </NuxtLink>
                            </div>
                            <div class="flex justify-center">
                                <UButton size="xl" block color="primary" type="submit"
                                    class="mt-5 rounded border bg-indigo-400 py-2 px-5 text-sm font-semibold text-gray-50 shadow hover:bg-indigo-500">
                                    Forgot Password?</UButton>
                            </div>
                        </UCard>
                    </main>
                </div>
            </div>
            <div class="hidden min-h-screen flex-1 bg-gray-50 px-5 py-5 lg:flex">
                <div class="mx-auto flex h-full items-center">
                    <img class="h-full" src="~/assets/background.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
