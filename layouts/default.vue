<template>
    <div>
        <div class="sticky">
            <TheTopBar />

        </div>
        <div class="flex flex-1 py-10 pl-4">
            <TheMenu />
            <div class=" pl-2 py-20">
                <slot />

            </div>
        </div>
    </div>
</template>