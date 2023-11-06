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
                            <UForm :state="state" class="space-y-3 items-center justify-center">
                                <UFormGroup label="Email" name="email" size="xl">
                                    <UInput v-model="state.email" placeholder="you@example.com"
                                        icon="i-heroicons-envelope" />
                                </UFormGroup>
                                <UFormGroup class="pb-6" label="Password" name="password" size="xl">
                                    <UInput v-model="state.password" type="password" />
                                </UFormGroup>
                                <div class="mt-5 flex items-center">
                                    <UCheckbox v-model="selected" name="rememberme" label="Remember me"
                                        class="mr-2 align-middle text-sm " />
                                    <span class="flex-1" />
                                    <NuxtLink to="/forgot-password"
                                        class="text-sm font-semibold text-indigo-400 hover:text-indigo-500">
                                        <u>Forgot password?</u>
                                    </NuxtLink>
                                </div>
                                <div class="flex justify-center">
                                    <UButton size="xl" block color="primary" type="submit"
                                        class="mt-5 rounded border bg-indigo-400 py-2 px-5 text-sm font-semibold text-gray-50 shadow hover:bg-indigo-500">
                                        Sign in</UButton>
                                </div>

                            </UForm>
                            <UCard class="flex items-center justify-center mt-6">
                                <p>Dont' have an account ?</p>
                                <NuxtLink to="/register"
                                    class=" flex items-center justify-center text-sm font-semibold text-indigo-400 hover:text-indigo-500">
                                    <u>Register</u>
                                </NuxtLink>
                            </UCard>
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
  