<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)

const logout = async () => {
    loading.value = true
    const { error } = await client.auth.signOut()
    if (error) {
        user.value = null;
        loading.value = false
        return alert('Something went wrong !')
    }
}
// watchEffect(() => {
//     if (!user.value) {
//         return navigateTo('/login');
//     }
// });
useHead({
    title: 'lily | Admin',
})
</script>

<template>
    <div class=" sticky top-[65px] h-[calc(100vh-65px)] py-2 rounded-lg shadow-lg">
        <div class="flex flex-col flex-grow pt-4 overflow-y-auto bg-white">
            <div class="flex items-center flex-shrink-0 px-4 ">
                <Logo class=" h-8 w-auto" />
            </div>
            <div class="px-4 mt-8">
                <label for="" class="sr-only"> Search </label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" name="" id=""
                        class="block w-full py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                        placeholder="Search here" />
                </div>
            </div>
            <div class="px-4 mt-6">
                <hr class="border-gray-200" />
            </div>
            <div class="flex flex-col flex-1 px-3 mt-6">
                <div class="space-y-4">
                    <nav class="flex-1 space-y-2">
                        <a href="/"
                            class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">

                            <Icon class="flex-shrink-0 w-5 h-5 mr-4" name="heroicons:home" />
                            Dashboard

                        </a>
                        <a href="#"
                            class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
                            <svg class="flex-shrink-0 w-5 h-5 mr-4 " xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Analytics
                            <svg class="w-4 h-6 ml-auto text-gray-400 group-hover:text-white"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <a href="/bookLicense"
                            class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
                            <Icon class="flex-shrink-0 w-5 h-5 mr-4" name="heroicons:cube" />
                            License

                        </a>
                    </nav>
                    <hr class="border-gray-200" />
                    <nav class="flex-1 space-y-2">
                        <a href="#"
                            class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">

                            <Icon class="flex-shrink-0 w-5 h-5 mr-4" name="heroicons:cog-8-tooth" />

                            Settings
                        </a>
                    </nav>
                    <nav class="flex-1 space-y-2">
                        <a href="#"
                            class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
                            <Icon class="flex-shrink-0 w-5 h-5 mr-4" name="heroicons:question-mark-circle" />
                            Help

                        </a>
                    </nav>
                    <nav class="flex-1 space-y-2">
                        <a href="#"
                            class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-indigo-600 group">
                            <Icon class="flex-shrink-0 w-5 h-5 mr-4" name="heroicons:arrow-left-on-rectangle" />
                            <button @click="logout"> Sign Out
                            </button>

                        </a>
                    </nav>
                </div>

                <div class="pb-4 mt-10">
                    <button type="button"
                        class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-100">
                        <img class="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png"
                            alt="" />
                        <p v-if="user" class=""> {{ user.user_metadata.username }}</p>
                        <svg class="w-5 h-5 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>
    
